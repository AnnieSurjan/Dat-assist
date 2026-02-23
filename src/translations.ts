export type Language = 'hu' | 'en';

export interface Content {
  nav: {
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
      icon: string;
      features?: string[];
    }[];
  };
  expertise: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  process: {
    title: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      role: string;
      text: string;
    }[];
  };
  about: {
    title: string;
    text: string;
    features: string[];
    marketing: {
      todo: string;
      focus: string;
      deliverables: string;
    };
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
  faq: {
    title: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  quote: {
    title: string;
    steps: {
      platform: string;
      system: string;
      details: string;
    };
    options: {
      web: string;
      app: string;
      mobile: string;
      yes: string;
      no: string;
    };
    next: string;
    prev: string;
    submit: string;
  };
}

export const translations: Record<Language, Content> = {
  hu: {
    nav: {
      services: 'Szolgáltatások',
      about: 'Rólunk',
      contact: 'Kapcsolat',
    },
    hero: {
      title: 'Egyedi szoftvermegoldások az Ön igényeire szabva',
      subtitle: 'A Dat-assist Kft. segít megvalósítani elképzeléseit, legyen szó weboldalról, webalkalmazásról vagy mobil applikációról.',
      cta: 'Kérjen ajánlatot',
    },
    services: {
      title: 'Miben segíthetünk?',
      items: [
        {
          title: 'Egyedi Weboldalak & PWA',
          description: 'Modern, reszponzív és villámgyors weboldalak, amelyek kiemelik vállalkozását. Progresszív Webalkalmazások (PWA) a natív élményért.',
          icon: 'Globe',
          features: ['SEO optimalizálás', 'Reszponzív design', 'PWA támogatás', 'Villámgyors betöltés']
        },
        {
          title: 'Webalkalmazások & ERP/CRM',
          description: 'Komplex üzleti folyamatokat támogató, skálázható rendszerek. Laravel, React és Node.js alapokon.',
          icon: 'LayoutDashboard',
          features: ['Egyedi CRM/ERP', 'Ügyfélportálok', 'API integrációk', 'Biztonságos architektúra']
        },
        {
          title: 'Mobil Alkalmazások',
          description: 'iOS és Android platformokra optimalizált natív és cross-platform (React Native) megoldások.',
          icon: 'Smartphone',
          features: ['iOS & Android', 'React Native', 'Valós idejű szinkron', 'UX/UI fókusz']
        },
        {
          title: 'AI & Automatizáció',
          description: 'Mesterséges intelligencia alapú megoldások, amelyek kiváltják a manuális munkafolyamatok jelentős részét.',
          icon: 'Cpu',
          features: ['AI Chatbotok', 'Dokumentum elemzés', 'Workflow automatizálás', 'LLM/RAG rendszerek']
        },
        {
          title: 'Egyedi Webshopok',
          description: 'Konverzióra optimalizált, egyedi e-kereskedelmi rendszerek dobozos megoldások nélkül.',
          icon: 'Database',
          features: ['Fizetési rendszerek', 'Készlet szinkron', 'Logisztikai integráció', 'AI ajánló rendszer']
        },
        {
          title: 'IoT & Rendszerintegráció',
          description: 'Okos eszközök és szenzorok összekapcsolása meglévő vállalati rendszerekkel.',
          icon: 'Code2',
          features: ['Szenzor integráció', 'Adatvizualizáció', 'Valós idejű vezérlés', 'Ipari megoldások']
        }
      ],
    },
    expertise: {
      title: 'Miért a Dat-assist?',
      items: [
        { title: 'Nincs Junior Fejlesztő', desc: 'Csak tapasztalt szakemberekkel dolgozunk, így elkerüljük a felesleges köröket és hibákat.' },
        { title: 'Forráskód Tulajdonjog', desc: 'A kész szoftver forráskódja az Ön tulajdona lesz, nincs rejtett kötöttség.' },
        { title: 'Üzleti Szemlélet', desc: 'Nem csak kódot írunk, hanem értjük a piaci célokat és az üzleti folyamatokat is.' },
        { title: 'MVP Szemlélet', desc: 'Segítünk a legfontosabb funkciókra fókuszálni, hogy gyorsan piacra léphessen.' },
        { title: 'Garancia & Támogatás', desc: 'Minden munkánkra garanciát vállalunk és hosszú távú támogatást nyújtunk.' }
      ]
    },
    process: {
      title: 'Hogyan dolgozunk?',
      steps: [
        { title: 'Tervezés', desc: 'Felmérjük az igényeket és megtervezzük a rendszert.' },
        { title: 'Fejlesztés', desc: 'Modern technológiákkal megépítjük a szoftvert.' },
        { title: 'Tesztelés', desc: 'Alapos ellenőrzés után biztosítjuk a hibátlan működést.' },
        { title: 'Átadás', desc: 'Élesítjük a rendszert és támogatást nyújtunk.' }
      ]
    },
    testimonials: {
      title: 'Ügyfeleink mondták',
      items: [
        { name: 'Kovács Péter', role: 'CEO, TechCorp', text: 'A Dat-assist csapata professzionális és gyors munkát végzett. Az új CRM rendszerünk forradalmasította a munkánkat.' },
        { name: 'Nagy Anna', role: 'Marketing Manager', text: 'Kiváló weboldalt kaptunk, ami azóta is rengeteg új ügyfelet hoz nekünk.' }
      ]
    },
    faq: {
      title: 'Gyakori Kérdések',
      items: [
        { q: 'Mennyi ideig tart egy projekt?', a: 'A projekt időtartama a komplexitástól függ. Egy egyszerűbb weboldal 2-4 hét, míg egy összetettebb webalkalmazás 2-4 hónap is lehet.' },
        { q: 'Hogyan történik a karbantartás?', a: 'Személyre szabott karbantartási csomagokat kínálunk, amelyek magukban foglalják a biztonsági frissítéseket, a mentéseket és a technikai támogatást.' },
        { q: 'Hogyan integrálható a meglévő QuickBooks rendszerembe?', a: 'Hivatalos QuickBooks API-kat használunk a biztonságos és zökkenőmentes adatkapcsolat kiépítéséhez, így az adatok valós időben szinkronizálódnak.' }
      ]
    },
    quote: {
      title: 'Interaktív Ajánlatkérés',
      steps: {
        platform: 'Milyen platformra van szüksége?',
        system: 'Van-e meglévő rendszere?',
        details: 'Kérjük, adja meg az elérhetőségeit!'
      },
      options: {
        web: 'Weboldal',
        app: 'Webalkalmazás',
        mobile: 'Mobil App',
        yes: 'Igen, van',
        no: 'Nincs, újat szeretnék'
      },
      next: 'Következő',
      prev: 'Vissza',
      submit: 'Ajánlatkérés elküldése'
    },
    about: {
      title: 'A Dat-assist-ról',
      text: 'A Dat-assist Kft. egy dinamikusan fejlődő szoftverfejlesztő cég. Fő profilunk az automatizálás, az adatok pontosságának ellenőrzése és a rendszerintegráció, különös tekintettel a pénzügyi szakértelemre. Szakértők vagyunk az AI-fejlesztésben és a pénzügyi szektorban egyaránt. Számviteli alkalmazásokat fejlesztünk QuickBooks és Xero felhasználók számára.',
      features: [
        'Automatizálás és rendszerintegráció',
        'Pénzügyi és számviteli szakértelem (QuickBooks, Xero)',
        'AI-alapú fejlesztések és megoldások',
        'Adatpontossági ellenőrzések'
      ],
      marketing: {
        todo: '★ Szolgáltatásainkkal megoldjuk az összes fejfájást okozó teendőjét.',
        focus: '★ Ön csak a praxisára koncentrálhat, hogy vállalkozása tovább növekedjen.',
        deliverables: 'Nincs több fizetett szabadság, betegszabadság, kávészünet stb., csak a TISZTA EREDMÉNYEK!'
      }
    },
    contact: {
      title: 'Lépjen velünk kapcsolatba',
      name: 'Név',
      email: 'E-mail',
      message: 'Üzenet',
      send: 'Küldés',
    },
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      title: 'Custom Software Solutions Tailored to Your Needs',
      subtitle: 'Dat-assist LLC helps you realize your ideas, whether it is a website, web application, or mobile app.',
      cta: 'Get a Quote',
    },
    services: {
      title: 'How can we help?',
      items: [
        {
          title: 'Custom Websites & PWA',
          description: 'Modern, responsive, and lightning-fast websites. Progressive Web Apps (PWA) for a native experience.',
          icon: 'Globe',
          features: ['SEO Optimization', 'Responsive Design', 'PWA Support', 'Fast Loading']
        },
        {
          title: 'Web Apps & ERP/CRM',
          description: 'Scalable systems supporting complex business processes. Based on Laravel, React, and Node.js.',
          icon: 'LayoutDashboard',
          features: ['Custom CRM/ERP', 'Client Portals', 'API Integrations', 'Secure Architecture']
        },
        {
          title: 'Mobile Applications',
          description: 'Native and cross-platform (React Native) solutions optimized for iOS and Android.',
          icon: 'Smartphone',
          features: ['iOS & Android', 'React Native', 'Real-time Sync', 'UX/UI Focus']
        },
        {
          title: 'AI & Automation',
          description: 'AI-based solutions that replace a significant portion of manual workflows.',
          icon: 'Cpu',
          features: ['AI Chatbots', 'Document Analysis', 'Workflow Automation', 'LLM/RAG Systems']
        },
        {
          title: 'Custom Webshops',
          description: 'Conversion-optimized, custom e-commerce systems without boxed solutions.',
          icon: 'Database',
          features: ['Payment Systems', 'Inventory Sync', 'Logistics Integration', 'AI Recommendations']
        },
        {
          title: 'IoT & System Integration',
          description: 'Connecting smart devices and sensors with existing corporate systems.',
          icon: 'Code2',
          features: ['Sensor Integration', 'Data Visualization', 'Real-time Control', 'Industrial Solutions']
        }
      ],
    },
    expertise: {
      title: 'Why Dat-assist?',
      items: [
        { title: 'No Junior Developers', desc: 'We only work with experienced professionals to avoid unnecessary rounds and errors.' },
        { title: 'Source Code Ownership', desc: 'The source code of the completed software becomes your property, no hidden ties.' },
        { title: 'Business Mindset', desc: 'We don\'t just write code; we understand market goals and business processes.' },
        { title: 'MVP Approach', desc: 'We help focus on the most important features for a fast market entry.' },
        { title: 'Guarantee & Support', desc: 'We provide a guarantee for all our work and offer long-term support.' }
      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        { title: 'Discovery', desc: 'We analyze your needs and plan the system architecture.' },
        { title: 'Development', desc: 'We build the software using modern technologies.' },
        { title: 'Testing', desc: 'Rigorous testing ensures flawless operation.' },
        { title: 'Launch', desc: 'We deploy the system and provide ongoing support.' }
      ]
    },
    testimonials: {
      title: 'Client Testimonials',
      items: [
        { name: 'Peter Kovacs', role: 'CEO, TechCorp', text: 'The Dat-assist team did professional and fast work. Our new CRM system revolutionized our operations.' },
        { name: 'Anna Nagy', role: 'Marketing Manager', text: 'We received an excellent website that has been bringing us many new clients ever since.' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How long does a project take?', a: 'The duration depends on complexity. A simple website takes 2-4 weeks, while a complex web app can take 2-4 months.' },
        { q: 'How does maintenance work?', a: 'We offer tailored maintenance packages including security updates, backups, and technical support.' },
        { q: 'How can it be integrated into my existing QuickBooks system?', a: 'We use official QuickBooks APIs to build secure and seamless data connections, ensuring real-time synchronization.' }
      ]
    },
    quote: {
      title: 'Interactive Quote Request',
      steps: {
        platform: 'What platform do you need?',
        system: 'Do you have an existing system?',
        details: 'Please provide your contact details!'
      },
      options: {
        web: 'Website',
        app: 'Web App',
        mobile: 'Mobile App',
        yes: 'Yes, I have',
        no: 'No, I want a new one'
      },
      next: 'Next',
      prev: 'Back',
      submit: 'Send Quote Request'
    },
    about: {
      title: 'About Dat-assist',
      text: 'Dat-assist LLC is a dynamically growing software development company. Our primary profiles include automation, data accuracy checks, and system integration, with a focus on finance expertise. We are experts in AI development as well as in the Finance sector. We are developing accounting applications for QuickBooks and Xero users.',
      features: [
        'Automation and system integration',
        'Finance and accounting expertise (QuickBooks, Xero)',
        'AI-driven development and solutions',
        'Data accuracy checks'
      ],
      marketing: {
        todo: '★ With our services, we will sort out all of your headache-inducing to-dos.',
        focus: '★ You will only concentrate your practice to keep your business growing.',
        deliverables: 'No more paid holidays, sick leaves, coffee breaks, etc., only the PURE DELIVERABLES!'
      }
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
    },
  },
};
