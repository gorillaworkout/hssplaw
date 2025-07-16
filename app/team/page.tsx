import type { Metadata } from "next"
import { TeamHero } from "@/components/team/team-hero"
import { TeamGrid } from "@/components/team/team-grid"
import { TeamValues } from "@/components/team/team-values"
import { TeamJoin } from "@/components/team/team-join"

export const metadata: Metadata = {
  title: "Tim Kami - HSS Partners Law Firm",
  description:
    "Kenali tim ahli hukum HSS Partners yang berpengalaman dan profesional. Para advokat terbaik dengan keahlian di berbagai bidang hukum.",
  keywords: "tim hukum, advokat berpengalaman, pengacara profesional, ahli hukum indonesia",
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
