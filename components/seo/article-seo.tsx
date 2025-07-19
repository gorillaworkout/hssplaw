'use client'

interface ArticleSEOProps {
  article: {
    id: string
    title: string
    excerpt: string
    content: string
    category: string
    author: string
    publishedAt: string
    image: string
    slug: string
  }
}

export function ArticleSEO({ article }: ArticleSEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": [
      `https://hssplawfirm.com${article.image}`
    ],
    "datePublished": article.publishedAt,
    "dateModified": article.publishedAt,
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://hssplawfirm.com/team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HSS Partners Law Firm",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hssplawfirm.com/hsslogo.png"
      }
    },
    "url": `https://hssplawfirm.com/news/${article.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hssplawfirm.com/news/${article.slug}`
    },
    "articleSection": article.category,
    "keywords": [
      article.category.toLowerCase(),
      "berita hukum",
      "artikel legal",
      "hss partners",
      "analisis hukum"
    ],
    "inLanguage": "id-ID"
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://hssplawfirm.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Berita",
        "item": "https://hssplawfirm.com/news"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://hssplawfirm.com/news/${article.slug}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  )
}
