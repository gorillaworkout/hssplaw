'use client'

// Common SEO schemas for the website

interface BaseSchema {
  '@context': string
  '@type': string
}

interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization' | 'LegalService'
  name: string
  url: string
  logo: string
  description?: string
  address?: {
    '@type': 'PostalAddress'
    addressCountry: string
    addressLocality: string
    addressRegion: string
  }
  contactPoint?: {
    '@type': 'ContactPoint'
    telephone: string
    email: string
  }
}

export function OrganizationSEO() {
  const schema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'HSS Partners Law Firm',
    url: 'https://hssplawfirm.com',
    logo: 'https://hssplawfirm.com/hsslogo.png',
    description: 'Firma hukum profesional di Indonesia dengan pengalaman 20+ tahun',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-21-XXXXXXX',
      email: 'info@hssplawfirm.com'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSEO() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HSS Partners Law Firm',
    url: 'https://hssplawfirm.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://hssplawfirm.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
