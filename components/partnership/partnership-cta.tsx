"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, Phone, ArrowRight } from "lucide-react"
import { PhoneNumber, PHONE_NUMBERS } from "@/components/ui/phone-number"

export function PartnershipCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-blue-700 to-blue-800 text-white">
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
              <span className="text-white">Siap Memulai</span>
              <br />
              <span className="text-yellow-400">Kerjasama?</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Bergabunglah dengan HSS Partners dan kembangkan bisnis hukum Anda ke level yang lebih tinggi. Tim kami
              siap membantu mewujudkan kemitraan yang sukses dan menguntungkan.
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
                <Download className="h-8 w-8 text-yellow-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Download Proposal</h3>
                  <p className="text-green-100 text-sm">Unduh dokumen lengkap program kerjasama</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <Mail className="h-8 w-8 text-yellow-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Email Partnership</h3>
                  <p className="text-green-100 text-sm">partnership@hssplawfirm.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <Phone className="h-8 w-8 text-yellow-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Hotline Partnership</h3>
                  <PhoneNumber 
                    phone={PHONE_NUMBERS.primary}
                    variant="default"
                    size="sm"
                    className="text-green-100 hover:text-white justify-center"
                    textClassName="text-green-100"
                    showIcon={false}
                  />
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
            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
              Ajukan Kerjasama Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Proposal
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
