"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Users, Building } from "lucide-react"

export function AboutHistory() {
  const timeline = [
    {
      year: "2025",
      title: "Pendirian Firma",
      description: "HSS Partners Law Firm didirikan dengan visi menjadi firma hukum terdepan di Indonesia",
      icon: Building,
    },
    {
      year: "2025",
      title: "Proyek Pertama",
      description: "Memulai beberapa proyek hukum pertama dengan fokus pada hukum korporasi dan bisnis",
      icon: Users,
    },
    {
      year: "2025",
      title: "Pengembangan Tim",
      description: "Membangun tim ahli hukum berpengalaman dari berbagai bidang spesialisasi",
      icon: Award,
    },
    {
      year: "2025",
      title: "Teknologi Modern",
      description: "Mengimplementasikan teknologi digital modern untuk meningkatkan efisiensi layanan",
      icon: Calendar,
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
            <span className="text-gray-900">Perjalanan</span>
            <span className="text-gradient-blue"> Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Memulai perjalanan dengan dedikasi dan profesionalisme tinggi untuk melayani klien terbaik
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.year}-${index}`}
              className="relative flex items-center mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-800"></div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"}`}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      {index % 2 === 0 ? (
                        <>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <p className="text-blue-600 font-medium">{item.year}</p>
                          </div>
                          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-lg">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-lg">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <p className="text-blue-600 font-medium">{item.year}</p>
                          </div>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
