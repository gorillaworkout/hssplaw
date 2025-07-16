"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Gavel, FileText, Home, Users, Shield, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export function ServicesGrid() {
  const services = [
    {
      icon: Building2,
      title: "Hukum Korporasi",
      description:
        "Konsultasi hukum bisnis, pendirian perusahaan, merger & akuisisi, dan kepatuhan korporasi dengan standar internasional.",
      features: ["Pendirian PT/CV", "Merger & Akuisisi", "Kepatuhan Regulasi", "Kontrak Bisnis", "Due Diligence"],
      price: "Mulai dari Rp 5.000.000",
      popular: true,
    },
    {
      icon: Gavel,
      title: "Litigasi",
      description:
        "Representasi hukum di pengadilan untuk berbagai jenis sengketa perdata dan pidana dengan track record terbaik.",
      features: ["Sengketa Bisnis", "Perkara Pidana", "Arbitrase", "Mediasi", "Banding & Kasasi"],
      price: "Mulai dari Rp 10.000.000",
      popular: false,
    },
    {
      icon: FileText,
      title: "Kontrak & Perjanjian",
      description: "Penyusunan, review, dan negosiasi berbagai jenis kontrak dan perjanjian bisnis yang komprehensif.",
      features: ["Kontrak Kerja", "Perjanjian Bisnis", "MOU", "Legal Review", "Negosiasi Kontrak"],
      price: "Mulai dari Rp 2.500.000",
      popular: false,
    },
    {
      icon: Home,
      title: "Hukum Properti",
      description:
        "Layanan hukum terkait properti, tanah, dan real estate untuk individu dan perusahaan dengan jaminan legal.",
      features: ["Jual Beli Properti", "Sertifikat Tanah", "Sengketa Tanah", "Due Diligence", "PPJB & AJB"],
      price: "Mulai dari Rp 3.000.000",
      popular: false,
    },
    {
      icon: Users,
      title: "Hukum Keluarga",
      description:
        "Konsultasi dan representasi untuk masalah hukum keluarga dan perkawinan dengan pendekatan personal.",
      features: ["Perceraian", "Hak Asuh Anak", "Waris", "Adopsi", "Perjanjian Pranikah"],
      price: "Mulai dari Rp 4.000.000",
      popular: false,
    },
    {
      icon: Shield,
      title: "Hukum Pidana",
      description: "Pembelaan dan konsultasi untuk berbagai kasus pidana dengan pendekatan profesional dan strategis.",
      features: ["Pembelaan Pidana", "Konsultasi Hukum", "Pendampingan", "Legal Advice", "Praperadilan"],
      price: "Mulai dari Rp 7.500.000",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Layanan</span>
            <span className="text-gradient-blue"> Unggulan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih layanan hukum yang sesuai dengan kebutuhan Anda dengan harga yang transparan dan kompetitif
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-yellow-500 text-black font-semibold px-4 py-1">Paling Populer</Badge>
                </div>
              )}

              <Card
                className={`h-full hover:shadow-2xl transition-all duration-300 border-0 group hover:-translate-y-2 ${
                  service.popular ? "ring-2 ring-yellow-400 bg-gradient-to-br from-yellow-50 to-white" : "bg-white"
                }`}
              >
                <CardHeader className="space-y-4 pb-4">
                  <div
                    className={`p-4 rounded-xl w-fit ${service.popular ? "bg-yellow-100" : "bg-blue-50"} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`h-8 w-8 ${service.popular ? "text-yellow-600" : "text-blue-600"}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-center space-y-4">
                      <div className={`text-2xl font-bold ${service.popular ? "text-yellow-600" : "text-blue-600"}`}>
                        {service.price}
                      </div>
                      <Button
                        asChild
                        className={`w-full ${service.popular ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "gradient-blue text-white"} group/btn`}
                      >
                        <Link href="/contact">
                          Konsultasi Sekarang
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">Butuh layanan khusus atau paket kustomisasi?</p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
          >
            <Link href="/contact">Hubungi Kami untuk Penawaran Khusus</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
