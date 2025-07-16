import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Kontak - HSS Partners Law Firm",
  description:
    "Hubungi HSS Partners Law Firm untuk konsultasi hukum gratis. Kantor kami berlokasi di Jakarta Pusat dengan layanan 24/7.",
  keywords: "kontak hss partners, konsultasi hukum, alamat kantor, telepon advokat",
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
