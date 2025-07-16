import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoadingProvider } from "@/components/layout/loading-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HSS Partners Law Firm - Habibullah Sahura Sudana Partners",
  description:
    "Firma hukum terpercaya dengan layanan hukum profesional. Habibullah Sahura Sudana Partners Law Firm menyediakan konsultasi hukum, litigasi, dan berbagai layanan hukum lainnya.",
  keywords: "law firm, firma hukum, konsultasi hukum, advokat, pengacara, hukum bisnis, litigasi",
  authors: [{ name: "HSS Partners Law Firm" }],
  openGraph: {
    title: "HSS Partners Law Firm - Habibullah Sahura Sudana Partners",
    description: "Firma hukum terpercaya dengan layanan hukum profesional",
    url: "https://hssplawfirm.com",
    siteName: "HSS Partners Law Firm",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HSS Partners Law Firm",
    description: "Firma hukum terpercaya dengan layanan hukum profesional",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Providers>
          <LoadingProvider>
            <div className="min-h-screen bg-white">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </LoadingProvider>
        </Providers>
      </body>
    </html>
  )
}
