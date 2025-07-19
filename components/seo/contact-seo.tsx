'use client'

interface ContactInfo {
  address: {
    street: string
    city: string
    region: string
    postalCode: string
    country: string
  }
  phone: string
  email: string
  openingHours: string[]
  geo: {
    latitude: number
    longitude: number
  }
}

interface ContactSEOProps {
  contactInfo: ContactInfo
}

export function ContactSEO({ contactInfo }: ContactSEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "HSS Partners Law Firm",
    "alternateName": "Habibullah Sahura Sudana Partners",
    "description": "Firma hukum profesional yang menyediakan layanan konsultasi hukum, litigasi, hukum bisnis, dan hukum perusahaan di Indonesia",
    "url": "https://hssplawfirm.com",
    "logo": "https://hssplawfirm.com/hsslogo.png",
    "image": "https://hssplawfirm.com/hsslogo.png",
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactInfo.address.street,
      "addressLocality": contactInfo.address.city,
      "addressRegion": contactInfo.address.region,
      "postalCode": contactInfo.address.postalCode,
      "addressCountry": contactInfo.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": contactInfo.geo.latitude,
      "longitude": contactInfo.geo.longitude
    },
    "openingHours": contactInfo.openingHours,
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "serviceType": [
      "Konsultasi Hukum",
      "Litigasi",
      "Hukum Bisnis",
      "Hukum Perusahaan",
      "Hukum Kontrak",
      "Merger & Akuisisi"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hss-partners",
      "https://www.facebook.com/hsspartners",
      "https://twitter.com/hsspartners"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
