"use client"

import Link from "next/link"
import Image from "next/image"
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/hssnotext.png" alt="HSS Partners Logo" width={50} height={100} />
              <div>
                <h3 className="text-lg font-bold">HSS Partners</h3>
                <p className="text-sm text-gray-400">Law Firm</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Habibullah Sahura Sudana Partners Law Firm adalah firma hukum terpercaya yang menyediakan layanan hukum
              profesional dengan integritas tinggi.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gradient-gold">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Jasa Hukum
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Tim Kami
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  Berita
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gradient-gold">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/corporate" className="text-gray-400 hover:text-white transition-colors">
                  Hukum Korporasi
                </Link>
              </li>
              <li>
                <Link href="/services/litigation" className="text-gray-400 hover:text-white transition-colors">
                  Litigasi
                </Link>
              </li>
              <li>
                <Link href="/services/contract" className="text-gray-400 hover:text-white transition-colors">
                  Kontrak Bisnis
                </Link>
              </li>
              <li>
                <Link href="/services/property" className="text-gray-400 hover:text-white transition-colors">
                  Properti
                </Link>
              </li>
              <li>
                <Link href="/services/family" className="text-gray-400 hover:text-white transition-colors">
                  Hukum Keluarga
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gradient-gold">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Jl. Sudirman No. 123
                    <br />
                    Jakarta Pusat 10220
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <p className="text-gray-400 text-sm">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="text-gray-400 text-sm">info@hssplawfirm.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Habibullah Sahura Sudana Partners Law Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
