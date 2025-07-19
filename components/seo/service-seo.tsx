'use client'

interface Service {
  name: string
  description: string
  url: string
  category: string
}

interface ServiceSEOProps {
  services: Service[]
}

export function ServiceSEO({ services }: ServiceSEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HSS Partners Law Firm",
    "url": "https://hssplawfirm.com",
    "logo": "https://hssplawfirm.com/hsslogo.png",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Hukum HSS Partners",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "category": service.category,
          "provider": {
            "@type": "Organization",
            "name": "HSS Partners Law Firm"
          }
        },
        "url": service.url,
        "position": index + 1
      }))
    },
    "serviceType": "Legal Services",
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
