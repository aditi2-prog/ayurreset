import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Razorpay Config API
app.get('/api/razorpay-key', (req, res) => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  if (!keyId) {
    return res.status(500).json({ error: 'Razorpay Key ID not configured' });
  }
  res.json({ keyId });
});

// Razorpay Order Creation API
app.post('/api/create-order', async (req, res) => {
  const { amount, currency = 'INR', receipt } = req.body;
  
  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  try {
    const options = {
      amount: Math.round(amount * 100), // amount in the smallest currency unit (paise)
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error: any) {
    res.status(500).json({ 
      error: 'Failed to create order', 
      details: error.message || 'Unknown error'
    });
  }
});

export default app;
