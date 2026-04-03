import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: '1',
    slug: 'bloated-healthy-eating',
    title: 'Why You Feel Bloated Even After Eating Healthy',
    excerpt: 'Ever wondered why your expensive salads and green smoothies leave you feeling like a balloon? The answer lies in your Agni (digestive fire).',
    date: 'April 2, 2026',
    author: 'Dr. Anjali Sharma',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/bloating/800/600',
    content: `
      <h2 class="text-2xl font-bold mb-4">The Paradox of Healthy Eating</h2>
      <p class="mb-6">You're eating organic, you've cut out processed sugar, and you're drinking green smoothies every morning. Yet, by 4 PM, you're unbuttoning your jeans. Why?</p>
      
      <h2 class="text-2xl font-bold mb-4">1. Raw Foods vs. Weak Digestion</h2>
      <p class="mb-6">In Ayurveda, we call your digestive capacity 'Agni'. If your Agni is weak, raw salads and cold smoothies are like throwing ice on a small campfire. They extinguish the very fire needed to break down nutrients, leading to fermentation and gas.</p>
      
      <h2 class="text-2xl font-bold mb-4">2. The 'Healthy' Foods That Cause Gas</h2>
      <p class="mb-6">Cruciferous vegetables like kale, broccoli, and cauliflower are nutritional powerhouses, but they are also high in complex sugars that are difficult to digest if not cooked properly with warming spices like ginger or cumin.</p>
      
      <h2 class="text-2xl font-bold mb-4">3. Drinking Water with Meals</h2>
      <p class="mb-6">Gulping down cold water during a meal dilutes your stomach acid. Try sipping warm water or herbal tea instead to support the breakdown of food.</p>
      
      <div class="bg-green-50 p-6 rounded-2xl border border-green-100 my-8">
        <h3 class="font-bold text-green-800 mb-2">Quick Fix:</h3>
        <p class="text-green-700">Try adding a pinch of roasted cumin powder and rock salt to your meals. It acts as a natural digestive stimulant.</p>
      </div>
    `
  },
  {
    id: '2',
    slug: 'ayurveda-modern-lifestyle',
    title: 'Ayurveda Explained Simply for Modern Lifestyle',
    excerpt: 'Ayurveda isn’t just about herbs and oils; it’s a manual for living in sync with nature while navigating a 9-to-5 desk job.',
    date: 'March 28, 2026',
    author: 'Aditi Chourasia',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/lifestyle/800/600',
    content: `
      <h2 class="text-2xl font-bold mb-4">Ancient Wisdom, Modern Desk</h2>
      <p class="mb-6">Most people think Ayurveda requires moving to a forest and meditating all day. In reality, it's about making small, strategic adjustments to your existing routine.</p>
      
      <h2 class="text-2xl font-bold mb-4">The Circadian Rhythm</h2>
      <p class="mb-6">Ayurveda teaches that our bodies follow the sun. Your strongest digestion is between 12 PM and 2 PM when the sun is at its peak. This is when you should eat your largest meal, not at 9 PM after a long workday.</p>
      
      <h2 class="text-2xl font-bold mb-4">Digital Vata Imbalance</h2>
      <p class="mb-6">Constant scrolling and blue light exposure increase 'Vata' (air/space element) in the nervous system, leading to anxiety and poor sleep. A simple 10-minute digital detox before bed can transform your energy levels.</p>
    `
  },
  {
    id: '3',
    slug: 'habits-destroying-digestion',
    title: '7 Daily Habits Destroying Your Digestion',
    excerpt: 'From eating while working to late-night snacking, these common habits are the silent killers of your gut health.',
    date: 'March 20, 2026',
    author: 'Dr. Anjali Sharma',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/habits/800/600',
    content: `
      <h2 class="text-2xl font-bold mb-4">The Silent Killers</h2>
      <p class="mb-6">We often look for a 'superfood' to fix our gut, but we ignore the habits that are causing the damage in the first place.</p>
      
      <h2 class="text-2xl font-bold mb-4">1. Eating While Distracted</h2>
      <p class="mb-6">When you eat while watching Netflix or answering emails, your brain doesn't signal your stomach to produce the necessary enzymes. Result? Poor absorption and bloating.</p>
      
      <h2 class="text-2xl font-bold mb-4">2. Iced Drinks</h2>
      <p class="mb-6">Ice-cold beverages shock the digestive system. Your body has to work overtime just to bring the liquid to body temperature before it can even start digesting.</p>
      
      <h2 class="text-2xl font-bold mb-4">3. Skipping Breakfast (For Some)</h2>
      <p class="mb-6">While intermittent fasting is popular, it's not for everyone. For 'Vata' types, skipping breakfast can lead to extreme energy crashes and irritability.</p>
    `
  }
];

export function BlogList() {
  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Insights & Wisdom</h2>
          <p className="text-stone-600 text-lg">Practical Ayurveda tips for the modern urban professional.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group block bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-stone-400 mb-4 uppercase tracking-widest font-bold">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#2D4F1E] transition-colors">{post.title}</h3>
                <p className="text-stone-600 mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-[#2D4F1E] font-bold">
                  Read More <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <div className="py-32 text-center">Post not found</div>;

  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-stone-400 hover:text-[#2D4F1E] mb-8 font-bold transition-colors"
        >
          <ArrowLeft size={20} /> Back to Insights
        </button>
        
        <div className="mb-12">
          <div className="flex items-center gap-6 text-sm text-stone-400 mb-6 uppercase tracking-widest font-bold">
            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
            <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-8 leading-tight">{post.title}</h1>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full aspect-video object-cover rounded-3xl shadow-lg mb-12"
            referrerPolicy="no-referrer"
          />
          <div 
            className="prose prose-stone prose-lg max-w-none text-stone-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        
        <div className="p-8 bg-[#F9F7F2] rounded-3xl border border-stone-100 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to fix your digestion?</h3>
          <p className="text-stone-600 mb-8">Get your personalized 7-day reset plan based on your unique body type.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold hover:bg-[#1E3614] transition-all">
            Start Your Assessment <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
