"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Habibullah, S.H., M.H.",
      position: "Managing Partner",
      specialization: "Hukum Korporasi & Litigasi",
      experience: "20+ tahun",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ahli hukum korporasi dengan pengalaman luas dalam merger & akuisisi serta litigasi bisnis.",
    },
    {
      name: "Sahura, S.H., LL.M.",
      position: "Senior Partner",
      specialization: "Hukum Properti & Kontrak",
      experience: "18+ tahun",
      image: "/placeholder.svg?height=300&width=300",
      description: "Spesialis hukum properti dan kontrak bisnis dengan track record yang excellent.",
    },
    {
      name: "Sudana, S.H., M.Kn.",
      position: "Senior Partner",
      specialization: "Hukum Pidana & Keluarga",
      experience: "15+ tahun",
      image: "/placeholder.svg?height=300&width=300",
      description: "Praktisi hukum pidana dan keluarga yang berpengalaman dalam berbagai kasus kompleks.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Tim Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Tim</span>
            <span className="text-gradient-gold"> Ahli Hukum</span>
            <br />
            <span className="text-gradient-blue">Berpengalaman</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dipimpin oleh para ahli hukum berpengalaman dengan keahlian di berbagai bidang hukum untuk memberikan solusi
            terbaik bagi klien.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group hover:-translate-y-2">
                <CardContent className="p-6 space-y-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                    <p className="text-sm text-gray-600">{member.specialization}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                      {member.experience}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center">{member.description}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="gradient-blue text-white hover:opacity-90">
            <Link href="/team">
              Lihat Semua Tim
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
