"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getNewsFromFirestore } from "@/lib/firestore"

interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  imageUrl?: string
  slug: string
}

export function NewsSection() {
  const [newsArticles, setNewsArticles] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadLatestNews = async () => {
      try {
        setIsLoading(true)
        const newsData = await getNewsFromFirestore()
        
        // Transform dan ambil 3 artikel terbaru
        const transformedNews = newsData
          .map((item: any) => ({
            id: item.id,
            title: item.title || '',
            excerpt: item.excerpt || '',
            content: item.content || '',
            category: item.category || 'Uncategorized',
            author: item.author || 'Anonymous',
            publishedAt: item.publishedAt instanceof Date 
              ? item.publishedAt.toISOString() 
              : item.publishedAt?.toDate?.()?.toISOString?.() || new Date().toISOString(),
            imageUrl: item.imageUrl || '',
            slug: item.slug || item.id
          }))
          .slice(0, 3) // Ambil 3 artikel terbaru
        
        setNewsArticles(transformedNews)
      } catch (error) {
        console.error("Error loading news for home section:", error)
        setNewsArticles([])
      } finally {
        setIsLoading(false)
      }
    }

    loadLatestNews()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Berita & Artikel
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Insight</span>
            <span className="text-gradient-blue"> Hukum</span>
            <br />
            <span className="text-gradient-gold">Terkini</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan informasi terbaru seputar perkembangan hukum, tips praktis, dan analisis mendalam dari para ahli
            hukum kami.
          </p>
        </motion.div>

        {/* News Grid */}
        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <CardContent className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : newsArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={article.imageUrl || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700">{article.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.publishedAt).toLocaleDateString("id-ID")}</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between text-blue-600 hover:bg-blue-50 group/btn"
                    >
                      <Link href={`/news/${article.slug}`}>
                        Baca Selengkapnya
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          // Empty state
          <div className="text-center py-12 mb-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada artikel</h3>
              <p className="text-gray-600 mb-4">
                Artikel terbaru akan ditampilkan di sini. Silakan cek kembali nanti.
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="gradient-blue text-white hover:opacity-90">
            <Link href="/news">
              Lihat Semua Berita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
