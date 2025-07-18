"use client"

import { motion } from "framer-motion"
import { Scale, CheckCircle } from "lucide-react"
import Image from "next/image"

export function ServicesHero() {
  const highlights = ["Konsultasi 24/7", "Tim Ahli Berpengalaman", "Standar Internasional", "Solusi Komprehensif"]

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <Image src="/hssnotext.png" alt="HSS Partners Logo" width={50} height={100} />
              Layanan Hukum Profesional
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Solusi Hukum</span>
              <br />
              <span className="text-yellow-400">Komprehensif</span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan hukum dengan standar internasional untuk memenuhi kebutuhan individu,
              bisnis, dan korporasi dengan pendekatan yang inovatif dan hasil yang optimal.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="flex items-center space-x-2 justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <CheckCircle className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
