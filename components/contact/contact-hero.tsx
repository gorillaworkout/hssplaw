"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
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
              <Phone className="h-4 w-4 mr-2" />
              Hubungi Kami
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Konsultasi</span>
              <br />
              <span className="text-yellow-400">Gratis Hari Ini</span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tim ahli hukum kami siap membantu menyelesaikan masalah hukum Anda. Dapatkan konsultasi gratis dan solusi
              yang tepat untuk kebutuhan hukum Anda.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="text-center space-y-2">
              <Phone className="h-8 w-8 text-yellow-400 mx-auto" />
              <p className="text-sm font-medium">24/7 Hotline</p>
            </div>
            <div className="text-center space-y-2">
              <Mail className="h-8 w-8 text-yellow-400 mx-auto" />
              <p className="text-sm font-medium">Email Support</p>
            </div>
            <div className="text-center space-y-2">
              <MapPin className="h-8 w-8 text-yellow-400 mx-auto" />
              <p className="text-sm font-medium">Jakarta Pusat</p>
            </div>
            <div className="text-center space-y-2">
              <Clock className="h-8 w-8 text-yellow-400 mx-auto" />
              <p className="text-sm font-medium">Respons Cepat</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
