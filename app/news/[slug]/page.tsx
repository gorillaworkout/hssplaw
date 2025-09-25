"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Copy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getNewsBySlugFromFirestore, getRelatedNewsFromFirestore } from "@/lib/firestore"

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

export default function NewsDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState<NewsItem | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  // Social sharing functions
  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(article?.title || '')
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`
    window.open(facebookUrl, '_blank', 'width=600,height=400')
  }

  const shareToTwitter = () => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(article?.title || '')
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
    window.open(twitterUrl, '_blank', 'width=600,height=400')
  }

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(article?.title || '')
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`
    window.open(linkedinUrl, '_blank', 'width=600,height=400')
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      // You could add a toast notification here
      alert('Link berhasil disalin ke clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  useEffect(() => {
    const loadArticle = async () => {
      // Await params untuk Next.js 15 compatibility
      const resolvedParams = await Promise.resolve(params)
      if (!resolvedParams.slug) return
      
      try {
        setIsLoading(true)
        setNotFound(false)
        
        // Get article by slug
        const articleData = await getNewsBySlugFromFirestore(resolvedParams.slug as string)
        
        if (!articleData) {
          setNotFound(true)
          return
        }

        // Transform article data
        const transformedArticle: NewsItem = {
          id: articleData.id,
          title: (articleData as any).title || '',
          excerpt: (articleData as any).excerpt || '',
          content: (articleData as any).content || '',
          category: (articleData as any).category || 'Uncategorized',
          author: (articleData as any).author || 'Anonymous',
          publishedAt: (articleData as any).publishedAt instanceof Date 
            ? (articleData as any).publishedAt.toISOString() 
            : (articleData as any).publishedAt?.toDate?.()?.toISOString?.() || new Date().toISOString(),
          imageUrl: (articleData as any).imageUrl || '',
          slug: (articleData as any).slug || articleData.id
        }

        setArticle(transformedArticle)

        // Get related articles
        try {
          const relatedData = await getRelatedNewsFromFirestore(
            transformedArticle.slug, 
            transformedArticle.category, 
            2
          )
          
          const transformedRelated = relatedData.map((item: any) => ({
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
          
          setRelatedArticles(transformedRelated)
        } catch (relatedError) {
          console.error("Error loading related articles:", relatedError)
          setRelatedArticles([])
        }

      } catch (error) {
        console.error("Error loading article:", error)
        setNotFound(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadArticle()
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

  if (notFound) {
    return (
      <div className="min-h-screen bg-gray-50">
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
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-gray-600 mb-8">
              Artikel yang Anda cari tidak dapat ditemukan. Mungkin artikel telah dihapus atau URL tidak valid.
            </p>
            <Button asChild>
              <Link href="/news">Lihat Semua Berita</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return null
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
                    <span>5 menit baca</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Share2 className="h-4 w-4" />
                    <span>Bagikan:</span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-blue-600 hover:bg-blue-50"
                      onClick={shareToFacebook}
                      title="Bagikan ke Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-blue-400 hover:bg-blue-50"
                      onClick={shareToTwitter}
                      title="Bagikan ke Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-blue-700 hover:bg-blue-50"
                      onClick={shareToLinkedIn}
                      title="Bagikan ke LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-gray-600 hover:bg-gray-50"
                      onClick={copyToClipboard}
                      title="Salin link"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {article.imageUrl && (
              <div className="relative h-64 md:h-96">
                <Image 
                  src={article.imageUrl || "/placeholder.svg"} 
                  alt={article.title} 
                  fill 
                  className="object-cover"
                  priority
                />
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kategori:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {article.category}
                  </Badge>
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
            {relatedArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge className="bg-blue-600 text-white mb-3">{relatedArticle.category}</Badge>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{relatedArticle.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{relatedArticle.author}</span>
                        <span>{new Date(relatedArticle.publishedAt).toLocaleDateString("id-ID")}</span>
                      </div>
                      <Button asChild variant="ghost" className="text-blue-600 hover:bg-blue-50 p-0">
                        <Link href={`/news/${relatedArticle.slug}`}>Baca Selengkapnya →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">Tidak ada artikel terkait yang ditemukan.</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/news">Lihat Semua Artikel</Link>
                </Button>
              </div>
            )}
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
