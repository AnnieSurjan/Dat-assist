import { useState, useEffect } from 'react';

const GA_ID = 'G-BJ7RQK3893';
const CONSENT_KEY = 'cookie_consent';

function loadGA() {
  if (document.getElementById('ga-script')) return;
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

export default function CookieBanner({ lang }: { lang: 'hu' | 'en' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') {
      loadGA();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    loadGA();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto glass border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
        <p className="text-sm text-slate-300 flex-1">
          {lang === 'hu'
            ? 'Ez a weboldal sütiket (cookie-kat) használ a látogatói statisztikák elemzéséhez (Google Analytics). Az elfogadással hozzájárulsz a sütik használatához.'
            : 'This website uses cookies (Google Analytics) to analyse visitor statistics. By accepting, you consent to their use.'}
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-bold border border-white/20 rounded-xl hover:bg-white/10 transition-all text-slate-300"
          >
            {lang === 'hu' ? 'Elutasítom' : 'Decline'}
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-bold bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl transition-all"
          >
            {lang === 'hu' ? 'Elfogadom' : 'Accept'}
          </button>
        </div>
      </div>
    </div>
  );
}
