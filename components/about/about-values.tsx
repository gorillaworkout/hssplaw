"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Target, Eye, Heart, Shield, Users } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Scale,
      title: "Integritas",
      description:
        "Kami berkomitmen pada standar etika tertinggi dalam setiap aspek praktik hukum kami dengan transparansi penuh.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Target,
      title: "Keunggulan",
      description:
        "Memberikan solusi hukum terbaik dengan pendekatan yang inovatif, strategis, dan hasil yang optimal.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Eye,
      title: "Transparansi",
      description:
        "Komunikasi yang jelas dan terbuka dengan klien di setiap tahap proses hukum tanpa ada yang disembunyikan.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Heart,
      title: "Dedikasi",
      description: "Berkomitmen penuh untuk melindungi kepentingan dan hak-hak klien kami dengan pelayanan terbaik.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Shield,
      title: "Kepercayaan",
      description: "Membangun hubungan jangka panjang berdasarkan kepercayaan dan hasil kerja yang konsisten.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Users,
      title: "Kolaborasi",
      description: "Bekerja sama dengan klien sebagai mitra untuk mencapai tujuan hukum yang diinginkan.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
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
            <span className="text-gray-900">Nilai-Nilai</span>
            <span className="text-gradient-blue"> Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prinsip-prinsip fundamental yang menjadi landasan dalam setiap layanan hukum yang kami berikan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group hover:-translate-y-2">
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`p-4 rounded-xl w-fit ${value.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
