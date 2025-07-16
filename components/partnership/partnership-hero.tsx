"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Handshake, Users, Globe, ArrowRight } from "lucide-react"

export function PartnershipHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-600 via-blue-700 to-blue-800 text-white overflow-hidden">
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
              <Handshake className="h-4 w-4 mr-2" />
              Program Kerjasama
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Kemitraan</span>
              <br />
              <span className="text-yellow-400">Strategis</span>
            </h1>

            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Bergabunglah dengan HSS Partners Law Firm dan kembangkan bisnis hukum Anda melalui program kerjasama yang
              saling menguntungkan dengan standar profesional tinggi.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="text-center space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-fit mx-auto">
                <Users className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold">Network Luas</h3>
              <p className="text-green-100 text-sm">Akses ke jaringan profesional hukum terluas di Indonesia</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-fit mx-auto">
                <Globe className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold">Jangkauan Global</h3>
              <p className="text-green-100 text-sm">Peluang kerjasama internasional dengan firma hukum terkemuka</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-fit mx-auto">
                <Handshake className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold">Win-Win Solution</h3>
              <p className="text-green-100 text-sm">Program kemitraan yang menguntungkan semua pihak</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
              Mulai Kerjasama
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
            >
              Download Proposal
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
