import { useState, useEffect, useRef } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

const RECAPTCHA_SITE_KEY = '6Lf7KNAsAAAAADQv6qnxZFV_llxU9iRNYPawN7og';

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

const text = {
  hu: {
    title: 'Küldj üzenetet',
    name: 'Név',
    email: 'Email cím',
    message: 'Üzenet',
    send: 'Üzenet küldése',
    success: 'Köszönjük! Hamarosan válaszolunk.',
    error: 'Hiba történt. Kérjük próbálja újra.',
    namePlaceholder: 'Kovács János',
    emailPlaceholder: 'kovacs@example.com',
    messagePlaceholder: 'Írja le kérdését vagy üzenetét...',
  },
  en: {
    title: 'Send a Message',
    name: 'Name',
    email: 'Email address',
    message: 'Message',
    send: 'Send Message',
    success: 'Thank you! We will get back to you soon.',
    error: 'Something went wrong. Please try again.',
    namePlaceholder: 'John Doe',
    emailPlaceholder: 'john@example.com',
    messagePlaceholder: 'Write your question or message...',
  },
};

export default function ContactForm({ lang }: { lang: 'hu' | 'en' }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const t = text[lang];

  useEffect(() => {
    const renderWidget = () => {
      if (!captchaRef.current) return;
      captchaRef.current.innerHTML = '';
      widgetId.current = null;
      widgetId.current = window.grecaptcha.render(captchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: (token: string) => setCaptchaToken(token),
        'expired-callback': () => setCaptchaToken(null),
        theme: 'dark',
        hl: lang,
      });
      setCaptchaToken(null);
    };

    if (window.grecaptcha?.render) {
      renderWidget();
      return;
    }

    window.onRecaptchaLoad = renderWidget;

    if (!document.getElementById('recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, [lang]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken || !form.name || !form.email || !form.message) return;
    setSubmitState('loading');
    try {
      const res = await fetch('/send-contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captcha: captchaToken }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitState('success');
        setForm({ name: '', email: '', message: '' });
        setCaptchaToken(null);
        if (window.grecaptcha && widgetId.current !== null) {
          window.grecaptcha.reset(widgetId.current);
        }
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{t.title}</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <User className="w-3 h-3" /> {t.name}
              </label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder={t.namePlaceholder}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors text-white placeholder:text-slate-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Mail className="w-3 h-3" /> {t.email}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder={t.emailPlaceholder}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors text-white placeholder:text-slate-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <MessageSquare className="w-3 h-3" /> {t.message}
              </label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder={t.messagePlaceholder}
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors text-white placeholder:text-slate-600 resize-none"
              />
            </div>

            <div ref={captchaRef} className="flex justify-center" />

            <button
              type="submit"
              disabled={!captchaToken || submitState === 'loading' || !form.name || !form.email || !form.message}
              className="w-full px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {submitState === 'loading' ? '...' : t.send}
            </button>

            {submitState === 'success' && (
              <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-center font-bold">
                {t.success}
              </div>
            )}
            {submitState === 'error' && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-center font-bold">
                {t.error}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
