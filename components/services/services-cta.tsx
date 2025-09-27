"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, ArrowRight, Clock, Shield } from "lucide-react"
import { PhoneNumber, PHONE_NUMBERS } from "@/components/ui/phone-number"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Konsultasi Hukum</span>
              <br />
              <span className="text-yellow-400">Gratis</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              HSSP Law siap membantu menyelesaikan masalah hukum Anda dengan tim advokat berpengalaman. 
              Dapatkan konsultasi hukum gratis untuk memahami situasi dan solusi terbaik.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <Clock className="h-8 w-8 text-yellow-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Konsultasi 24/7</h3>
                  <p className="text-blue-100 text-sm">Tim kami siap membantu kapan saja Anda membutuhkan</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <Shield className="h-8 w-8 text-yellow-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Kerahasiaan Terjamin</h3>
                  <p className="text-blue-100 text-sm">Informasi klien dilindungi dengan standar profesional</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <Phone className="h-8 w-8 text-yellow-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Telepon</h3>
                  <PhoneNumber 
                    phone={PHONE_NUMBERS.primary}
                    variant="default"
                    size="sm"
                    className="text-blue-100 hover:text-white justify-center"
                    textClassName="text-blue-100"
                    showIcon={false}
                  />
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
                  <PhoneNumber 
                    phone={PHONE_NUMBERS.primary}
                    variant="whatsapp"
                    size="sm"
                    className="text-blue-100 hover:text-white justify-center"
                    textClassName="text-blue-100"
                    showIcon={false}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link href="/about">Tentang HSSP Law</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
