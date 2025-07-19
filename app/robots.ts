import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/'],
        crawlDelay: 1,
      }
    ],
    sitemap: 'https://hssplawfirm.com/sitemap.xml',
    host: 'https://hssplawfirm.com'
  }
}
