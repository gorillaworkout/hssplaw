import type { Metadata } from "next"
import { PartnershipHero } from "@/components/partnership/partnership-hero"
import { PartnershipTypes } from "@/components/partnership/partnership-types"
import { PartnershipBenefits } from "@/components/partnership/partnership-benefits"
import { PartnershipProcess } from "@/components/partnership/partnership-process"
import { PartnershipCTA } from "@/components/partnership/partnership-cta"

export const metadata: Metadata = {
  title: "Kerjasama - HSS Partners Law Firm",
  description:
    "Bergabunglah dengan HSS Partners Law Firm melalui berbagai program kerjasama strategis. Kami menawarkan peluang kemitraan yang saling menguntungkan.",
  keywords: "kerjasama hukum, partnership law firm, kemitraan advokat, kolaborasi hukum",
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
