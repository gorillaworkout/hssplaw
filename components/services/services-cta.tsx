"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Siap Membantu</span>
              <br />
              <span className="text-yellow-400">Masalah Hukum Anda?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Jangan biarkan masalah hukum mengganggu bisnis atau kehidupan Anda. Hubungi kami sekarang untuk konsultasi
              gratis dengan tim ahli hukum berpengalaman.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <Phone className="h-8 w-8 text-yellow-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Telepon</h3>
                  <p className="text-blue-100 text-sm">+62 21 1234 5678</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <Mail className="h-8 w-8 text-yellow-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <p className="text-blue-100 text-sm">info@hssplawfirm.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <MessageCircle className="h-8 w-8 text-yellow-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                  <p className="text-blue-100 text-sm">+62 812 3456 7890</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
              <Link href="/contact">
                Konsultasi Gratis Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href="/about">Pelajari Lebih Lanjut</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
