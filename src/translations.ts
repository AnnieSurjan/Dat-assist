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
          title: 'Egyedi Weboldalak',
          description: 'Modern, reszponzív és gyors weboldalak, amelyek kiemelik vállalkozását a tömegből.',
          icon: 'Globe',
        },
        {
          title: 'Webalkalmazások',
          description: 'Komplex üzleti folyamatokat támogató, skálázható és biztonságos webes rendszerek.',
          icon: 'Layout',
        },
        {
          title: 'Mobil Alkalmazások',
          description: 'iOS és Android platformokra optimalizált natív vagy hibrid megoldások.',
          icon: 'Smartphone',
        },
      ],
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
          title: 'Custom Websites',
          description: 'Modern, responsive, and fast websites that make your business stand out.',
          icon: 'Globe',
        },
        {
          title: 'Web Applications',
          description: 'Scalable and secure web systems supporting complex business processes.',
          icon: 'Layout',
        },
        {
          title: 'Mobile Applications',
          description: 'Native or hybrid solutions optimized for iOS and Android platforms.',
          icon: 'Smartphone',
        },
      ],
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
