import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login Admin - HSS Partners Law Firm | Portal Administrasi",
  description:
    "Portal login admin HSS Partners Law Firm. Akses khusus untuk tim internal dalam mengelola konten website, berita, dan administrasi firma hukum.",
  keywords: "login admin hss partners, portal admin law firm, administrasi firma hukum, akses internal",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Login Admin - HSS Partners Law Firm",
    description: "Portal administrasi khusus tim internal HSS Partners",
    url: "https://hssplawfirm.com/login",
  },
  alternates: {
    canonical: "https://hssplawfirm.com/login",
  },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
