import { Metadata } from 'next'

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  image: string
}

// Mock function to get article by slug - replace with real API call
function getArticleBySlug(slug: string): NewsArticle | null {
  // This should be replaced with actual API call to your database
  const mockArticles: Record<string, NewsArticle> = {
    'perubahan-regulasi-hukum-korporasi-2024': {
      id: '1',
      title: 'Perubahan Regulasi Hukum Korporasi 2024: Dampak dan Strategi Adaptasi',
      excerpt: 'Analisis mendalam mengenai perubahan regulasi hukum korporasi terbaru dan dampaknya terhadap dunia bisnis Indonesia',
      content: 'Content here...',
      category: 'Hukum Korporasi',
      author: 'Dr. Ahmad Habibullah',
      publishedAt: '2024-01-15',
      image: '/placeholder.jpg'
    }
  }
  
  return mockArticles[slug] || null
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan - HSS Partners Law Firm',
      description: 'Artikel yang Anda cari tidak ditemukan. Kembali ke halaman berita untuk membaca artikel hukum lainnya.',
    }
  }

  return {
    title: `${article.title} | Berita Hukum HSS Partners Law Firm`,
    description: article.excerpt,
    keywords: `${article.category.toLowerCase()}, berita hukum, artikel legal, ${article.title.toLowerCase()}, hss partners, analisis hukum`,
    authors: [{ name: article.author }],
    publisher: 'HSS Partners Law Firm',
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://hssplawfirm.com/news/${params.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `https://hssplawfirm.com/news/${params.slug}`,
    },
  }
}

export default function NewsArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
