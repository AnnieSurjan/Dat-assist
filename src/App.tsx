import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Layout, 
  Smartphone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Code2, 
  Database, 
  Cpu
} from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('hu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'hu' ? 'en' : 'hu');

  const IconMap: Record<string, any> = {
    Globe,
    Layout,
    Smartphone
  };

  const logoUrl = "/logo.svg";

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-blue/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl bg-white/5 border border-white/10">
              <img
                src={logoUrl}
                alt="Dat-assist Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              Dat-assist <span className="text-brand-blue">{lang === 'hu' ? 'Kft.' : 'LLC'}</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-brand-blue transition-colors">{t.nav.services}</a>
            <a href="#about" className="text-sm font-medium hover:text-brand-blue transition-colors">{t.nav.about}</a>
            <a href="#contact" className="text-sm font-medium hover:text-brand-blue transition-colors">{t.nav.contact}</a>
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold hover:bg-white/10 transition-all"
            >
              {lang.toUpperCase()}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">{t.nav.services}</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">{t.nav.about}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">{t.nav.contact}</a>
              <button 
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="mt-4 px-6 py-2 rounded-full border border-white/20 text-lg font-bold"
              >
                {lang === 'hu' ? 'English' : 'Magyar'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              <Cpu className="w-3 h-3" />
              <span>Next-Gen Software Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              {t.hero.title.split(' ').map((word, i) => (
                <span key={i} className={i > 2 ? 'text-gradient' : ''}>{word} </span>
              ))}
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-brand-blue/25"
              >
                {t.hero.cta}
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all"
              >
                {t.nav.services}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-dark">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/tech-dev/1200/800" 
                  alt="Software Development" 
                  className="w-full aspect-[4/3] object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                
                {/* Floating Element Mockup */}
                <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center">
                      <Code2 className="text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Dat-assist Engine</div>
                      <div className="text-xs text-slate-400">Status: Optimized</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-brand-blue"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => {
              const Icon = IconMap[service.icon];
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-3xl group transition-all hover:bg-white/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all text-brand-blue">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/office1/400/500" className="rounded-2xl w-full object-cover aspect-[3/4]" alt="Office" referrerPolicy="no-referrer" />
                <div className="bg-brand-blue p-6 rounded-2xl text-white">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-80">Dedication</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-brand-blue">24/7</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60">Support</div>
                </div>
                <img src="https://picsum.photos/seed/office2/400/500" className="rounded-2xl w-full object-cover aspect-[3/4]" alt="Office" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.about.title}</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              {t.about.text}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {t.about.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-slate-200 glass p-4 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/20">
              <p className="text-brand-blue font-bold italic">{t.about.marketing.todo}</p>
              <p className="text-brand-blue font-bold italic">{t.about.marketing.focus}</p>
              <div className="pt-4 border-t border-brand-blue/20">
                <p className="text-white font-black tracking-wider text-center uppercase">
                  {t.about.marketing.deliverables}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-slate-400">Ready to start your project? Let's talk.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.contact.name}</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.contact.email}</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.contact.message}</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-blue/25">
              {t.contact.send}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded bg-white/5">
              <img
                src={logoUrl}
                alt="Dat-assist Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-white">Dat-assist</span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dat-assist {lang === 'hu' ? 'Kft.' : 'LLC'}. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors font-bold">IN</a>
            <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors font-bold">GH</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
