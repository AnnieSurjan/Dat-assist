import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  LayoutDashboard, 
  Smartphone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Code2, 
  Database, 
  Cpu,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Check
} from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('hu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [heroImageIdx, setHeroImageIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteData, setQuoteData] = useState({
    platform: '',
    system: '',
    name: '',
    email: ''
  });
  const [expandedPortfolio, setExpandedPortfolio] = useState<number | null>(null);
  const heroImages = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', // Laptop
    'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=1200&q=80', // Monitor
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80', // Code
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', // Team/Dev
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80'  // Finance/Trading mobile
  ];

  const portfolioImages = [
    {
      src: '/dup-detect.png',
      title: 'Dup-Detect',
      desc: lang === 'hu' ? 'Automatizált duplikáció szűrés QuickBooks és Xero rendszerekhez.' : 'Automated deduplication for QuickBooks and Xero.'
    },
    {
      src: '/fraudradar.png',
      title: 'FraudRadar',
      desc: lang === 'hu' ? 'AI-alapú pénzügyi felügyeleti eszköz KKV-k számára.' : 'AI-powered financial surveillance tool for SMEs.'
    },
    {
      src: '/subradar.png',
      title: 'SubRadar',
      desc: lang === 'hu' ? 'Előfizetés-intelligencia és költségfigyelő rendszer.' : 'Subscription intelligence and cost monitoring system.'
    },
    {
      src: '/closecoach.png',
      title: 'CloseCoach',
      desc: lang === 'hu' ? 'Hónap végi zárási folyamatok automatizálása és ellenőrzése.' : 'Month-end closing process automation and verification.'
    },
    {
      src: '/zenith-crm.png',
      title: 'Zenith CRM',
      desc: lang === 'hu' ? 'Komplex ügyfélkezelő platform és üzleti dashboard.' : 'Complex customer management platform and business dashboard.'
    },
    {
      src: '/identifi.png',
      title: 'Identifi',
      desc: lang === 'hu' ? 'Törzsadatok tisztítása és duplikációk felderítése szállítói és vevői adatbázisokban.' : 'Master data cleanup and duplicate detection across vendor and customer records.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'hu' ? 'en' : 'hu');

  const IconMap: Record<string, any> = {
    Globe,
    LayoutDashboard,
    Smartphone,
    Cpu,
    Database,
    Code2
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
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              Dat-assist <span className="text-brand-blue">{lang === 'hu' ? 'Kft.' : 'LLC'}</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-brand-blue transition-colors">{t.nav.services}</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-brand-blue transition-colors">{lang === 'hu' ? 'Referenciák' : 'Portfolio'}</a>
            <a href="#about" className="text-sm font-medium hover:text-brand-blue transition-colors">{t.nav.about}</a>
            <a href="#contact" className="text-sm font-medium hover:text-brand-blue transition-colors">{t.nav.contact}</a>
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold hover:bg-white/10 transition-all text-white"
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
            <div className="flex flex-col gap-6 text-center text-white">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">{t.nav.services}</a>
              <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">{lang === 'hu' ? 'Referenciák' : 'Portfolio'}</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">{t.nav.about}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">{t.nav.contact}</a>
              <button 
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="mt-4 px-6 py-2 rounded-full border border-white/20 text-lg font-bold bg-white/5"
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

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              <Cpu className="w-3 h-3" />
              <span>Next-Gen Software Development</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance text-white">
              {t.hero.title.split(' ').map((word, i) => (
                <span key={i} className={i > 2 ? 'text-gradient' : ''}>{word} </span>
              ))}
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
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
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-dark aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={heroImageIdx}
                  src={heroImages[heroImageIdx]} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  alt="Software Development Gallery" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => {
              const Icon = IconMap[service.icon];
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-3xl group transition-all hover:bg-white/10 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all text-brand-blue">
                    {Icon ? <Icon className="w-8 h-8" /> : <div className="w-8 h-8 bg-white/10 rounded" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  {service.features && (
                    <div className="space-y-2 mt-auto pt-4 border-t border-white/5">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className="w-3 h-3 text-brand-blue" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise / Why Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.expertise.title}</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {t.expertise.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-all"
              >
                <h3 className="font-bold text-brand-blue mb-3 text-sm uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 border-y border-brand-blue/20 overflow-hidden bg-slate-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-10 pointer-events-none" />
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center px-6"
          >
            {['React', 'Node.js', 'Python', 'TypeScript', 'QuickBooks', 'Xero', 'AI/LLM', 'PostgreSQL', 'AWS', 'Docker', 'Next.js', 'Flutter'].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse shadow-[0_0_8px_rgba(0,163,255,0.8)]" />
                <span className="text-3xl font-black text-white/60 uppercase tracking-tighter group-hover:text-white group-hover:scale-110 transition-all cursor-default drop-shadow-sm">
                  {tech}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {['React', 'Node.js', 'Python', 'TypeScript', 'QuickBooks', 'Xero', 'AI/LLM', 'PostgreSQL', 'AWS', 'Docker', 'Next.js', 'Flutter'].map((tech, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-3 group">
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse shadow-[0_0_8px_rgba(0,163,255,0.8)]" />
                <span className="text-3xl font-black text-white/60 uppercase tracking-tighter group-hover:text-white group-hover:scale-110 transition-all cursor-default drop-shadow-sm">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.process.title}</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 -z-10" />
            
            {t.process.steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass p-6 rounded-2xl text-center relative bg-brand-dark"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-blue/20">
                  {idx + 1}
                </div>
                <h3 className="font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{lang === 'hu' ? 'Eddigi munkáink' : 'Our Previous Works'}</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 flex flex-col bg-brand-dark"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-white font-bold text-xl mb-2">{img.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-grow">{img.desc}</p>
                  
                  <button 
                    onClick={() => setExpandedPortfolio(expandedPortfolio === idx ? null : idx)}
                    className="text-brand-blue text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {lang === 'hu' ? 'Esettanulmány megtekintése' : 'View Case Study'}
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {expandedPortfolio === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-white/10"
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-1">
                              {lang === 'hu' ? 'Kihívás' : 'Challenge'}
                            </h4>
                            <p className="text-sm text-slate-400">
                              {lang === 'hu' 
                                ? 'Manuális adatrögzítés és lassú folyamatok hátráltatták a növekedést.' 
                                : 'Manual data entry and slow processes were hindering growth.'}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-1">
                              {lang === 'hu' ? 'Megoldás' : 'Solution'}
                            </h4>
                            <p className="text-sm text-slate-400">
                              {lang === 'hu' 
                                ? 'Egyedi automatizált rendszert építettünk, amely közvetlenül integrálódik a meglévő szoftverekkel.' 
                                : 'We built a custom automated system that integrates directly with existing software.'}
                            </p>
                          </div>
                          <div className="bg-brand-blue/10 p-3 rounded-xl border border-brand-blue/20">
                            <p className="text-sm font-bold text-brand-blue">
                              {lang === 'hu' 
                                ? 'Eredmény: Havi 20+ óra megtakarítás.' 
                                : 'Result: 20+ hours saved monthly.'}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.testimonials.items.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-3xl border-l-4 border-brand-blue bg-brand-dark/40"
              >
                <p className="text-lg italic text-slate-300 mb-6">"{item.text}"</p>
                <div>
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-sm text-brand-blue">{item.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" className="rounded-2xl w-full object-cover aspect-[3/4]" alt="Team" referrerPolicy="no-referrer" />
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
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80" className="rounded-2xl w-full object-cover aspect-[3/4]" alt="Office" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">{t.about.title}</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
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

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="text-center p-4 glass rounded-2xl">
                <div className="text-2xl font-bold text-brand-blue">50+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">{lang === 'hu' ? 'Projekt' : 'Projects'}</div>
              </div>
              <div className="text-center p-4 glass rounded-2xl">
                <div className="text-2xl font-bold text-brand-blue">10+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">{lang === 'hu' ? 'Év tapasztalat' : 'Years Exp'}</div>
              </div>
              <div className="text-center p-4 glass rounded-2xl">
                <div className="text-2xl font-bold text-brand-blue">100%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">{lang === 'hu' ? 'Siker' : 'Success'}</div>
              </div>
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

      {/* FAQ Section */}
      <section className="py-24 bg-brand-dark/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{t.faq.title}</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <div key={idx} className="glass rounded-2xl overflow-hidden border border-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-white">{item.q}</span>
                  {openFaq === idx ? <Minus className="w-5 h-5 text-brand-blue" /> : <Plus className="w-5 h-5 text-brand-blue" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-400 border-t border-white/5">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="glass p-10 md:p-16 rounded-[40px] border border-white/10 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{t.quote.title}</h2>
              <div className="flex justify-center gap-2 mb-8">
                {[1, 2, 3].map((step) => (
                  <div 
                    key={step} 
                    className={`h-2 w-12 rounded-full transition-all duration-500 ${quoteStep >= step ? 'bg-brand-blue' : 'bg-white/10'}`} 
                  />
                ))}
              </div>
            </div>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <AnimatePresence mode="wait">
                {quoteStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-center mb-8">{t.quote.steps.platform}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['web', 'app', 'mobile'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setQuoteData({ ...quoteData, platform: opt })}
                          className={`p-6 rounded-2xl border-2 transition-all text-center ${
                            quoteData.platform === opt 
                              ? 'border-brand-blue bg-brand-blue/10 text-white' 
                              : 'border-white/10 hover:border-white/30 text-slate-400'
                          }`}
                        >
                          <div className="font-bold">{(t.quote.options as any)[opt]}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {quoteStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-center mb-8">{t.quote.steps.system}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['yes', 'no'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setQuoteData({ ...quoteData, system: opt })}
                          className={`p-6 rounded-2xl border-2 transition-all text-center ${
                            quoteData.system === opt 
                              ? 'border-brand-blue bg-brand-blue/10 text-white' 
                              : 'border-white/10 hover:border-white/30 text-slate-400'
                          }`}
                        >
                          <div className="font-bold">{(t.quote.options as any)[opt]}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {quoteStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-center mb-8">{t.quote.steps.details}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">{t.contact.name}</label>
                        <input 
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors text-white"
                          placeholder="John Doe"
                          value={quoteData.name}
                          onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1 text-slate-300">{t.contact.email}</label>
                        <input 
                          type="email" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors text-white"
                          placeholder="john@example.com"
                          value={quoteData.email}
                          onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between pt-8">
                {quoteStep > 1 ? (
                  <button 
                    type="button"
                    onClick={() => setQuoteStep(quoteStep - 1)}
                    className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl transition-all flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    {t.quote.prev}
                  </button>
                ) : <div />}

                {quoteStep < 3 ? (
                  <button 
                    type="button"
                    onClick={() => setQuoteStep(quoteStep + 1)}
                    disabled={quoteStep === 1 && !quoteData.platform || quoteStep === 2 && !quoteData.system}
                    className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all flex items-center gap-2"
                  >
                    {t.quote.next}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button 
                    type="button"
                    className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-2xl transition-all flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    {t.quote.submit}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-blue/5 blur-[120px] -z-10 rounded-full" />
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg bg-white/5 border border-white/10">
                <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="font-bold text-xl text-white">Dat-assist</span>
            </div>
            
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#services" className="hover:text-brand-blue transition-colors">{t.nav.services}</a>
              <a href="#portfolio" className="hover:text-brand-blue transition-colors">{lang === 'hu' ? 'Referenciák' : 'Portfolio'}</a>
              <a href="#about" className="hover:text-brand-blue transition-colors">{t.nav.about}</a>
            </div>

            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} Dat-assist {lang === 'hu' ? 'Kft.' : 'LLC'}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
