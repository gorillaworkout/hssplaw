import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesProcess } from "@/components/services/services-process"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Layanan Hukum Terlengkap - HSS Partners | Konsultasi, Litigasi, Hukum Bisnis & Korporat",
  description:
    "Layanan hukum terlengkap dari HSS Partners: konsultasi hukum, litigasi perdata & pidana, hukum bisnis, merger & akuisisi, hukum korporat, kontrak, properti, keluarga. Tim advokat berpengalaman 20+ tahun dengan tingkat keberhasilan 95%.",
  keywords: "layanan hukum terlengkap, konsultasi hukum jakarta, litigasi perdata pidana, hukum bisnis indonesia, merger akuisisi, hukum korporat, kontrak bisnis, advokat properti, pengacara keluarga, jasa hukum profesional",
  openGraph: {
    title: "Layanan Hukum Terlengkap - HSS Partners Law Firm",
    description: "Konsultasi hukum, litigasi, hukum bisnis & korporat dengan tingkat keberhasilan 95%",
    url: "https://hssplawfirm.com/services",
    images: [
      {
        url: "/hsslogo.png",
        width: 1200,
        height: 630,
        alt: "Layanan Hukum HSS Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Hukum Terlengkap - HSS Partners",
    description: "Konsultasi hukum, litigasi, hukum bisnis & korporat dengan tingkat keberhasilan 95%",
    images: ["/hsslogo.png"],
  },
  alternates: {
    canonical: "https://hssplawfirm.com/services",
  },
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
