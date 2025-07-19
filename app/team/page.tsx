import type { Metadata } from "next"
import { TeamHero } from "@/components/team/team-hero"
import { TeamGrid } from "@/components/team/team-grid"
import { TeamValues } from "@/components/team/team-values"
import { TeamJoin } from "@/components/team/team-join"

export const metadata: Metadata = {
  title: "Tim Advokat Terbaik Indonesia - HSS Partners | Pengacara Berpengalaman 20+ Tahun",
  description:
    "Tim advokat terbaik HSS Partners dengan pengalaman 20+ tahun. Para ahli hukum lulusan universitas terkemuka dalam & luar negeri, spesialis di bidang hukum bisnis, litigasi, korporat, dan merger akuisisi. Bergabunglah dengan tim pemenang award.",
  keywords: "tim advokat terbaik indonesia, pengacara berpengalaman, ahli hukum bisnis, advokat litigasi terbaik, lawyer indonesia, pengacara korporat, tim hukum profesional, advokat merger akuisisi",
  openGraph: {
    title: "Tim Advokat Terbaik Indonesia - HSS Partners",
    description: "Tim advokat dengan pengalaman 20+ tahun, lulusan universitas terkemuka, spesialis hukum bisnis & litigasi",
    url: "https://hssplawfirm.com/team",
    images: [
      {
        url: "/hsslogo.png",
        width: 1200,
        height: 630,
        alt: "Tim Advokat HSS Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim Advokat Terbaik Indonesia - HSS Partners",
    description: "Tim advokat berpengalaman 20+ tahun, spesialis hukum bisnis & litigasi",
    images: ["/hsslogo.png"],
  },
  alternates: {
    canonical: "https://hssplawfirm.com/team",
  },
}

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <TeamGrid />
      <TeamValues />
      <TeamJoin />
    </div>
  )
}
