import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

console.log('Available Environment Variables:', Object.keys(process.env).filter(key => key.includes('RAZORPAY')));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'rzp_secret_placeholder',
});

console.log('Razorpay Initialized with Key ID:', process.env.RAZORPAY_KEY_ID ? 'PRESENT' : 'MISSING');

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Razorpay Config API
  app.get('/api/razorpay-key', (req, res) => {
    const keyId = process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder';
    console.log('Serving Razorpay Key ID:', keyId.startsWith('rzp_test') ? 'TEST/PLACEHOLDER' : 'LIVE/PROD');
    res.json({ keyId });
  });

  // Razorpay Order Creation API
  app.post('/api/create-order', async (req, res) => {
    const { amount, currency = 'INR', receipt } = req.body;
    console.log(`Creating order for amount: ${amount} ${currency}`);
    
    try {
      const options = {
        amount: Math.round(amount * 100), // Ensure it's an integer
        currency,
        receipt,
      };
      const order = await razorpay.orders.create(options);
      console.log('Order created successfully:', order.id);
      res.json(order);
    } catch (error: any) {
      console.error('Razorpay Order Creation Error:', error);
      res.status(500).json({ 
        error: 'Failed to create order', 
        details: error.message || 'Unknown error',
        code: error.code || 'UNKNOWN'
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
