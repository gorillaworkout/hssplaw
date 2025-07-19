import type { Metadata } from "next"
import { PartnershipHero } from "@/components/partnership/partnership-hero"
import { PartnershipTypes } from "@/components/partnership/partnership-types"
import { PartnershipBenefits } from "@/components/partnership/partnership-benefits"
import { PartnershipProcess } from "@/components/partnership/partnership-process"
import { PartnershipCTA } from "@/components/partnership/partnership-cta"

export const metadata: Metadata = {
  title: "Partnership & Kemitraan Strategis - HSS Partners | Peluang Kolaborasi Hukum Terbaik",
  description:
    "Bergabunglah dengan program partnership HSS Partners! Peluang kemitraan strategis untuk law firm, korporat, dan profesional hukum. Benefit menarik, revenue sharing, referral program, dan akses ke network internasional. Daftar sekarang!",
  keywords: "partnership hss partners, kemitraan law firm, kolaborasi hukum strategis, referral program advokat, revenue sharing lawyer, kerjasama firma hukum, network hukum internasional",
  openGraph: {
    title: "Partnership & Kemitraan Strategis - HSS Partners",
    description: "Peluang kemitraan strategis dengan benefit menarik, revenue sharing, dan akses network internasional",
    url: "https://hssplawfirm.com/partnership",
    images: [
      {
        url: "/hsslogo.png",
        width: 1200,
        height: 630,
        alt: "Partnership HSS Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnership & Kemitraan Strategis - HSS Partners",
    description: "Peluang kemitraan strategis dengan benefit menarik dan network internasional",
    images: ["/hsslogo.png"],
  },
  alternates: {
    canonical: "https://hssplawfirm.com/partnership",
  },
}

export default function PartnershipPage() {
  return (
    <div className="min-h-screen">
      <PartnershipHero />
      <PartnershipTypes />
      <PartnershipBenefits />
      <PartnershipProcess />
      <PartnershipCTA />
    </div>
  )
}
