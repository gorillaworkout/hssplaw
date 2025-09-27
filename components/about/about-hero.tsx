"use client"

import { Award, Users, Target } from "lucide-react"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <Image src="/hssnotext.png" alt="HSS Partners Logo" width={50} height={100} />
              Tentang HSS Partners
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Firma Hukum</span>
              <br />
              <span className="text-gradient-blue">Terpercaya</span>
              <span className="text-gradient-gold"> Sejak 2025</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kantor Hukum Habibullah Sahura Sudana & Partners (HSSP) yang
              didirikan oleh para profesional hukum berpengalaman yang memiliki
              komitmen tinggi terhadap penegakan hukum dan keadilan.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-full w-fit mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Keunggulan</h3>
              <p className="text-gray-600">
                Standar layanan hukum internasional dengan pendekatan yang personal dan profesional
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-full w-fit mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Tim Ahli</h3>
              <p className="text-gray-600">
                Didukung oleh tim advokat berpengalaman dengan keahlian di berbagai bidang hukum
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full w-fit mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fokus Klien</h3>
              <p className="text-gray-600">
                Mengutamakan kepentingan klien dengan solusi hukum yang efektif dan efisien
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
