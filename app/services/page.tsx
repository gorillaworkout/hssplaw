import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesProcess } from "@/components/services/services-process"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Jasa Hukum - HSS Partners Law Firm",
  description:
    "Layanan hukum komprehensif dari HSS Partners meliputi hukum korporasi, litigasi, kontrak bisnis, properti, keluarga, dan pidana dengan standar internasional.",
  keywords: "jasa hukum, layanan hukum, advokat, pengacara, hukum korporasi, litigasi, kontrak bisnis",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  )
}
