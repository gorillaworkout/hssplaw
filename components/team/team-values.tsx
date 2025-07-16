"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target, Heart } from "lucide-react"

export function TeamValues() {
  const values = [
    {
      icon: Users,
      title: "Kolaborasi",
      description: "Kami percaya pada kekuatan kerja tim dan saling mendukung untuk mencapai hasil terbaik",
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description: "Selalu mencari cara baru dan kreatif dalam menyelesaikan tantangan hukum yang kompleks",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Berkomitmen pada standar kualitas tertinggi dalam setiap aspek pekerjaan kami",
    },
    {
      icon: Heart,
      title: "Integritas",
      description: "Menjunjung tinggi nilai-nilai etika dan moral dalam setiap keputusan dan tindakan",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Nilai-Nilai</span>
            <span className="text-gradient-gold"> Tim</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prinsip-prinsip yang menjadi fondasi kuat dalam membangun tim yang solid dan profesional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
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
