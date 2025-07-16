"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

export function AboutStats() {
  const stats = [
    {
      icon: TrendingUp,
      number: "500+",
      label: "Kasus Berhasil",
      description: "Tingkat keberhasilan 98%",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Klien Puas",
      description: "Dari berbagai sektor",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Award,
      number: "15+",
      label: "Penghargaan",
      description: "Prestasi nasional & internasional",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Clock,
      number: "15+",
      label: "Tahun Pengalaman",
      description: "Melayani dengan dedikasi",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Pencapaian</span>
            <span className="text-gradient-gold"> Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Angka-angka yang menunjukkan komitmen kami dalam memberikan layanan hukum terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-4">
                  <div
                    className={`p-4 rounded-full w-fit mx-auto ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div>
                    <motion.div
                      className={`text-4xl font-bold ${stat.color} mb-2`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</h3>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
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
