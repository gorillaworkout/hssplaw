"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, FileSearch, Gavel, CheckCircle, Scale, Users } from "lucide-react"

export function ServicesProcess() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Konsultasi Awal",
      description: "Diskusi mendalam tentang masalah hukum Anda dengan tim advokat berpengalaman",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FileSearch,
      title: "Analisis & Penelitian",
      description: "Penelitian hukum menyeluruh, studi kasus, dan penyusunan strategi terbaik",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Scale,
      title: "Penyusunan Dokumen",
      description: "Penyusunan dokumen hukum, kontrak, dan perjanjian yang sesuai dengan kebutuhan",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Gavel,
      title: "Representasi Hukum",
      description: "Representasi di pengadilan, negosiasi, dan implementasi solusi hukum",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Users,
      title: "Pendampingan",
      description: "Pendampingan berkelanjutan dan konsultasi untuk memastikan kepuasan klien",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: CheckCircle,
      title: "Penyelesaian",
      description: "Monitoring hasil, evaluasi, dan follow-up untuk memastikan keberhasilan",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Proses</span>
            <span className="text-gradient-gold"> Konsultasi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metodologi profesional yang terbukti untuk memberikan solusi hukum terbaik bagi setiap klien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div
                      className={`p-4 rounded-full w-fit mx-auto ${step.bgColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-600">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
