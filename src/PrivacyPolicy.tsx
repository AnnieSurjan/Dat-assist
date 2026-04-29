import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PrivacyPolicy({ open, onClose, lang }: { open: boolean; onClose: () => void; lang: 'hu' | 'en' }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={e => e.stopPropagation()}
            className="bg-[#0a0f1e] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {lang === 'hu' ? <HuContent /> : <EnContent />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HuContent() {
  return (
    <div className="prose prose-invert prose-sm max-w-none space-y-4 text-slate-300">
      <h2 className="text-2xl font-bold text-white">Adatvédelmi nyilatkozat</h2>
      <p className="text-slate-500 text-xs">Utolsó frissítés: 2026. január 1.</p>

      <h3 className="text-white font-bold">1. Adatkezelő</h3>
      <p>Dat-assist Kft. | Email: info@dat-assist.com | Tel: +1 (415) 854-8618</p>

      <h3 className="text-white font-bold">2. Gyűjtött adatok</h3>
      <p>Az alábbi személyes adatokat kezeljük:</p>
      <ul className="list-disc list-inside space-y-1 text-slate-400">
        <li>Kapcsolatfelvételi űrlap: név, email cím, üzenet szövege</li>
        <li>Árajánlat-kérő űrlap: név, email cím, platform típusa, meglévő rendszer</li>
        <li>Látogatói statisztikák: Google Analytics (anonim adatok)</li>
      </ul>

      <h3 className="text-white font-bold">3. Adatkezelés célja</h3>
      <ul className="list-disc list-inside space-y-1 text-slate-400">
        <li>Kapcsolatfelvételi kérések megválaszolása</li>
        <li>Árajánlatok elkészítése</li>
        <li>Weboldal forgalmának elemzése (csak hozzájárulás esetén)</li>
      </ul>

      <h3 className="text-white font-bold">4. Sütik (Cookie-k)</h3>
      <p>Az oldal Google Analytics sütiket használ, kizárólag a látogató hozzájárulása esetén. A sütik a látogató böngészőjében tárolódnak és statisztikai célokat szolgálnak. A hozzájárulás visszavonható a böngésző sütijeinek törlésével.</p>

      <h3 className="text-white font-bold">5. Adatmegőrzés</h3>
      <p>Az emailen beérkezett üzeneteket legfeljebb 2 évig őrizzük meg. Google Analytics adatok 14 hónapig kerülnek megőrzésre.</p>

      <h3 className="text-white font-bold">6. Az érintett jogai (GDPR)</h3>
      <ul className="list-disc list-inside space-y-1 text-slate-400">
        <li>Hozzáférés joga: kérheti a róla tárolt adatok másolatát</li>
        <li>Törlés joga: kérheti adatai törlését</li>
        <li>Helyesbítés joga: kérheti a hibás adatok javítását</li>
        <li>Tiltakozás joga: tiltakozhat az adatkezelés ellen</li>
      </ul>
      <p>Kérelmét az <span className="text-brand-blue select-all">info [at] dat-assist.com</span> címre küldheti.</p>

      <h3 className="text-white font-bold">7. Harmadik felek</h3>
      <p>Google Analytics (Google LLC) – adatvédelmi tájékoztató: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">policies.google.com/privacy</a></p>

      <h3 className="text-white font-bold">8. Jogorvoslat</h3>
      <p>Panasz esetén fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH): <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">naih.hu</a></p>
    </div>
  );
}

function EnContent() {
  return (
    <div className="prose prose-invert prose-sm max-w-none space-y-4 text-slate-300">
      <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
      <p className="text-slate-500 text-xs">Last updated: January 1, 2026</p>

      <h3 className="text-white font-bold">1. Data Controller</h3>
      <p>Dat-assist LLC | Email: info@dat-assist.com | Phone: +1 (415) 854-8618</p>

      <h3 className="text-white font-bold">2. Data We Collect</h3>
      <ul className="list-disc list-inside space-y-1 text-slate-400">
        <li>Contact form: name, email address, message content</li>
        <li>Quote request form: name, email address, platform type, existing system</li>
        <li>Visitor statistics: Google Analytics (anonymised data)</li>
      </ul>

      <h3 className="text-white font-bold">3. Purpose of Processing</h3>
      <ul className="list-disc list-inside space-y-1 text-slate-400">
        <li>Responding to contact requests</li>
        <li>Preparing quotes</li>
        <li>Analysing website traffic (only with consent)</li>
      </ul>

      <h3 className="text-white font-bold">4. Cookies</h3>
      <p>This website uses Google Analytics cookies only when you give your consent. Cookies are stored in your browser and serve statistical purposes. You can withdraw consent at any time by clearing your browser cookies.</p>

      <h3 className="text-white font-bold">5. Data Retention</h3>
      <p>Emails are retained for a maximum of 2 years. Google Analytics data is retained for 14 months.</p>

      <h3 className="text-white font-bold">6. Your Rights (GDPR)</h3>
      <ul className="list-disc list-inside space-y-1 text-slate-400">
        <li>Right of access: request a copy of your data</li>
        <li>Right to erasure: request deletion of your data</li>
        <li>Right to rectification: request correction of inaccurate data</li>
        <li>Right to object: object to the processing of your data</li>
      </ul>
      <p>Send your request to <span className="text-brand-blue select-all">info [at] dat-assist.com</span>.</p>

      <h3 className="text-white font-bold">7. Third Parties</h3>
      <p>Google Analytics (Google LLC) – privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">policies.google.com/privacy</a></p>

      <h3 className="text-white font-bold">8. Complaints</h3>
      <p>You have the right to lodge a complaint with a supervisory authority in your country of residence.</p>
    </div>
  );
}
