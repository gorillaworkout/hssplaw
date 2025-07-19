import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Kontak HSS Partners - Konsultasi Hukum GRATIS 24/7 | Hubungi Sekarang!",
  description:
    "Konsultasi hukum GRATIS dengan HSS Partners! Hubungi kami 24/7 di Jakarta Pusat. Tim advokat siap membantu masalah hukum Anda. Telepon, WhatsApp, atau kunjungi kantor kami. Respon cepat dalam 1 jam!",
  keywords: "konsultasi hukum gratis, kontak advokat jakarta, telepon pengacara 24 jam, alamat kantor hukum, whatsapp lawyer, konsultasi gratis hss partners, hubungi pengacara indonesia",
  openGraph: {
    title: "Kontak HSS Partners - Konsultasi Hukum GRATIS 24/7",
    description: "Konsultasi hukum GRATIS! Hubungi tim advokat kami 24/7. Respon cepat dalam 1 jam!",
    url: "https://hssplawfirm.com/contact",
    images: [
      {
        url: "/hsslogo.png",
        width: 1200,
        height: 630,
        alt: "Kontak HSS Partners Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak HSS Partners - Konsultasi Hukum GRATIS 24/7",
    description: "Konsultasi hukum GRATIS! Hubungi tim advokat kami 24/7",
    images: ["/hsslogo.png"],
  },
  alternates: {
    canonical: "https://hssplawfirm.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}
