"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Target, Eye, Heart } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const values = [
    {
      icon: Scale,
      title: "Integritas",
      description: "Kami berkomitmen pada standar etika tertinggi dalam setiap aspek praktik hukum kami.",
    },
    {
      icon: Target,
      title: "Keunggulan",
      description: "Memberikan solusi hukum terbaik dengan pendekatan yang inovatif dan strategis.",
    },
    {
      icon: Eye,
      title: "Transparansi",
      description: "Komunikasi yang jelas dan terbuka dengan klien di setiap tahap proses hukum.",
    },
    {
      icon: Heart,
      title: "Dedikasi",
      description: "Berkomitmen penuh untuk melindungi kepentingan dan hak-hak klien kami.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Tentang Kami
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-900">Firma Hukum</span>
                <br />
                <span className="text-gradient-blue">Terdepan</span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Habibullah Sahura Sudana Partners Law Firm didirikan dengan visi menjadi firma hukum terdepan yang
                memberikan solusi hukum komprehensif dan inovatif. Dengan pengalaman lebih dari 15 tahun, kami telah
                membantu ratusan klien dari berbagai sektor industri.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" className="gradient-blue text-white hover:opacity-90">
                <Link href="/about">Pelajari Lebih Lanjut</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
              >
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-lg w-fit">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
