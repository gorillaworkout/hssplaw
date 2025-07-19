"use client"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NewsHero } from "@/components/news/news-hero"
import { NewsGrid } from "@/components/news/news-grid"
import { NewsFilters } from "@/components/news/news-filters"
import { getNewsFromFirestore } from "@/lib/firestore"
import { setArticles, setLoading } from "@/lib/slices/newsSlice"
import type { RootState, AppDispatch } from "@/lib/store"
import type { NewsItem } from "@/types/types"

export default function NewsPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { articles, isLoading } = useSelector((state: RootState) => state.news)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const loadNews = async () => {
      try {
        dispatch(setLoading(true))
        
        // Fetch data directly from Firestore
        const newsData = await getNewsFromFirestore()
        const transformedNewsData = newsData.map((item: any) => ({
          id: item.id,
          title: item.title || '',
          excerpt: item.excerpt || '',
          content: item.content || '',
          category: item.category || 'uncategorized',
          author: item.author || 'Anonymous',
          publishedAt: item.publishedAt instanceof Date 
            ? item.publishedAt.toISOString() 
            : item.publishedAt?.toDate?.()?.toISOString?.() || new Date().toISOString(),
          imageUrl: item.imageUrl || '',
          slug: item.slug || item.id
        }))
        
        dispatch(setArticles(transformedNewsData as NewsItem[]))
      } catch (error) {
        console.error("Error loading news from Firestore:", error)
        // Show empty state instead of mock data
        dispatch(setArticles([]))
      } finally {
        dispatch(setLoading(false))
      }
    }

    loadNews()
  }, [dispatch])

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      <NewsHero />
      <div className="container mx-auto px-4 py-12">
        <NewsFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <NewsGrid articles={filteredArticles} isLoading={isLoading} />
      </div>
    </div>
  )
}
