'use client'

export function LocalBusinessSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "HSS Partners Law Firm",
    "alternateName": "Habibullah Sahura Sudana Partners",
    "description": "Firma hukum terpercaya di Indonesia dengan layanan konsultasi hukum, litigasi, hukum bisnis, dan hukum korporat",
    "url": "https://hssplawfirm.com",
    "logo": "https://hssplawfirm.com/hsslogo.png",
    "image": [
      "https://hssplawfirm.com/hsslogo.png",
      "https://hssplawfirm.com/hssnotext.png"
    ],
    "telephone": "+62-21-XXXXXXX",
    "email": "info@hssplawfirm.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Sudirman No. 123",
      "addressLocality": "Jakarta Pusat",
      "addressRegion": "DKI Jakarta",
      "postalCode": "10220",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088,
      "longitude": 106.8456
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/hss-partners",
      "https://www.facebook.com/hsspartners",
      "https://twitter.com/hsspartners",
      "https://www.instagram.com/hsspartners"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Indonesia"
      },
      {
        "@type": "City",
        "name": "Jakarta"
      },
      {
        "@type": "City", 
        "name": "Bandung"
      },
      {
        "@type": "City",
        "name": "Surabaya"
      }
    ],
    "serviceType": [
      "Konsultasi Hukum",
      "Litigasi Perdata",
      "Litigasi Pidana",
      "Hukum Bisnis",
      "Hukum Korporat",
      "Merger & Akuisisi",
      "Hukum Kontrak",
      "Hukum Properti",
      "Hukum Keluarga",
      "Arbitrase",
      "Mediasi"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Budi Santoso"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Pelayanan hukum terbaik yang pernah saya terima. Tim HSS Partners sangat profesional dan berpengalaman."
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Habibullah Sahura Sudana"
    },
    "foundingDate": "1995",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 50
    },
    "knowsAbout": [
      "Hukum Bisnis Indonesia",
      "Litigasi",
      "Merger dan Akuisisi",
      "Hukum Korporat",
      "Arbitrase Internasional"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
