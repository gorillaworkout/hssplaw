import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutHistory } from "@/components/about/about-history"
import { AboutValues } from "@/components/about/about-values"
import { AboutStats } from "@/components/about/about-stats"

export const metadata: Metadata = {
  title: "Tentang Kami - HSS Partners Law Firm",
  description:
    "Pelajari lebih lanjut tentang Habibullah Sahura Sudana Partners Law Firm, sejarah, visi misi, dan nilai-nilai yang kami junjung tinggi dalam memberikan layanan hukum terbaik.",
  keywords: "tentang hss partners, sejarah firma hukum, visi misi law firm, nilai-nilai hukum",
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
