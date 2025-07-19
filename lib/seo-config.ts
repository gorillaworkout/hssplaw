export const SEO_CONFIG = {
  // Site Information
  siteName: "HSS Partners Law Firm",
  siteUrl: "https://hssplawfirm.com",
  defaultTitle: "HSS Partners Law Firm - Firma Hukum Terpercaya #1 di Indonesia",
  defaultDescription: "Firma hukum terpercaya #1 di Indonesia dengan pengalaman 20+ tahun. Layanan konsultasi hukum, litigasi, hukum bisnis, merger & akuisisi. Konsultasi GRATIS hari ini!",
  
  // Organization Info
  organization: {
    name: "HSS Partners Law Firm",
    legalName: "Habibullah Sahura Sudana Partners",
    foundingDate: "1995",
    address: {
      street: "Jl. Sudirman Kav. 52-53",
      city: "Jakarta Pusat",
      region: "DKI Jakarta",
      postalCode: "10210",
      country: "ID"
    },
    contact: {
      phone: "+62-21-XXXXXXX",
      email: "info@hssplawfirm.com"
    },
    geo: {
      latitude: -6.2088,
      longitude: 106.8456
    },
    openingHours: [
      "Mo-Fr 09:00-18:00"
    ]
  },

  // Social Media
  social: {
    facebook: "https://www.facebook.com/hsspartners",
    linkedin: "https://www.linkedin.com/company/hss-partners",
    twitter: "https://twitter.com/hsspartners"
  },

  // Default Images
  images: {
    logo: "/hsslogo.png",
    favicon: "/hssnotext.png",
    ogImage: "/hsslogo.png"
  },

  // Keywords
  keywords: {
    primary: [
      "firma hukum terbaik indonesia",
      "konsultasi hukum jakarta",
      "pengacara terpercaya",
      "advokat profesional",
      "jasa hukum bisnis"
    ],
    services: [
      "konsultasi hukum",
      "litigasi",
      "hukum bisnis",
      "hukum korporat",
      "merger akuisisi",
      "hukum kontrak"
    ]
  },

  // Services for Schema
  services: [
    {
      name: "Konsultasi Hukum",
      description: "Konsultasi hukum profesional dengan advokat berpengalaman",
      url: "https://hssplawfirm.com/services#konsultasi",
      category: "Legal Consultation"
    },
    {
      name: "Litigasi",
      description: "Layanan litigasi perdata dan pidana dengan tingkat keberhasilan tinggi",
      url: "https://hssplawfirm.com/services#litigasi",
      category: "Litigation"
    },
    {
      name: "Hukum Bisnis",
      description: "Pendampingan hukum untuk kebutuhan bisnis dan korporat",
      url: "https://hssplawfirm.com/services#bisnis",
      category: "Business Law"
    },
    {
      name: "Merger & Akuisisi",
      description: "Konsultasi dan pendampingan untuk merger dan akuisisi perusahaan",
      url: "https://hssplawfirm.com/services#merger",
      category: "Mergers & Acquisitions"
    }
  ],

  // FAQs for Schema
  faqs: [
    {
      question: "Apa layanan utama yang ditawarkan HSS Partners?",
      answer: "HSS Partners menawarkan layanan konsultasi hukum, litigasi, hukum bisnis, hukum korporat, merger & akuisisi, dan berbagai layanan hukum profesional lainnya."
    },
    {
      question: "Berapa lama pengalaman HSS Partners di bidang hukum?",
      answer: "HSS Partners telah berpengalaman lebih dari 20 tahun dalam memberikan layanan hukum profesional di Indonesia sejak tahun 1995."
    },
    {
      question: "Apakah HSS Partners menyediakan konsultasi gratis?",
      answer: "Ya, HSS Partners menyediakan konsultasi hukum gratis untuk evaluasi awal kasus Anda. Hubungi kami untuk menjadwalkan konsultasi."
    },
    {
      question: "Di mana lokasi kantor HSS Partners?",
      answer: "Kantor HSS Partners berlokasi di Jakarta Pusat, mudah diakses dan strategis untuk melayani klien di seluruh Indonesia."
    }
  ]
}

export const generatePageTitle = (title: string) => {
  return `${title} | ${SEO_CONFIG.siteName}`
}

export const generatePageKeywords = (pageKeywords: string[]) => {
  return [...SEO_CONFIG.keywords.primary, ...pageKeywords, ...SEO_CONFIG.keywords.services].join(", ")
}
