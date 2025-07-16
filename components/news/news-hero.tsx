"use client"

import { motion } from "framer-motion"
import { FileText, TrendingUp } from "lucide-react"

export function NewsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white overflow-hidden">
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
              <FileText className="h-4 w-4 mr-2" />
              Berita & Artikel Hukum
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Insight Hukum</span>
              <br />
              <span className="text-yellow-400">Terkini</span>
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Dapatkan informasi terbaru seputar perkembangan hukum, analisis mendalam, dan tips praktis dari para ahli
              hukum HSS Partners Law Firm.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-yellow-400" />
              <span>Update Regulasi</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-yellow-400" />
              <span>Analisis Hukum</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-yellow-400" />
              <span>Tips Praktis</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
