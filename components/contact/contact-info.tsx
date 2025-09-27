"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { PhoneNumber, PHONE_NUMBERS } from "@/components/ui/phone-number"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: ["Jl. Dr. Wahidin Sudirohusodo no. 680, Kebomas, Kab. Gresik Jawa Timur", "Gresik, Jawa Timur", "Indonesia"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Phone,
      title: "Telepon",
      details: [PHONE_NUMBERS.primary, PHONE_NUMBERS.secondary, PHONE_NUMBERS.tertiary],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@hssplawfirm.com", "contact@hssplawfirm.com", "legal@hssplawfirm.com"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00", "Minggu: Tutup"],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900">Informasi Kontak</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactDetails.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className={`p-3 rounded-lg w-fit ${info.bgColor}`}>
                  <info.icon className={`h-6 w-6 ${info.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="text-sm text-gray-600">
                            {info.title === "Telepon" ? (
                              <PhoneNumber 
                                phone={detail} 
                                variant="both" 
                                size="sm"
                                className="justify-start p-0 h-auto"
                                textClassName="text-gray-600"
                              />
                            ) : (
                              <p>{detail}</p>
                            )}
                          </div>
                        ))}
                      </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
