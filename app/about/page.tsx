import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutHistory } from "@/components/about/about-history"
import { AboutValues } from "@/components/about/about-values"
import { AboutStats } from "@/components/about/about-stats"

export const metadata: Metadata = {
  title: "Tentang HSS Partners - Sejarah & Visi Misi Firma Hukum Terpercaya Indonesia",
  description:
    "Pelajari sejarah HSS Partners Law Firm yang didirikan pada 2025, visi misi, nilai-nilai, dan komitmen kami dalam memberikan layanan hukum terbaik di Indonesia. Tim advokat berpengalaman melayani klien korporat dan individu.",
  keywords: "tentang hss partners, sejarah firma hukum indonesia, visi misi law firm, nilai-nilai hukum, pengalaman firma hukum, advokat berpengalaman, sejarah pengacara indonesia",
  openGraph: {
    title: "Tentang HSS Partners - Sejarah & Visi Misi Firma Hukum Terpercaya",
    description: "Sejarah HSS Partners yang didirikan pada 2025, visi misi, dan komitmen dalam layanan hukum terbaik di Indonesia",
    url: "https://hssplawfirm.com/about",
    images: [
      {
        url: "/hsslogo.png",
        width: 1200,
        height: 630,
        alt: "Tentang HSS Partners Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang HSS Partners - Sejarah & Visi Misi Firma Hukum",
    description: "Sejarah HSS Partners yang didirikan pada 2025, visi misi, dan komitmen dalam layanan hukum terbaik",
    images: ["/hsslogo.png"],
  },
  alternates: {
    canonical: "https://hssplawfirm.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutHistory />
      <AboutValues />
      <AboutStats />
    </div>
  )
}
