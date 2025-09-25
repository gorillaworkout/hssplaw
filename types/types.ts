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

export interface TeamMember {
  name: string
  position: string
  specialization: string
  experience: string
  education: string
  image: string
  description: string
  achievements: string[]
  languages: string[]
}