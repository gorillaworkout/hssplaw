import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  // Fallback metadata tanpa Firebase call untuk sekarang
  // Nanti bisa ditingkatkan dengan proper cache strategy
  return {
    title: `Artikel Hukum | HSS Partners Law Firm`,
    description: 'Baca artikel dan berita terbaru seputar hukum dari para ahli HSS Partners Law Firm.',
    keywords: 'berita hukum, artikel legal, analisis hukum, hss partners, konsultasi hukum',
    authors: [{ name: 'HSS Partners Law Firm' }],
    publisher: 'HSS Partners Law Firm',
    openGraph: {
      title: 'Artikel Hukum HSS Partners',
      description: 'Baca artikel dan berita terbaru seputar hukum dari para ahli HSS Partners Law Firm.',
      url: `https://hssplawfirm.com/news/${slug}`,
      type: 'article',
      images: [
        {
          url: '/placeholder.jpg',
          width: 1200,
          height: 630,
          alt: 'HSS Partners Law Firm Article',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Artikel Hukum HSS Partners',
      description: 'Baca artikel dan berita terbaru seputar hukum dari para ahli HSS Partners Law Firm.',
      images: ['/placeholder.jpg'],
    },
    alternates: {
      canonical: `https://hssplawfirm.com/news/${slug}`,
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
