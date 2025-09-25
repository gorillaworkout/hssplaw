"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Phone, Award } from "lucide-react"
import Image from "next/image"
import { teamMembersData } from "@/lib/team-data"

export function TeamGrid() {
  const teamMembers = teamMembersData

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group hover:-translate-y-2 flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-1">
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
                    <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1.5">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6 flex-shrink-0">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mb-1">{member.position}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{member.specialization}</p>
                  </div>

                  {/* Education & Experience Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6 flex-shrink-0">
                    <Badge variant="secondary" className="text-xs px-3 py-1">
                      {member.experience}
                    </Badge>
                    <Badge variant="outline" className="text-xs px-3 py-1">
                      {member.education}
                    </Badge>
                  </div>

                  {/* Description */}
                  <div className="mb-6 flex-grow">
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {member.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6 flex-shrink-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-3 text-center">Prestasi & Sertifikasi</h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start text-xs text-gray-600">
                          <Award className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6 flex-shrink-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2 text-center">Bahasa</h4>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.languages.map((language, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex justify-center space-x-2 pt-4 border-t border-gray-200 flex-shrink-0">
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50 h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50 h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50 h-8 w-8 p-0">
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
