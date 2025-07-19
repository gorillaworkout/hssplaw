import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoadingProvider } from "@/components/layout/loading-provider"
import { GoogleAnalytics } from "@/components/analytics"
import { WebVitals } from "@/components/web-vitals"
import { Breadcrumb } from "@/components/breadcrumb"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HSS Partners Law Firm - Habibullah Sahura Sudana Partners | Firma Hukum Terpercaya Indonesia",
  description:
    "Firma hukum terpercaya HSS Partners menyediakan layanan hukum profesional di Indonesia. Konsultasi hukum, litigasi, hukum bisnis, hukum perusahaan, dan berbagai layanan hukum lainnya dengan pengalaman puluhan tahun.",
  keywords: "law firm indonesia, firma hukum jakarta, konsultasi hukum, advokat indonesia, pengacara profesional, hukum bisnis, litigasi, hukum perusahaan, jasa hukum, HSS Partners, Habibullah Sahura Sudana",
  authors: [{ name: "HSS Partners Law Firm" }, { name: "Habibullah Sahura Sudana Partners" }],
  creator: "HSS Partners Law Firm",
  publisher: "HSS Partners Law Firm",
  metadataBase: new URL("https://hssplawfirm.com"),
  alternates: {
    canonical: "https://hssplawfirm.com",
  },
  openGraph: {
    title: "HSS Partners Law Firm - Firma Hukum Terpercaya Indonesia",
    description: "Firma hukum profesional dengan pengalaman puluhan tahun. Layanan konsultasi hukum, litigasi, hukum bisnis, dan hukum perusahaan terbaik di Indonesia.",
    url: "https://hssplawfirm.com",
    siteName: "HSS Partners Law Firm",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/hsslogo.png",
        width: 1200,
        height: 630,
        alt: "HSS Partners Law Firm - Firma Hukum Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSS Partners Law Firm - Firma Hukum Terpercaya Indonesia",
    description: "Firma hukum profesional dengan layanan konsultasi hukum, litigasi, dan hukum bisnis terbaik di Indonesia.",
    images: ["/hsslogo.png"],
    creator: "@hsspartners",
    site: "@hsspartners",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/hssnotext.png", sizes: "32x32", type: "image/png" },
      { url: "/hssnotext.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/hssnotext.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/hssnotext.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code-here",
  },
  category: "Legal Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "HSS Partners Law Firm",
    "alternateName": "Habibullah Sahura Sudana Partners",
    "description": "Firma hukum profesional yang menyediakan layanan konsultasi hukum, litigasi, hukum bisnis, dan hukum perusahaan di Indonesia",
    "url": "https://hssplawfirm.com",
    "logo": "https://hssplawfirm.com/hsslogo.png",
    "image": "https://hssplawfirm.com/hsslogo.png",
    "telephone": "+62-21-XXXXXXX",
    "email": "info@hssplawfirm.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta"
    },
    "areaServed": "Indonesia",
    "serviceType": [
      "Konsultasi Hukum",
      "Litigasi",
      "Hukum Bisnis",
      "Hukum Perusahaan"
    ]
  }

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Indonesian" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Jakarta" />
        <link rel="canonical" href="https://hssplawfirm.com" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics ga_id="G-XXXXXXXXXX" />
        <WebVitals />
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
