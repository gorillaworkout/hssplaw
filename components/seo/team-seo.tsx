'use client'

interface TeamMember {
  name: string
  position: string
  description: string
  image: string
  education: string[]
  experience: string
}

interface TeamSEOProps {
  teamMembers: TeamMember[]
}

export function TeamSEO({ teamMembers }: TeamSEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HSS Partners Law Firm",
    "url": "https://hssplawfirm.com",
    "employee": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.position,
      "description": member.description,
      "image": `https://hssplawfirm.com${member.image}`,
      "worksFor": {
        "@type": "Organization",
        "name": "HSS Partners Law Firm"
      },
      "alumniOf": member.education.map(edu => ({
        "@type": "EducationalOrganization",
        "name": edu
      })),
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Lawyer",
        "occupationLocation": {
          "@type": "Country",
          "name": "Indonesia"
        }
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
