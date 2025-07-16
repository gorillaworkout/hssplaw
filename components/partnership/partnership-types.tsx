"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Users, Globe, Briefcase, ArrowRight } from "lucide-react"

export function PartnershipTypes() {
  const partnershipTypes = [
    {
      icon: Building,
      title: "Kemitraan Firma",
      description: "Bergabung sebagai mitra dalam pengembangan praktik hukum dengan sharing profit dan tanggung jawab.",
      benefits: ["Profit Sharing", "Brand Recognition", "Shared Resources", "Joint Marketing"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Referral Partner",
      description: "Program rujukan klien dengan komisi menarik untuk setiap klien yang berhasil dirujuk.",
      benefits: ["Komisi Kompetitif", "Support Marketing", "Training Program", "Long-term Partnership"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Globe,
      title: "International Collaboration",
      description: "Kerjasama dengan firma hukum internasional untuk menangani kasus lintas negara.",
      benefits: ["Global Network", "Cross-border Cases", "Knowledge Exchange", "International Standards"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Briefcase,
      title: "Corporate Partnership",
      description: "Kemitraan strategis dengan perusahaan untuk menyediakan layanan hukum in-house.",
      benefits: ["Retainer Agreement", "Priority Service", "Cost Efficiency", "Legal Compliance"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
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
            <span className="text-gray-900">Jenis</span>
            <span className="text-gradient-blue"> Kerjasama</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai model kemitraan yang dapat disesuaikan dengan kebutuhan dan tujuan bisnis Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group hover:-translate-y-2">
                <CardHeader className="space-y-4">
                  <div
                    className={`p-4 rounded-xl w-fit ${type.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <type.icon className={`h-8 w-8 ${type.color}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">{type.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Keuntungan:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full mr-3 ${type.color.replace("text-", "bg-")}`}></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="ghost" className={`w-full justify-between ${type.color} hover:bg-gray-50 group/btn`}>
                    Pelajari Lebih Lanjut
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
