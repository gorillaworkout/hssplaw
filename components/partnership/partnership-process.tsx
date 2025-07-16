"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, Handshake, Rocket } from "lucide-react"

export function PartnershipProcess() {
  const steps = [
    {
      icon: FileText,
      title: "Aplikasi",
      description: "Kirimkan proposal kerjasama dan dokumen pendukung yang diperlukan",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Evaluasi",
      description: "Tim kami akan mengevaluasi proposal dan melakukan assessment",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Handshake,
      title: "Negosiasi",
      description: "Diskusi detail mengenai terms, conditions, dan benefit kerjasama",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Rocket,
      title: "Implementasi",
      description: "Penandatanganan kontrak dan mulai menjalankan program kerjasama",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
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
            <span className="text-gray-900">Proses</span>
            <span className="text-gradient-blue"> Kerjasama</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Langkah-langkah mudah untuk memulai kemitraan strategis dengan HSS Partners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group hover:-translate-y-2">
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-green-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
