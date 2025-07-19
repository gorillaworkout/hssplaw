export interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string // Changed from Date to string for consistency
  imageUrl?: string
  slug: string
}