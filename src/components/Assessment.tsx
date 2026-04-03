import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Loader2, 
  Smartphone, 
  ShieldCheck, 
  MessageCircle 
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AssessmentProps {
  onComplete: (plan: 'basic' | 'guided') => void;
  onClose: () => void;
}

export default function Assessment({ onComplete, onClose }: AssessmentProps) {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloating: '',
    energy: '',
    acidity: '',
    digestion: '',
    wakeup: '',
    sleep: '',
    skipMeals: '',
    screenTime: '',
    cravings: '',
    foodPreference: '',
    goal: ''
  });

  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else analyzeResults();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const analyzeResults = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsReady(true);
    }, 3000);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">Tell us about yourself</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#2D4F1E] outline-none"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Age</label>
                  <input 
                    type="number" 
                    value={formData.age}
                    onChange={(e) => updateField('age', e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#2D4F1E] outline-none"
                    placeholder="e.g. 28"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Gender</label>
                  <select 
                    value={formData.gender}
                    onChange={(e) => updateField('gender', e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#2D4F1E] outline-none appearance-none bg-white"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">Your Symptoms</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Bloating Frequency</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Never', 'Sometimes', 'Often'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => updateField('bloating', opt)}
                      className={cn(
                        "p-3 rounded-xl border text-sm font-medium transition-all",
                        formData.bloating === opt ? "bg-[#2D4F1E] text-white border-[#2D4F1E]" : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Energy Levels</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Low', 'Fluctuating', 'Stable'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => updateField('energy', opt)}
                      className={cn(
                        "p-3 rounded-xl border text-sm font-medium transition-all",
                        formData.energy === opt ? "bg-[#2D4F1E] text-white border-[#2D4F1E]" : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Acidity Issues?</label>
                  <div className="flex gap-2">
                    {['Yes', 'No'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => updateField('acidity', opt)}
                        className={cn(
                          "flex-1 p-3 rounded-xl border text-sm font-medium transition-all",
                          formData.acidity === opt ? "bg-[#2D4F1E] text-white border-[#2D4F1E]" : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Digestion</label>
                  <select 
                    value={formData.digestion}
                    onChange={(e) => updateField('digestion', e.target.value)}
                    className="w-full p-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#2D4F1E] outline-none appearance-none bg-white"
                  >
                    <option value="">Select</option>
                    <option value="poor">Poor</option>
                    <option value="average">Average</option>
                    <option value="good">Good</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">Lifestyle Habits</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Wake-up Time</label>
                  <input 
                    type="time" 
                    value={formData.wakeup}
                    onChange={(e) => updateField('wakeup', e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#2D4F1E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Sleep Time</label>
                  <input 
                    type="time" 
                    value={formData.sleep}
                    onChange={(e) => updateField('sleep', e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#2D4F1E] outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Do you skip meals?</label>
                <div className="flex gap-2">
                  {['Yes', 'No'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => updateField('skipMeals', opt)}
                      className={cn(
                        "flex-1 p-3 rounded-xl border text-sm font-medium transition-all",
                        formData.skipMeals === opt ? "bg-[#2D4F1E] text-white border-[#2D4F1E]" : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Daily Screen Time</label>
                <select 
                  value={formData.screenTime}
                  onChange={(e) => updateField('screenTime', e.target.value)}
                  className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#2D4F1E] outline-none appearance-none bg-white"
                >
                  <option value="">Select</option>
                  <option value="low">Less than 4 hours</option>
                  <option value="medium">4-8 hours</option>
                  <option value="high">More than 8 hours</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">Food Behavior</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">What do you crave most?</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Sweet', 'Spicy', 'Salty'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => updateField('cravings', opt)}
                      className={cn(
                        "p-3 rounded-xl border text-sm font-medium transition-all",
                        formData.cravings === opt ? "bg-[#2D4F1E] text-white border-[#2D4F1E]" : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Food Temperature Preference</label>
                <div className="flex gap-2">
                  {['Hot', 'Cold'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => updateField('foodPreference', opt)}
                      className={cn(
                        "flex-1 p-3 rounded-xl border text-sm font-medium transition-all",
                        formData.foodPreference === opt ? "bg-[#2D4F1E] text-white border-[#2D4F1E]" : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">Your Primary Goal</h3>
            <div className="space-y-3">
              {['Bloating', 'Energy', 'Weight', 'Skin'].map(opt => (
                <button
                  key={opt}
                  onClick={() => updateField('goal', opt)}
                  className={cn(
                    "w-full p-4 rounded-xl border text-left font-bold transition-all flex justify-between items-center",
                    formData.goal === opt ? "bg-[#2D4F1E] text-white border-[#2D4F1E]" : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                  )}
                >
                  {opt}
                  {formData.goal === opt && <CheckCircle2 size={20} />}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isAnalyzing) {
    return (
      <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-8"
        >
          <Loader2 size={64} className="text-[#2D4F1E]" />
        </motion.div>
        <h2 className="text-3xl font-bold text-stone-900 mb-4">Analyzing your responses...</h2>
        <p className="text-stone-600 max-w-md">Our AI is mapping your symptoms to Ayurvedic principles to create your personalized reset plan.</p>
      </div>
    );
  }

  if (isReady) {
    return (
      <div className="fixed inset-0 bg-[#F9F7F2] z-[100] flex flex-col items-center justify-center p-6 overflow-y-auto">
        <div className="max-w-2xl w-full bg-white p-8 rounded-3xl shadow-2xl border border-stone-100 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-700 mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Your personalized plan is ready!</h2>
          <p className="text-stone-600 mb-8">Based on your responses, we've identified a <b>Pitta-Vata imbalance</b>. Your 7-day reset will focus on cooling your system and stabilizing your energy.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="p-6 rounded-2xl border-2 border-stone-100 bg-stone-50 text-left">
              <h3 className="font-bold text-lg mb-2">Self-Guided</h3>
              <p className="text-sm text-stone-500 mb-4">Digital plan + Diagnosis</p>
              <p className="text-2xl font-black mb-4">₹499</p>
              <button 
                onClick={() => onComplete('basic')}
                className="w-full py-3 bg-stone-200 text-stone-800 rounded-xl font-bold hover:bg-stone-300 transition-all"
              >
                Get My Plan
              </button>
            </div>
            <div className="p-6 rounded-2xl border-2 border-[#2D4F1E] bg-white text-left relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2D4F1E] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">Recommended</div>
              <h3 className="font-bold text-lg mb-2">Guided</h3>
              <p className="text-sm text-stone-500 mb-4">Plan + WhatsApp + 1:1 Call</p>
              <p className="text-2xl font-black mb-4">₹999</p>
              <button 
                onClick={() => onComplete('guided')}
                className="w-full py-3 bg-[#2D4F1E] text-white rounded-xl font-bold hover:bg-[#1E3614] transition-all"
              >
                Get Guided Plan
              </button>
            </div>
          </div>
          
          <button onClick={onClose} className="text-stone-400 text-sm hover:text-stone-600">Close and return home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-stone-100 flex justify-between items-center">
        <div className="text-xl font-black text-[#2D4F1E]">AYUR<span className="text-[#D4A373]">RESET</span></div>
        <button onClick={onClose} className="text-stone-400 hover:text-stone-600">
          <Loader2 className="rotate-45" size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-stone-100 w-full">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(step / totalSteps) * 100}%` }}
          className="h-full bg-[#2D4F1E]"
        />
      </div>

      {/* Content */}
      <div className="flex-grow overflow-y-auto p-6 md:p-12 flex items-center justify-center">
        <div className="max-w-md w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-stone-100 flex gap-4">
        {step > 1 && (
          <button 
            onClick={prevStep}
            className="p-4 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        <button 
          onClick={nextStep}
          disabled={
            (step === 1 && (!formData.name || !formData.age || !formData.gender)) ||
            (step === 2 && (!formData.bloating || !formData.energy || !formData.acidity || !formData.digestion)) ||
            (step === 3 && (!formData.wakeup || !formData.sleep || !formData.skipMeals || !formData.screenTime)) ||
            (step === 4 && (!formData.cravings || !formData.foodPreference)) ||
            (step === 5 && !formData.goal)
          }
          className="flex-grow py-4 bg-[#2D4F1E] text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {step === totalSteps ? 'See My Results' : 'Next Step'} <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
