import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { TeamSection } from "@/components/sections/team-section"
import { NewsSection } from "@/components/sections/news-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "HSS Partners Law Firm - Firma Hukum Terpercaya #1 di Indonesia | Konsultasi Hukum Profesional",
  description:
    "HSS Partners adalah firma hukum terpercaya #1 di Indonesia yang didirikan pada 2025. Layanan konsultasi hukum, litigasi, hukum bisnis, merger & akuisisi, hukum perusahaan. Konsultasi GRATIS hari ini!",
  keywords: "firma hukum terbaik indonesia, konsultasi hukum jakarta, pengacara terpercaya, advokat profesional, jasa hukum bisnis, litigasi terbaik, merger akuisisi, hukum perusahaan, HSS Partners, konsultasi hukum gratis",
  openGraph: {
    title: "HSS Partners Law Firm - Firma Hukum Terpercaya #1 di Indonesia",
    description: "Firma hukum yang didirikan pada 2025. Konsultasi hukum, litigasi, hukum bisnis terbaik. Konsultasi GRATIS hari ini!",
    url: "https://hssplawfirm.com",
    images: [
      {
        url: "/hsslogo.png",
        width: 1200,
        height: 630,
        alt: "HSS Partners Law Firm - Firma Hukum Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSS Partners Law Firm - Firma Hukum Terpercaya #1 di Indonesia",
    description: "Firma hukum yang didirikan pada 2025. Konsultasi GRATIS hari ini!",
    images: ["/hsslogo.png"],
  },
  alternates: {
    canonical: "https://hssplawfirm.com",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <NewsSection />
      <ContactSection />
    </div>
  )
}
