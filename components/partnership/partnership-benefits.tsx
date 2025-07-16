"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Users, Zap, Globe, Award } from "lucide-react"

export function PartnershipBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Pertumbuhan Bisnis",
      description: "Akses ke pasar yang lebih luas dan peluang bisnis yang lebih besar",
    },
    {
      icon: Shield,
      title: "Dukungan Legal",
      description: "Backup legal support dan konsultasi dari tim ahli berpengalaman",
    },
    {
      icon: Users,
      title: "Network Profesional",
      description: "Bergabung dengan jaringan profesional hukum terluas di Indonesia",
    },
    {
      icon: Zap,
      title: "Efisiensi Operasional",
      description: "Shared resources dan sistem yang meningkatkan efisiensi kerja",
    },
    {
      icon: Globe,
      title: "Jangkauan Global",
      description: "Akses ke klien internasional dan kerjasama lintas negara",
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description: "Meningkatkan kredibilitas dengan bergabung bersama brand terpercaya",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Keuntungan</span>
            <span className="text-gradient-gold"> Bermitra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manfaat yang akan Anda dapatkan dengan bergabung sebagai mitra HSS Partners Law Firm
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
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
