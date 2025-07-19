import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Berita Hukum Terkini & Artikel Legal - HSS Partners Law Firm",
  description:
    "Baca berita hukum terkini, artikel legal, dan insight dari para ahli hukum HSS Partners. Update regulasi, analisis kasus, tips hukum bisnis, dan perkembangan dunia hukum Indonesia terbaru.",
  keywords: "berita hukum terkini, artikel legal indonesia, insight hukum bisnis, analisis kasus hukum, regulasi terbaru, tips hukum, perkembangan hukum indonesia, news hukum",
  openGraph: {
    title: "Berita Hukum Terkini & Artikel Legal - HSS Partners",
    description: "Update berita hukum, artikel legal, dan insight dari para ahli hukum terpercaya",
    url: "https://hssplawfirm.com/news",
    images: [
      {
        url: "/hsslogo.png",
        width: 1200,
        height: 630,
        alt: "Berita Hukum HSS Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berita Hukum Terkini & Artikel Legal - HSS Partners",
    description: "Update berita hukum, artikel legal, dan insight dari para ahli hukum terpercaya",
    images: ["/hsslogo.png"],
  },
  alternates: {
    canonical: "https://hssplawfirm.com/news",
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
