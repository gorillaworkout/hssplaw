"use client"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NewsHero } from "@/components/news/news-hero"
import { NewsGrid } from "@/components/news/news-grid"
import { NewsFilters } from "@/components/news/news-filters"
import { getNewsFromFirestore } from "@/lib/firestore"
import { setArticles, setLoading } from "@/lib/slices/newsSlice"
import type { RootState, AppDispatch } from "@/lib/store"

export default function NewsPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { articles, isLoading } = useSelector((state: RootState) => state.news)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const loadNews = async () => {
      try {
        dispatch(setLoading(true))
        const newsData = await getNewsFromFirestore()
        dispatch(setArticles(newsData))
      } catch (error) {
        console.error("Error loading news:", error)
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
