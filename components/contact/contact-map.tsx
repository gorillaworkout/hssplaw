"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="border-0 shadow-xl overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 relative">
          {/* Map Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">HSS Partners Law Firm</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Jl. Sudirman No. 123
                  <br />
                  Jakarta Pusat 10220
                </p>
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <Navigation className="h-4 w-4" />
                  <span className="text-sm font-medium">Lihat di Google Maps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-white rounded-full opacity-40"></div>
          <div className="absolute bottom-6 left-8 w-4 h-4 bg-white rounded-full opacity-50"></div>
        </div>
      </Card>
    </motion.div>
  )
}
