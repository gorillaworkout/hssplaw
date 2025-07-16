"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data - in real app, this would come from your database
const mockArticle = {
  id: "1",
  title: "Perubahan Regulasi Hukum Korporasi 2024: Dampak dan Strategi Adaptasi",
  content: `
    <h2>Pendahuluan</h2>
    <p>Tahun 2024 menandai era baru dalam regulasi hukum korporasi di Indonesia. Pemerintah telah mengeluarkan serangkaian peraturan baru yang akan berdampak signifikan terhadap cara perusahaan beroperasi dan menjalankan tata kelola korporasi.</p>
    
    <h2>Perubahan Utama dalam Regulasi</h2>
    <p>Beberapa perubahan kunci yang perlu diperhatikan oleh perusahaan meliputi:</p>
    <ul>
      <li><strong>Transparansi Keuangan:</strong> Peningkatan standar pelaporan keuangan dengan implementasi sistem digital yang terintegrasi.</li>
      <li><strong>Tata Kelola Perusahaan:</strong> Penguatan peran komisaris independen dan komite audit dalam pengawasan perusahaan.</li>
      <li><strong>Perlindungan Stakeholder:</strong> Regulasi baru yang memberikan perlindungan lebih baik bagi pemegang saham minoritas dan kreditur.</li>
      <li><strong>Compliance Digital:</strong> Kewajiban implementasi sistem compliance berbasis teknologi untuk monitoring real-time.</li>
    </ul>

    <h2>Dampak Terhadap Perusahaan</h2>
    <p>Perubahan regulasi ini akan membawa dampak yang luas bagi perusahaan, baik dari segi operasional maupun strategis:</p>
    
    <h3>1. Aspek Operasional</h3>
    <p>Perusahaan perlu melakukan penyesuaian dalam sistem internal, termasuk upgrade sistem IT, pelatihan karyawan, dan restrukturisasi departemen compliance.</p>
    
    <h3>2. Aspek Keuangan</h3>
    <p>Investasi tambahan diperlukan untuk memenuhi standar baru, namun dalam jangka panjang akan meningkatkan efisiensi dan mengurangi risiko hukum.</p>

    <h2>Strategi Adaptasi yang Direkomendasikan</h2>
    <p>HSS Partners Law Firm merekomendasikan strategi berikut untuk menghadapi perubahan regulasi:</p>
    
    <ol>
      <li><strong>Assessment Komprehensif:</strong> Lakukan evaluasi menyeluruh terhadap kondisi compliance saat ini.</li>
      <li><strong>Roadmap Implementation:</strong> Susun rencana implementasi bertahap dengan timeline yang realistis.</li>
      <li><strong>Training & Development:</strong> Investasi dalam pelatihan tim internal untuk memahami regulasi baru.</li>
      <li><strong>Technology Upgrade:</strong> Implementasi sistem teknologi yang mendukung compliance otomatis.</li>
      <li><strong>Legal Advisory:</strong> Konsultasi berkelanjutan dengan ahli hukum untuk memastikan compliance optimal.</li>
    </ol>

    <h2>Kesimpulan</h2>
    <p>Perubahan regulasi hukum korporasi 2024 merupakan tantangan sekaligus peluang bagi perusahaan untuk meningkatkan standar tata kelola dan daya saing. Dengan persiapan yang matang dan strategi yang tepat, perusahaan dapat tidak hanya memenuhi compliance requirements tetapi juga memanfaatkan perubahan ini untuk pertumbuhan jangka panjang.</p>
    
    <p>Tim HSS Partners Law Firm siap membantu perusahaan Anda dalam menghadapi transisi ini dengan layanan konsultasi komprehensif dan solusi hukum yang inovatif.</p>
  `,
  excerpt:
    "Analisis mendalam tentang perubahan regulasi terbaru yang mempengaruhi dunia korporasi di Indonesia dan strategi adaptasi yang diperlukan.",
  category: "Hukum Korporasi",
  author: "Habibullah, S.H., M.H.",
  publishedAt: "2024-01-15",
  image: "/placeholder.svg?height=400&width=800",
  slug: "perubahan-regulasi-hukum-korporasi-2024",
  readTime: "8 menit",
  tags: ["Regulasi", "Korporasi", "Compliance", "2024"],
}

export default function NewsDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState(mockArticle)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [params.slug])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/news">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Berita
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Article Header */}
            <div className="p-8 border-b">
              <div className="space-y-4">
                <Badge className="bg-blue-600 text-white">{article.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{article.title}</h1>
                <p className="text-xl text-gray-600">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <span>{article.readTime} baca</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Share2 className="h-4 w-4" />
                    <span>Bagikan:</span>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-50">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-blue-700 hover:bg-blue-50">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {article.image && (
              <div className="relative h-64 md:h-96">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
            )}

            {/* Article Body */}
            <div className="p-8">
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-blue-600 border-blue-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="bg-green-600 text-white mb-3">Kontrak Bisnis</Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tips Menghindari Sengketa Kontrak Bisnis</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Panduan praktis untuk menyusun kontrak bisnis yang solid dan menghindari potensi sengketa...
                  </p>
                  <Button asChild variant="ghost" className="text-blue-600 hover:bg-blue-50 p-0">
                    <Link href="/news/tips-menghindari-sengketa-kontrak-bisnis">Baca Selengkapnya →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="bg-purple-600 text-white mb-3">Hukum Keluarga</Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hak dan Kewajiban dalam Hukum Keluarga</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Memahami hak dan kewajiban suami istri dalam perkawinan menurut hukum Indonesia...
                  </p>
                  <Button asChild variant="ghost" className="text-blue-600 hover:bg-blue-50 p-0">
                    <Link href="/news/hak-dan-kewajiban-dalam-hukum-keluarga">Baca Selengkapnya →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Butuh Konsultasi Hukum?</h3>
                <p className="text-blue-100 mb-6">
                  Tim ahli hukum HSS Partners siap membantu menyelesaikan masalah hukum Anda dengan solusi yang tepat
                  dan profesional.
                </p>
                <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                  <Link href="/contact">Konsultasi Gratis Sekarang</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
