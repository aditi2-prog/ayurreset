import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Wind, 
  Coffee, 
  Brain, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  Clock,
  Menu,
  X,
  ChevronDown,
  UserCheck,
  Smartphone,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Assessment from './Assessment';
import { BlogList } from './Blog';

// --- Components ---

const Button = ({ children, className = "", variant = "primary", ...props }: any) => {
  const variants = {
    primary: "bg-[#2D4F1E] text-white hover:bg-[#1E3614] shadow-lg shadow-green-900/20",
    secondary: "bg-white text-[#2D4F1E] border-2 border-[#2D4F1E] hover:bg-stone-50",
    accent: "bg-[#D4A373] text-white hover:bg-[#BC8A5F] shadow-lg shadow-orange-900/20"
  };
  
  return (
    <button 
      className={`px-8 py-4 rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionTitle = ({ children, subtitle, light = false, id }: any) => (
  <div className="text-center mb-12" id={id}>
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${light ? 'text-white' : 'text-[#1A1A1A]'}`}>
      {children}
    </h2>
    {subtitle && <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-stone-300' : 'text-stone-600'}`}>{subtitle}</p>}
  </div>
);

// --- Sections ---

const Hero = ({ onStartAssessment }: { onStartAssessment: () => void }) => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#F9F7F2]">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-[#E9E5D9] px-3 py-1 rounded-full text-[#2D4F1E] text-sm font-semibold mb-6">
          <Sparkles size={16} />
          <span>Personalized for 12,400+ Urban Professionals</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] mb-6">
          Fix Your Bloating & <span className="text-[#2D4F1E]">Double Your Energy</span> in 7 Days.
        </h1>
        <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-xl">
          No generic advice. No spiritual jargon. Just a practical, 7-day Ayurveda reset tailored to your body type and modern lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="w-full sm:w-auto" onClick={onStartAssessment}>
            Get Your Personalized Plan <ArrowRight size={20} />
          </Button>
          <div className="flex items-center gap-3 px-2">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-8 h-8 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
              ))}
            </div>
            <span className="text-sm font-medium text-stone-500">4.9/5 from 2k+ reviews</span>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="bg-white p-6 rounded-3xl shadow-2xl border border-stone-100 relative z-10">
          <div className="flex items-center gap-4 mb-6 p-4 bg-stone-50 rounded-2xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
              <UserCheck size={24} />
            </div>
            <div>
              <p className="text-sm text-stone-500">Your Diagnosis</p>
              <p className="font-bold text-[#1A1A1A]">Pitta-Vata Imbalance Detected</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-[#2D4F1E]"
              />
            </div>
            <p className="text-sm text-stone-600 italic">"Based on your late-night work stress and acidity, we've adjusted your morning routine to include cooling herbs..."</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                <p className="text-[10px] uppercase tracking-wider font-bold text-orange-700">Avoid</p>
                <p className="text-sm font-bold">Black Coffee</p>
              </div>
              <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                <p className="text-[10px] uppercase tracking-wider font-bold text-green-700">Include</p>
                <p className="text-sm font-bold">Fennel Water</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4A373]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2D4F1E]/10 rounded-full blur-3xl" />
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => {
  const problems = [
    { icon: <Wind className="text-blue-500" />, title: "Constant Bloating", desc: "Feeling heavy and uncomfortable after every meal, no matter what you eat." },
    { icon: <Zap className="text-yellow-500" />, title: "3 PM Energy Crash", desc: "Relying on caffeine just to get through your afternoon meetings." },
    { icon: <Coffee className="text-stone-500" />, title: "Acid Reflux", desc: "That burning sensation that keeps you up at night after a late dinner." },
    { icon: <Brain className="text-purple-500" />, title: "Brain Fog", desc: "Struggling to focus because your gut is constantly out of sync." }
  ];

  return (
    <section className="py-24 px-6 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Modern life is fast, but your digestion shouldn't be a casualty.">
          Why your "Healthy" diet isn't working
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-stone-50 border border-stone-100"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-stone-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionSection = ({ onStartAssessment }: { onStartAssessment: () => void }) => {
  const steps = [
    { number: "01", title: "Quick Assessment", desc: "Answer 12 targeted questions about your sleep, energy, and digestion." },
    { number: "02", title: "Get Your Diagnosis", desc: "Our algorithm identifies your specific Ayurvedic imbalance (Dosha)." },
    { number: "03", title: "Follow Your 7-Day Plan", desc: "Get a step-by-step guide with food, routines, and simple lifestyle fixes." }
  ];

  return (
    <section className="py-24 px-6 bg-[#2D4F1E] text-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle light subtitle="We've stripped away the complexity to give you a practical roadmap.">
          How the 7-Day Reset Works
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <span className="text-6xl font-black text-white/10 absolute -top-8 -left-4">{s.number}</span>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{s.title}</h3>
              <p className="text-stone-300 leading-relaxed relative z-10">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button variant="accent" className="mx-auto" onClick={onStartAssessment}>
            Start Your Assessment Now
          </Button>
        </div>
      </div>
    </section>
  );
};

const PersonalizationProof = () => (
  <section className="py-24 px-6 bg-[#F9F7F2]">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <SectionTitle subtitle="Generic advice like 'drink more water' doesn't work because every body is different.">
          Ayurveda, but for the 21st Century
        </SectionTitle>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Tailored Routines</h4>
              <p className="text-stone-600">If you're a night owl with high acidity, your morning routine will look different from an early riser with low energy.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Smart Food Swaps</h4>
              <p className="text-stone-600">No restrictive diets. We suggest simple swaps based on what's already in your kitchen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Lifestyle Fixes</h4>
              <p className="text-stone-600">Practical tips for desk-bound professionals to keep their digestion moving.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Smartphone className="text-[#2D4F1E]" /> Your Daily Dashboard
        </h4>
        <div className="space-y-4">
          <div className="p-4 bg-stone-50 rounded-2xl border-l-4 border-[#2D4F1E]">
            <p className="text-xs font-bold text-stone-400 uppercase mb-1">Morning (7:00 AM)</p>
            <p className="font-bold">Warm Lemon Water + 5 Min Breathwork</p>
            <p className="text-sm text-stone-500">To clear the Pitta heat from your system.</p>
          </div>
          <div className="p-4 bg-stone-50 rounded-2xl border-l-4 border-[#D4A373]">
            <p className="text-xs font-bold text-stone-400 uppercase mb-1">Lunch (1:00 PM)</p>
            <p className="font-bold">Heaviest Meal: Moong Dal + Steamed Veggies</p>
            <p className="text-sm text-stone-500">Avoid raw salads today; your gut needs warmth.</p>
          </div>
          <div className="p-4 bg-stone-50 rounded-2xl border-l-4 border-[#2D4F1E]">
            <p className="text-xs font-bold text-stone-400 uppercase mb-1">Evening (9:00 PM)</p>
            <p className="font-bold">Digital Detox + Chamomile Tea</p>
            <p className="text-sm text-stone-500">To calm the Vata (nervous system) before sleep.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = ({ onPay }: { onPay: (amount: number) => void }) => {
  return (
    <section className="py-24 px-6 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Choose the level of support you need to succeed.">
          Simple, Transparent Pricing
        </SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan 1 */}
          <div className="p-8 rounded-3xl border-2 border-stone-100 bg-stone-50 flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Self-Guided Reset</h3>
              <p className="text-stone-500">Perfect for the DIY-er who wants a clear roadmap.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-black">₹499</span>
              <span className="text-stone-400 ml-2">one-time</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-stone-700">
                <CheckCircle2 size={18} className="text-green-600" /> Personalized Diagnosis
              </li>
              <li className="flex items-center gap-3 text-stone-700">
                <CheckCircle2 size={18} className="text-green-600" /> 7-Day Structured Plan
              </li>
              <li className="flex items-center gap-3 text-stone-700">
                <CheckCircle2 size={18} className="text-green-600" /> Daily Food Guidelines
              </li>
              <li className="flex items-center gap-3 text-stone-300 line-through">
                WhatsApp Support
              </li>
              <li className="flex items-center gap-3 text-stone-300 line-through">
                1:1 Consultation
              </li>
            </ul>
            <Button variant="secondary" className="w-full" onClick={() => onPay(499)}>Get Started</Button>
          </div>

          {/* Plan 2 */}
          <div className="p-8 rounded-3xl border-2 border-[#2D4F1E] bg-white shadow-2xl relative flex flex-col transform md:scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2D4F1E] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Guided Transformation</h3>
              <p className="text-stone-500">For those who want accountability and expert advice.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-black">₹999</span>
              <span className="text-stone-400 ml-2">one-time</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-stone-700">
                <CheckCircle2 size={18} className="text-green-600" /> <b>Deep</b> Personalized Diagnosis
              </li>
              <li className="flex items-center gap-3 text-stone-700">
                <CheckCircle2 size={18} className="text-green-600" /> 7-Day Structured Plan
              </li>
              <li className="flex items-center gap-3 text-stone-700">
                <CheckCircle2 size={18} className="text-green-600" /> Daily Food Guidelines
              </li>
              <li className="flex items-center gap-3 text-stone-700">
                <CheckCircle2 size={18} className="text-green-600" /> <b>WhatsApp Support (7 Days)</b>
              </li>
              <li className="flex items-center gap-3 text-stone-700">
                <CheckCircle2 size={18} className="text-green-600" /> <b>15-Min 1:1 Consultation</b>
              </li>
            </ul>
            <Button className="w-full" onClick={() => onPay(999)}>Choose Guided Reset</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    { name: "Ananya R.", role: "Product Manager", text: "I used to feel like a balloon by 4 PM. After 3 days of the reset, the bloating was 80% gone. The best part? It was so easy to follow.", image: "https://picsum.photos/seed/ananya/100/100" },
    { name: "Vikram S.", role: "Software Engineer", text: "I was skeptical about Ayurveda, but the personalized insights were spot on. My energy levels are finally stable without 4 cups of coffee.", image: "https://picsum.photos/seed/vikram/100/100" },
    { name: "Priya M.", role: "Marketing Lead", text: "The WhatsApp support was a lifesaver. Whenever I was confused about a meal, I got an instant answer. Truly personalized.", image: "https://picsum.photos/seed/priya/100/100" }
  ];

  return (
    <section className="py-24 px-6 bg-[#F9F7F2]" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Real results from people just like you.">
          What our community says
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-600 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-stone-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AuthoritySection = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8 inline-block">
        <img 
          src="https://picsum.photos/seed/founder/200/200" 
          className="w-32 h-32 rounded-full mx-auto border-4 border-[#F9F7F2] shadow-lg" 
          referrerPolicy="no-referrer"
        />
      </div>
      <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
      <p className="text-xl text-stone-600 mb-8 leading-relaxed">
        "I spent a decade in high-stress marketing roles, battling chronic bloating and fatigue. I found the answer in Ayurveda, but it was too complicated for a modern life. I created AyurReset to bring this ancient wisdom into a practical, result-oriented format for people like us."
      </p>
      <div className="flex justify-center gap-8 grayscale opacity-50">
        <span className="font-bold text-stone-400">Featured in:</span>
        <span className="font-bold">VOGUE</span>
        <span className="font-bold">GQ</span>
        <span className="font-bold">MINT</span>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "Will this work for me?", a: "Yes. Because it's personalized. We don't give you a generic diet; we identify your specific imbalance and give you the tools to fix it." },
    { q: "Is this too complicated?", a: "Not at all. We focus on 'Micro-habits'. Most changes take less than 5 minutes of your day." },
    { q: "Do I need to change everything I eat?", a: "No. We focus on 'Swaps' and 'Timing' rather than total elimination. You can still eat your favorite foods, just in a way that your gut can handle." },
    { q: "When will I see results?", a: "Most users report a significant reduction in bloating and an increase in energy levels within the first 3 to 4 days." },
    { q: "What if I don't feel improvement?", a: "If you don't feel a noticeable improvement after 7 days, we'll extend your support for another week for free." }
  ];

  return (
    <section className="py-24 px-6 bg-stone-50" id="faq">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>Common Questions</SectionTitle>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-stone-200 overflow-hidden">
              <summary className="p-6 font-bold text-lg flex justify-between items-center cursor-pointer list-none">
                {f.q}
                <ChevronDown className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
        <div className="mt-12 p-6 bg-green-50 rounded-2xl border border-green-100 text-center">
          <p className="font-bold text-green-800 mb-2">Risk-Free Guarantee</p>
          <p className="text-green-700 text-sm">If you don't feel a noticeable improvement in your energy or bloating after 7 days, we'll extend your support for another week for free.</p>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ onStartAssessment }: { onStartAssessment: () => void }) => (
  <section className="py-24 px-6 bg-[#2D4F1E] text-white text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to feel light and energized?</h2>
      <p className="text-xl text-stone-300 mb-10">Only 15 slots remaining for this week's guided transformation.</p>
      <Button variant="accent" className="mx-auto text-xl px-12 py-5" onClick={onStartAssessment}>
        Get Your Personalized Plan Now
      </Button>
      <div className="mt-8 flex items-center justify-center gap-6 text-stone-400 text-sm">
        <span className="flex items-center gap-2"><ShieldCheck size={16} /> Secure Payment</span>
        <span className="flex items-center gap-2"><MessageCircle size={16} /> WhatsApp Support</span>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
    </div>
  </section>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-[#2D4F1E] tracking-tighter">AYUR<span className="text-[#D4A373]">RESET</span></Link>
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-stone-600">
          <button onClick={() => scrollTo('how-it-works')} className="hover:text-[#2D4F1E]">How it Works</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-[#2D4F1E]">Pricing</button>
          <Link to="/blog" className="hover:text-[#2D4F1E]">Insights</Link>
          <button onClick={() => scrollTo('faq')} className="hover:text-[#2D4F1E]">FAQ</button>
          <Button className="px-6 py-2 text-sm" onClick={() => scrollTo('pricing')}>Join Now</Button>
        </div>
        <button className="md:hidden text-[#2D4F1E]">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

const StickyCTA = ({ onStartAssessment }: { onStartAssessment: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden"
        >
          <Button className="w-full shadow-2xl" onClick={onStartAssessment}>
            Join the 7-Day Reset — ₹499 <ArrowRight size={20} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 bg-stone-900 text-stone-500 text-sm">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-2">
        <div className="text-2xl font-black text-white tracking-tighter mb-4">AYUR<span className="text-[#D4A373]">RESET</span></div>
        <p className="max-w-xs">Bringing ancient Ayurvedic wisdom to the modern professional. Practical, personalized, and result-oriented.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Program</h4>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-white">7-Day Reset</Link></li>
          <li><Link to="/blog" className="hover:text-white">Insights & Blog</Link></li>
          <li><button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white">Pricing</button></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Support</h4>
        <ul className="space-y-2">
          <li><a href="https://razorpay.me/@draditichourasia" target="_blank" rel="noopener noreferrer" className="hover:text-white">Direct Payment Profile</a></li>
          <li><a href="#" className="hover:text-white">Contact Us</a></li>
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 text-center">
      <p>© 2026 AyurReset. All rights reserved. Designed for conversion.</p>
    </div>
  </footer>
);

const ThankYou = () => (
  <div className="min-h-screen flex items-center justify-center p-6 bg-[#F9F7F2]">
    <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-2xl border border-stone-100 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-700 mx-auto mb-8">
        <CheckCircle2 size={40} />
      </div>
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-stone-600 mb-8 text-lg">We've received your details. Your personalized plan will be shared on WhatsApp within the next 2 hours.</p>
      <Link to="/" className="inline-block px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold hover:bg-[#1E3614] transition-all">
        Return to Home
      </Link>
    </div>
  </div>
);

// --- Main Home Component ---

export default function Home() {
  const [showAssessment, setShowAssessment] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async (amount: number) => {
    try {
      // 1. Get Razorpay Key ID
      const keyResponse = await fetch('/api/razorpay-key');
      const { keyId } = await keyResponse.json();

      // 2. Create order on backend
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, receipt: `receipt_${Date.now()}` }),
      });
      
      const order = await response.json();

      if (!order.id) {
        throw new Error('Failed to create order');
      }

      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: "AyurReset",
        description: "7-Day Personalized Reset Plan",
        order_id: order.id,
        image: "https://picsum.photos/seed/ayurreset/200/200",
        handler: function (response: any) {
          setShowThankYou(true);
          setShowAssessment(false);
          console.log('Payment Success:', response);
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
          contact: "9518773413"
        },
        theme: {
          color: "#2D4F1E"
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Something went wrong with the payment. Please try again.');
    }
  };

  if (showThankYou) return <ThankYou />;

  return (
    <div className="min-h-screen font-sans text-[#1A1A1A] selection:bg-[#D4A373] selection:text-white">
      <Navbar />
      <main>
        <Hero onStartAssessment={() => setShowAssessment(true)} />
        <ProblemSection />
        <SolutionSection onStartAssessment={() => setShowAssessment(true)} />
        <PersonalizationProof />
        <BlogList />
        <PricingSection onPay={handlePayment} />
        <SocialProof />
        <AuthoritySection />
        <FAQ />
        <FinalCTA onStartAssessment={() => setShowAssessment(true)} />
      </main>
      <Footer />
      <StickyCTA onStartAssessment={() => setShowAssessment(true)} />
      
      {/* Assessment Modal */}
      <AnimatePresence>
        {showAssessment && (
          <Assessment 
            onComplete={(plan) => handlePayment(plan === 'basic' ? 499 : 999)}
            onClose={() => setShowAssessment(false)}
          />
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919518773413" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-40"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
}
