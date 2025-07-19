import { MetadataRoute } from 'next'

// Mock function to get news articles - replace with real API call
function getNewsArticles() {
  // This should fetch from your actual database
  return [
    {
      slug: 'perubahan-regulasi-hukum-korporasi-2024',
      lastModified: new Date('2024-01-15'),
    },
    {
      slug: 'analisis-uu-omnibus-law-dampak-investasi',
      lastModified: new Date('2024-01-10'),
    },
    {
      slug: 'panduan-merger-akuisisi-2024',
      lastModified: new Date('2024-01-05'),
    }
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  const newsArticles = getNewsArticles()
  
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://hssplawfirm.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://hssplawfirm.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://hssplawfirm.com/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://hssplawfirm.com/team',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://hssplawfirm.com/news',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://hssplawfirm.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://hssplawfirm.com/partnership',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const newsRoutes: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `https://hssplawfirm.com/news/${article.slug}`,
    lastModified: article.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...newsRoutes]
}
