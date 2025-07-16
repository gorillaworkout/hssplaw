"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Gavel, FileText, Home, Users, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Hukum Korporasi",
      description: "Konsultasi hukum bisnis, pendirian perusahaan, merger & akuisisi, dan kepatuhan korporasi.",
      features: ["Pendirian PT/CV", "Merger & Akuisisi", "Kepatuhan Regulasi", "Kontrak Bisnis"],
    },
    {
      icon: Gavel,
      title: "Litigasi",
      description: "Representasi hukum di pengadilan untuk berbagai jenis sengketa perdata dan pidana.",
      features: ["Sengketa Bisnis", "Perkara Pidana", "Arbitrase", "Mediasi"],
    },
    {
      icon: FileText,
      title: "Kontrak & Perjanjian",
      description: "Penyusunan, review, dan negosiasi berbagai jenis kontrak dan perjanjian bisnis.",
      features: ["Kontrak Kerja", "Perjanjian Bisnis", "MOU", "Legal Review"],
    },
    {
      icon: Home,
      title: "Hukum Properti",
      description: "Layanan hukum terkait properti, tanah, dan real estate untuk individu dan perusahaan.",
      features: ["Jual Beli Properti", "Sertifikat Tanah", "Sengketa Tanah", "Due Diligence"],
    },
    {
      icon: Users,
      title: "Hukum Keluarga",
      description: "Konsultasi dan representasi untuk masalah hukum keluarga dan perkawinan.",
      features: ["Perceraian", "Hak Asuh Anak", "Waris", "Adopsi"],
    },
    {
      icon: Shield,
      title: "Hukum Pidana",
      description: "Pembelaan dan konsultasi untuk berbagai kasus pidana dengan pendekatan profesional.",
      features: ["Pembelaan Pidana", "Konsultasi Hukum", "Pendampingan", "Legal Advice"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Layanan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Solusi Hukum</span>
            <br />
            <span className="text-gradient-blue">Komprehensif</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan hukum profesional untuk memenuhi kebutuhan individu, bisnis, dan korporasi
            dengan standar internasional.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
                <CardHeader className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full justify-between text-blue-600 hover:bg-blue-50 group/btn">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="gradient-blue text-white hover:opacity-90">
            <Link href="/services">
              Lihat Semua Layanan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
