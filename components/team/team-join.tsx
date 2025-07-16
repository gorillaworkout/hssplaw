"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, GraduationCap, ArrowRight } from "lucide-react"

export function TeamJoin() {
  const positions = [
    {
      title: "Senior Associate",
      department: "Corporate Law",
      type: "Full-time",
      experience: "5+ years",
    },
    {
      title: "Junior Associate",
      department: "Litigation",
      type: "Full-time",
      experience: "2+ years",
    },
    {
      title: "Legal Intern",
      department: "General Practice",
      type: "Internship",
      experience: "Fresh Graduate",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Bergabung dengan</span>
              <br />
              <span className="text-yellow-400">Tim Kami</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Kami selalu mencari talenta terbaik untuk bergabung dengan tim profesional kami. Kembangkan karir hukum
              Anda bersama HSS Partners Law Firm.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {positions.map((position, index) => (
              <Card
                key={position.title}
                className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="font-semibold text-white text-lg">{position.title}</h3>
                    <p className="text-purple-200 text-sm">{position.department}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-200">Type:</span>
                      <span className="text-white">{position.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Experience:</span>
                      <span className="text-white">{position.experience}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-fit mx-auto">
                <Users className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold">Lingkungan Kerja</h3>
              <p className="text-purple-200 text-sm">Budaya kerja yang supportive dan collaborative</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-fit mx-auto">
                <GraduationCap className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold">Pengembangan Karir</h3>
              <p className="text-purple-200 text-sm">Program training dan mentoring berkelanjutan</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-fit mx-auto">
                <Briefcase className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold">Benefit Kompetitif</h3>
              <p className="text-purple-200 text-sm">Paket kompensasi dan benefit yang menarik</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
              Lihat Lowongan Kerja
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-700 bg-transparent"
            >
              Kirim CV Spontan
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
