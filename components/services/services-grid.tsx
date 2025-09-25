"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { servicesData } from "@/lib/services-data"

export function ServicesGrid() {
  const services = servicesData

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Layanan</span>
            <span className="text-gradient-blue"> Hukum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih layanan hukum yang sesuai dengan kebutuhan Anda dengan tim advokat berpengalaman dan profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-yellow-500 text-black font-semibold px-4 py-1">Populer</Badge>
                </div>
              )}

              <Card
                className={`h-full hover:shadow-2xl transition-all duration-300 border-0 group hover:-translate-y-2 flex flex-col ${
                  service.popular ? "ring-2 ring-yellow-400 bg-gradient-to-br from-yellow-50 to-white" : "bg-white"
                }`}
              >
                <CardHeader className="space-y-4 pb-4 flex-shrink-0">
                  <div
                    className={`p-4 rounded-xl w-fit ${service.popular ? "bg-yellow-100" : "bg-blue-50"} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`h-8 w-8 ${service.popular ? "text-yellow-600" : "text-blue-600"}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">Layanan Meliputi:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 mt-auto">
                    <Button
                      asChild
                      className={`w-full ${service.popular ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "gradient-blue text-white"} group/btn`}
                    >
                      <Link href="/contact">
                        Konsultasi Gratis
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Butuh layanan khusus atau konsultasi lebih lanjut?</p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
          >
            <Link href="/contact">Hubungi Kami untuk Konsultasi</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
