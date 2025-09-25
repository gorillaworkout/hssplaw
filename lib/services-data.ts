import { 
  Gavel, 
  Building2, 
  Scale, 
  Home, 
  Users, 
  FileText, 
  MessageCircle, 
  Shield, 
  Briefcase 
} from "lucide-react"

export const servicesData = [
  {
    icon: Gavel,
    title: "Litigasi & Sengketa",
    description: "Representasi hukum di pengadilan untuk berbagai jenis sengketa perdata dan pidana dengan track record terbaik.",
    features: ["Hukum Perdata & Komersial", "Hukum Pidana (Umum & Khusus)", "Tata Usaha Negara (TUN)", "Arbitrase & Alternatif Penyelesaian Sengketa (APS)"],
    popular: true,
  },
  {
    icon: Building2,
    title: "Hukum Korporasi & Komersial",
    description: "Konsultasi hukum bisnis, pendirian perusahaan, merger & akuisisi, dan kepatuhan korporasi dengan standar profesional.",
    features: ["Pendirian dan Pengurusan Perusahaan", "Kontrak dan Perjanjian Bisnis", "Merger, Akuisisi, Restrukturisasi, Joint Venture", "RUPS"],
    popular: false,
  },
  {
    icon: Scale,
    title: "Hukum Ketenagakerjaan",
    description: "Konsultasi dan representasi untuk masalah hukum ketenagakerjaan dan hubungan industrial.",
    features: ["Hubungan Industrial & Negosiasi Bipartit", "PHK dan Perselisihan Ketenagakerjaan", "Penyusunan & Evaluasi Perjanjian Kerja Perusahaan"],
    popular: false,
  },
  {
    icon: Home,
    title: "Hukum Pertanahan & Properti",
    description: "Layanan hukum terkait properti, tanah, dan real estate untuk individu dan perusahaan dengan jaminan legal.",
    features: ["Jual Beli, Sewa, dan Pengembangan Properti", "Sengketa Lahan dan Sertifikasi", "Eksekusi & Perlawanan Eksekusi", "Lelang"],
    popular: false,
  },
  {
    icon: Users,
    title: "Hukum Keluarga & Waris",
    description: "Konsultasi dan representasi untuk masalah hukum keluarga dan perkawinan dengan pendekatan personal.",
    features: ["Perceraian & Hak Asuh Anak", "Sengketa Waris & Wasiat", "Pembagian Harta Bersama / Gono Gini"],
    popular: false,
  },
  {
    icon: FileText,
    title: "Legal Due Diligence / Legal Opinion",
    description: "Pemeriksaan hukum menyeluruh untuk investasi dan pembiayaan dengan pendapat hukum tertulis.",
    features: ["Pemeriksaan Hukum Untuk Investasi dan Pembiayaan", "Pendapat Hukum Tertulis (Legal Opinion)", "Review & Drafting Kontrak", "Advokasi Preventif"],
    popular: false,
  },
  {
    icon: MessageCircle,
    title: "Konsultasi & Pendampingan Hukum",
    description: "Layanan konsultasi hukum berkelanjutan dan pendampingan untuk berbagai kebutuhan hukum.",
    features: ["Retainer Hukum Bulanan", "Review Dokumen Hukum", "Pelatihan Hukum Untuk Perusahaan"],
    popular: false,
  },
  {
    icon: Shield,
    title: "Arbitrase & Mediasi",
    description: "Penyelesaian sengketa melalui arbitrase dan mediasi sebagai alternatif dari proses pengadilan.",
    features: ["Pemeriksaan Hukum Untuk Investasi dan Pembiayaan", "Pendapat Hukum Tertulis (Legal Opinion)", "Review & Drafting Kontrak", "Advokasi Preventif"],
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Mediasi Perbankan & Lelang Hak Tanggungan",
    description: "Layanan mediasi khusus untuk perbankan dan lelang hak tanggungan dengan pendekatan profesional.",
    features: ["Rescheduling (Penjadwalan Ulang)", "Reconditioning (Persyaratan Kembali)", "Restructuring (Penataan Kembali)", "Lelang Hak Tanggungan"],
    popular: false,
  },
  {
    icon: Scale,
    title: "Somasi",
    description: "Penyusunan dan pengiriman surat somasi resmi untuk penyelesaian sengketa secara damai.",
    features: ["Penyusunan dan Pengiriman Surat Somasi Resmi", "Klarifikasi dan Negosiasi dengan Pihak Terkait", "Upaya Penyelesaian Sengketa Secara Damai"],
    popular: false,
  },
]

// Data untuk form dan filter (versi singkat)
export const serviceCategories = [
  "Hukum Korporasi & Komersial",
  "Litigasi & Sengketa", 
  "Hukum Ketenagakerjaan",
  "Hukum Pertanahan & Properti",
  "Hukum Keluarga & Waris",
  "Legal Due Diligence / Legal Opinion",
  "Konsultasi & Pendampingan Hukum",
  "Arbitrase & Mediasi",
  "Mediasi Perbankan & Lelang Hak Tanggungan",
  "Somasi",
  "Berita Umum",
]

// Data untuk section homepage (versi singkat untuk preview)
export const servicesPreview = [
  {
    icon: Building2,
    title: "Hukum Korporasi & Komersial",
    description: "Konsultasi hukum bisnis, pendirian perusahaan, merger & akuisisi, dan kepatuhan korporasi.",
    features: ["Pendirian dan Pengurusan Perusahaan", "Merger, Akuisisi, Restrukturisasi", "Kontrak dan Perjanjian Bisnis", "RUPS"],
  },
  {
    icon: Gavel,
    title: "Litigasi & Sengketa",
    description: "Representasi hukum di pengadilan untuk berbagai jenis sengketa perdata dan pidana.",
    features: ["Hukum Perdata & Komersial", "Hukum Pidana (Umum & Khusus)", "Tata Usaha Negara (TUN)", "Arbitrase & APS"],
  },
  {
    icon: FileText,
    title: "Legal Due Diligence",
    description: "Pemeriksaan hukum menyeluruh untuk investasi dan pembiayaan dengan pendapat hukum tertulis.",
    features: ["Pemeriksaan Hukum Investasi", "Pendapat Hukum Tertulis", "Review & Drafting Kontrak", "Advokasi Preventif"],
  },
  {
    icon: Home,
    title: "Hukum Pertanahan & Properti",
    description: "Layanan hukum terkait properti, tanah, dan real estate untuk individu dan perusahaan.",
    features: ["Jual Beli, Sewa Properti", "Sengketa Lahan dan Sertifikasi", "Eksekusi & Perlawanan Eksekusi", "Lelang"],
  },
  {
    icon: Users,
    title: "Hukum Keluarga & Waris",
    description: "Konsultasi dan representasi untuk masalah hukum keluarga dan perkawinan.",
    features: ["Perceraian & Hak Asuh Anak", "Sengketa Waris & Wasiat", "Pembagian Harta Bersama"],
  },
  {
    icon: Shield,
    title: "Arbitrase & Mediasi",
    description: "Penyelesaian sengketa melalui arbitrase dan mediasi sebagai alternatif dari proses pengadilan.",
    features: ["Arbitrase", "Mediasi", "Negosiasi", "Penyelesaian Sengketa Alternatif"],
  },
]
