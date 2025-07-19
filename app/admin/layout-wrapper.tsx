import type { Metadata } from "next"
import AdminLayoutClient from "./layout-client"

export const metadata: Metadata = {
  title: "Dashboard Admin - HSS Partners Law Firm | Panel Administrasi",
  description:
    "Dashboard administrasi HSS Partners Law Firm untuk mengelola konten website, berita, dan data firma hukum. Akses terbatas untuk tim internal.",
  keywords: "dashboard admin hss partners, panel administrasi law firm, manajemen konten firma hukum",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  openGraph: {
    title: "Dashboard Admin - HSS Partners Law Firm",
    description: "Panel administrasi untuk tim internal HSS Partners",
    url: "https://hssplawfirm.com/admin",
  },
  alternates: {
    canonical: "https://hssplawfirm.com/admin",
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}
