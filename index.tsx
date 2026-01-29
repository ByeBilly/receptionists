
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Phone,
  CheckCircle2,
  Clock,
  Users,
  Calendar,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  Star,
  Zap,
  TrendingUp,
  MapPin,
  Briefcase,
  DollarSign,
  Globe,
  Mail,
  Headset,
  Target,
  Rocket,
  Send,
  AlertTriangle,
  TrendingDown,
  Activity,
  BarChart3,
  FileText,
  Calculator,
  Home,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children?: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-3xl shadow-3xl overflow-hidden flex flex-col border-8 border-slate-900"
          >
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-950">{title}</h2>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-950">
                <X size={32} />
              </button>
            </div>
            <div className="p-8 sm:p-12 overflow-y-auto text-slate-600 font-medium leading-relaxed space-y-8 prose prose-slate max-w-none">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PrivacyContent = () => (
  <>
    <p className="font-bold text-slate-950 uppercase tracking-widest text-xs">Last updated: 20 January 2026</p>
    <section>
      <h3 className="text-xl font-black text-slate-950 uppercase italic mb-4">1. Who we are</h3>
      <p>Receptionists.net.au ("we", "us", "our") is an Australian service that provides virtual receptionist and call-handling services to businesses.</p>
      <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-1 text-sm">
        <p><strong>Legal Entity:</strong> Mr Chris Halloran trading as Receptionists Australia & NZ</p>
        <p><strong>ABN:</strong> 15968402186</p>
        <p><strong>Email:</strong> info@receptionists.net.au</p>
        <p><strong>Address:</strong> 112/138 Hansford rd. Coombabah. 4216</p>
      </div>
    </section>
    <section>
      <h3 className="text-xl font-black text-slate-950 uppercase italic mb-4">2. Personal information we collect</h3>
      <p>We collect personal information that is reasonably necessary to operate our services, including contact data, service usage data, website data, and payment data.</p>
    </section>
    <section>
      <h3 className="text-xl font-black text-slate-950 uppercase italic mb-4">5. Disclosure</h3>
      <p>We do not sell personal information to third parties. Disclosure is limited to essential service providers and legal authorities where required.</p>
    </section>
  </>
);

const TermsContent = () => (
  <>
    <p className="font-bold text-slate-950 uppercase tracking-widest text-xs">Last updated: 20 January 2026</p>
    <section>
      <h3 className="text-xl font-black text-slate-950 uppercase italic mb-4">1. Agreement to Terms</h3>
      <p>By accessing receptionists.net.au, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
    </section>
    <section>
      <h3 className="text-xl font-black text-slate-950 uppercase italic mb-4">2. Service Description</h3>
      <p>We provide virtual receptionist services including call answering, message taking, appointment scheduling, and customer inquiry handling for Australian and New Zealand businesses.</p>
    </section>
    <section>
      <h3 className="text-xl font-black text-slate-950 uppercase italic mb-4">3. Pricing & Payment</h3>
      <p>Launch Special pricing of $115/month is available for early adopters. All fees are in AUD and billed monthly in advance.</p>
    </section>
  </>
);

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', business: '' });

  // Leak Calculator State
  const [missedCalls, setMissedCalls] = useState(5);
  const [avgJobValue, setAvgJobValue] = useState(500);
  const monthlyLoss = Math.round(missedCalls * avgJobValue * 4.33);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours to discuss your Launch Special pricing.');
    setFormData({ name: '', email: '', phone: '', business: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-md z-50 border-b-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Phone className="text-orange-600" size={32} strokeWidth={3} />
              <span className="text-white font-black text-2xl uppercase italic tracking-tighter">
                Receptionists<span className="text-orange-600">.net.au</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#leak-math" className="text-white hover:text-orange-600 font-bold transition-colors">Leak Math</a>
              <a href="#how" className="text-white hover:text-orange-600 font-bold transition-colors">How It Works</a>
              <a href="#pricing" className="text-white hover:text-orange-600 font-bold transition-colors">Plans</a>
              <a href="tel:0468055668" className="text-white hover:text-orange-600 font-bold transition-colors">Call 0468 055 668</a>
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-black uppercase text-sm transition-all transform hover:scale-105">
                Start Now $115
              </a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              <a href="#leak-math" className="block text-white hover:text-orange-600 font-bold">Leak Math</a>
              <a href="#how" className="block text-white hover:text-orange-600 font-bold">How It Works</a>
              <a href="#pricing" className="block text-white hover:text-orange-600 font-bold">Plans</a>
              <a href="tel:0468055668" className="block text-white hover:text-orange-600 font-bold">📞 Call Now</a>
              <a href="#contact" className="block bg-orange-600 text-white px-6 py-3 rounded-full font-black uppercase text-sm text-center">
                Start Now $115
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-6 px-6 py-3 bg-orange-600/20 border-4 border-orange-600 rounded-full">
              <p className="text-orange-400 font-black uppercase text-sm tracking-widest flex items-center gap-2">
                <Zap size={20} />
                Launch Special: $115 Founding Rate
              </p>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase italic text-white mb-6 leading-tight tracking-tighter">
              Never Miss<br />
              <span className="text-orange-600">A Call.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-bold mb-8 max-w-3xl mx-auto">
              Reliable 24/7 protection for your business. Includes your own <span className="text-orange-600 italic">Online Agent</span> and 300 minutes of local call handling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-black uppercase text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2">
                Secure My Spot $115 <ArrowRight />
              </a>
              <div className="text-green-400 font-bold flex items-center gap-2">
                <CheckCircle2 size={24} />
                <span>Launch Special Pricing Available Now</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Leak Calculator */}
      <section id="leak-math" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full mb-6">
              <Calculator size={28} strokeWidth={3} />
              <h2 className="text-3xl sm:text-4xl font-black uppercase italic">Leak Calculator</h2>
            </div>
          </div>

          <div className="bg-slate-950 rounded-3xl border-8 border-slate-900 p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Sliders */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-slate-400 font-bold uppercase text-sm tracking-wider">Missed Calls / Month</label>
                    <span className="text-white font-black text-4xl">{missedCalls}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #f97316 0%, #f97316 ${(missedCalls / 50) * 100}%, #1e293b ${(missedCalls / 50) * 100}%, #1e293b 100%)`
                    }}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-slate-400 font-bold uppercase text-sm tracking-wider">Avg Job Value ($)</label>
                    <span className="text-white font-black text-4xl">${avgJobValue}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #f97316 0%, #f97316 ${((avgJobValue - 50) / 1950) * 100}%, #1e293b ${((avgJobValue - 50) / 1950) * 100}%, #1e293b 100%)`
                    }}
                  />
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border-2 border-slate-800">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                      Most Aussie businesses miss at least 15% of calls during busy periods. Even 5 missed leads a month could be costing you a fortune.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Result */}
              <div className="flex flex-col justify-center">
                <div className="bg-red-600 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 opacity-50"></div>
                  <div className="relative z-10">
                    <p className="text-red-100 font-black uppercase text-sm tracking-widest mb-4">Total Monthly Loss</p>
                    <motion.p
                      key={monthlyLoss}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-white font-black text-5xl sm:text-6xl mb-6 italic"
                    >
                      ${monthlyLoss.toLocaleString()}
                    </motion.p>
                    <a
                      href="#contact"
                      className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-black uppercase text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl"
                    >
                      Protect It For $115/mo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic text-slate-950 mb-4">
              How It <span className="text-orange-600">Works</span>
            </h2>
            <p className="text-xl text-slate-600 font-bold">Seamless integration. Instant results.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: 'Call Forwarding', desc: 'Forward your overflow or after-hours calls to us' },
              { icon: Sparkles, title: 'Online Agent', desc: 'AI-powered receptionist answers in your business name' },
              { icon: MessageSquare, title: 'Message Handling', desc: 'We take messages, book appointments, answer FAQs' },
              { icon: Zap, title: 'Instant Alerts', desc: 'Get urgent messages via SMS/email immediately' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="text-center"
              >
                <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-slate-900">
                  <step.icon size={36} strokeWidth={3} />
                </div>
                <h3 className="text-xl font-black uppercase italic text-slate-950 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Access Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic text-slate-950 mb-6">
              Founder <span className="text-orange-600">Access</span>
            </h2>
            <p className="text-slate-500 font-bold tracking-widest uppercase text-sm mb-6">(Pre-Launch Phase)</p>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              We’re opening early access to a limited group of businesses before public launch. This phase allows us to validate real usage while offering early adopters access to founder-level pricing.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-4 border-slate-200 p-8 sm:p-12 shadow-lg mb-10">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                'Speak directly with our AI receptionist',
                'Confirm suitability for your business',
                'Secure founder-level pricing while active',
                'No obligation to proceed beyond this step'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                  <p className="text-slate-700 font-bold">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-slate-400 flex-shrink-0 mt-0.5" size={18} />
                <div className="text-sm text-slate-500 font-medium space-y-1">
                  <p>Founder pricing remains active only while the subscription stays active.</p>
                  <p>Features and rollout occur progressively during launch.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:0468055668" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-black uppercase text-lg transition-all transform hover:scale-105 flex items-center gap-2">
                <Phone size={24} /> Call to Check Founder Access
              </a>
              <a href="#contact" className="text-slate-500 hover:text-orange-600 font-bold underline decoration-2 underline-offset-4 transition-colors">
                Prefer email? Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 gradient-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic text-white mb-4">
              Launch Special <span className="text-orange-600">Pricing</span>
            </h2>
            <p className="text-xl text-slate-300 font-bold">Lock in founding rate pricing now.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border-8 border-orange-600 p-12 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full mb-6">
                <p className="font-black uppercase text-sm tracking-widest">Launch Special</p>
              </div>
              <h3 className="text-6xl font-black italic text-slate-950 mb-4">
                $115<span className="text-3xl text-slate-600">/month</span>
              </h3>
              <p className="text-xl font-bold text-slate-600 mb-2">Includes Online Agent + 300 Minutes</p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                '24/7 call answering by your Online Agent',
                '300 minutes of local call handling included',
                'Calls answered in your business name',
                'Message taking & appointment booking',
                'Instant SMS/email alerts for urgent calls',
                'No lock-in contracts'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} strokeWidth={3} />
                  <p className="text-slate-700 font-bold text-lg">{feature}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center px-10 py-5 rounded-full font-black uppercase text-xl transition-all transform hover:scale-105">
              Get Started Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Command Center */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full mb-6">
              <p className="font-black uppercase text-sm tracking-widest">Launch Special</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic text-slate-950 mb-4">
              Command <span className="text-orange-600">Center.</span>
            </h2>
            <p className="text-xl text-slate-600 font-bold italic mb-2">Protecting your revenue 24/7. No missed calls. No lost jobs.</p>
          </div>

          <div className="bg-slate-950 rounded-3xl border-8 border-slate-900 p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-900 rounded-2xl p-8 border-2 border-slate-800">
                <p className="text-slate-400 font-bold uppercase text-sm tracking-wider mb-3">Handled Today</p>
                <p className="text-white font-black text-6xl italic">14</p>
              </div>
              <div className="bg-slate-900 rounded-2xl p-8 border-2 border-slate-800">
                <p className="text-slate-400 font-bold uppercase text-sm tracking-wider mb-3">Mins Used</p>
                <p className="text-orange-600 font-black text-6xl italic">82</p>
              </div>
            </div>

            {/* Mobile App Navigation Preview */}
            <div className="bg-slate-800 rounded-3xl p-6 max-w-md mx-auto">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: Home, label: 'Home', active: true },
                  { icon: Calculator, label: 'Leak Math', active: false },
                  { icon: Sparkles, label: 'AI Strategy', active: false },
                  { icon: Send, label: 'Apply', active: false }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`${item.active ? 'bg-orange-600' : 'bg-slate-700'} rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2`}>
                      <item.icon className="text-white" size={24} strokeWidth={3} />
                    </div>
                    <p className={`text-xs font-bold uppercase ${item.active ? 'text-orange-600' : 'text-slate-400'}`}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic text-slate-950 mb-4">
              Built for <span className="text-orange-600">Busy Businesses</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Tradies', icon: Target, desc: 'Plumbers, electricians, builders - never miss a job while on-site' },
              { title: 'Hospitality', icon: Briefcase, desc: 'Restaurants, cafes, venues - handle bookings while you serve' },
              { title: 'Medical', icon: Activity, desc: 'Clinics, physios, dentists - professional patient scheduling' }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 rounded-3xl border-8 border-slate-900"
              >
                <industry.icon className="text-orange-600 mb-4" size={48} strokeWidth={3} />
                <h3 className="text-2xl font-black uppercase italic text-slate-950 mb-3">{industry.title}</h3>
                <p className="text-slate-600 font-medium">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 gradient-bg">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic text-white mb-4">
              Stop the <span className="text-orange-600">Revenue Leak</span>
            </h2>
            <p className="text-xl text-slate-300 font-bold">Get your Online Agent for just $115/month.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-3xl border-8 border-slate-900">
            <div className="space-y-6">
              <div>
                <label className="block text-slate-950 font-black uppercase text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl border-4 border-slate-900 focus:border-orange-600 focus:outline-none font-bold text-lg"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-slate-950 font-black uppercase text-sm mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl border-4 border-slate-900 focus:border-orange-600 focus:outline-none font-bold text-lg"
                  placeholder="john@business.com.au"
                />
              </div>
              <div>
                <label className="block text-slate-950 font-black uppercase text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl border-4 border-slate-900 focus:border-orange-600 focus:outline-none font-bold text-lg"
                  placeholder="0400 000 000"
                />
              </div>
              <div>
                <label className="block text-slate-950 font-black uppercase text-sm mb-2">Business Name</label>
                <input
                  type="text"
                  required
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl border-4 border-slate-900 focus:border-orange-600 focus:outline-none font-bold text-lg"
                  placeholder="Smith Plumbing"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-black uppercase text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Secure My Spot $115 <Send />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="text-orange-600" size={32} strokeWidth={3} />
                <span className="font-black text-xl uppercase italic tracking-tighter">
                  Receptionists<span className="text-orange-600">.net.au</span>
                </span>
              </div>
              <p className="text-slate-400 font-medium">Never miss revenue again.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-sm mb-4 text-orange-600">Contact</h4>
              <div className="space-y-2 text-slate-400 font-medium">
                <p>info@receptionists.net.au</p>
                <a href="tel:0468055668" className="block hover:text-orange-600 transition-colors">0468 055 668</a>
                <p>ABN: 15968402186</p>
                <p>Coombabah, QLD 4216</p>
              </div>
            </div>
            <div>
              <h4 className="font-black uppercase text-sm mb-4 text-orange-600">Legal</h4>
              <div className="space-y-2">
                <button onClick={() => setPrivacyOpen(true)} className="block text-slate-400 hover:text-orange-600 font-bold transition-colors">
                  Privacy Policy
                </button>
                <button onClick={() => setTermsOpen(true)} className="block text-slate-400 hover:text-orange-600 font-bold transition-colors">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 font-medium">
            <p>&copy; 2026 Receptionists.net.au. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <PrivacyContent />
      </Modal>
      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        <TermsContent />
      </Modal>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);