"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Phone, Award } from "lucide-react"
import Image from "next/image"

export function TeamGrid() {
  const teamMembers = [
    {
      name: "Habibullah, S.H., M.H.",
      position: "Managing Partner",
      specialization: "Hukum Korporasi & Litigasi",
      experience: "20+ tahun",
      education: "Universitas Indonesia",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Ahli hukum korporasi dengan pengalaman luas dalam merger & akuisisi serta litigasi bisnis kompleks.",
      achievements: ["Best Corporate Lawyer 2023", "Indonesia Legal Awards Winner"],
      languages: ["Indonesia", "English", "Mandarin"],
    },
    {
      name: "Sahura, S.H., LL.M.",
      position: "Senior Partner",
      specialization: "Hukum Properti & Kontrak",
      experience: "18+ tahun",
      education: "Harvard Law School",
      image: "/placeholder.svg?height=400&width=400",
      description: "Spesialis hukum properti dan kontrak bisnis dengan track record excellent dalam real estate law.",
      achievements: ["Property Law Expert 2022", "International Bar Association Member"],
      languages: ["Indonesia", "English"],
    },
    {
      name: "Sudana, S.H., M.Kn.",
      position: "Senior Partner",
      specialization: "Hukum Pidana & Keluarga",
      experience: "15+ tahun",
      education: "Universitas Gadjah Mada",
      image: "/placeholder.svg?height=400&width=400",
      description: "Praktisi hukum pidana dan keluarga yang berpengalaman dalam berbagai kasus kompleks dan sensitif.",
      achievements: ["Criminal Defense Excellence 2023", "Family Law Specialist"],
      languages: ["Indonesia", "English"],
    },
    {
      name: "Dr. Amanda Putri, S.H., M.H.",
      position: "Partner",
      specialization: "Hukum Internasional",
      experience: "12+ tahun",
      education: "Oxford University",
      image: "/placeholder.svg?height=400&width=400",
      description: "Ahli hukum internasional dengan fokus pada perdagangan internasional dan investasi asing.",
      achievements: ["International Trade Law Expert", "WTO Legal Advisor"],
      languages: ["Indonesia", "English", "French"],
    },
    {
      name: "Budi Santoso, S.H., M.H.",
      position: "Senior Associate",
      specialization: "Hukum Perburuhan",
      experience: "10+ tahun",
      education: "Universitas Padjadjaran",
      image: "/placeholder.svg?height=400&width=400",
      description: "Spesialis hukum ketenagakerjaan dengan pengalaman menangani kasus industrial relations.",
      achievements: ["Labor Law Specialist 2022", "HR Legal Consultant"],
      languages: ["Indonesia", "English"],
    },
    {
      name: "Sari Indrawati, S.H., M.H.",
      position: "Senior Associate",
      specialization: "Hukum Lingkungan",
      experience: "8+ tahun",
      education: "Universitas Indonesia",
      image: "/placeholder.svg?height=400&width=400",
      description: "Ahli hukum lingkungan dengan fokus pada environmental compliance dan sustainability law.",
      achievements: ["Environmental Law Pioneer", "Green Legal Award 2023"],
      languages: ["Indonesia", "English"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Meet Our</span>
            <span className="text-gradient-blue"> Legal Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim ahli hukum berpengalaman dengan keahlian di berbagai bidang hukum siap memberikan solusi terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group hover:-translate-y-2">
                <CardContent className="p-6 space-y-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium">{member.position}</p>
                      <p className="text-sm text-gray-600">{member.specialization}</p>
                    </div>

                    <div className="flex justify-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {member.experience}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {member.education}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center line-clamp-3">{member.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Prestasi:</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <Award className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Bahasa:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.languages.map((language, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex justify-center space-x-2 pt-4 border-t">
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
