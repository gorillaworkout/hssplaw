import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface NewsItem {
  id: string
  title: string
  content: string
  excerpt: string
  imageUrl?: string
  author: string
  publishedAt: string
  category: string
  slug: string
}

interface NewsState {
  articles: NewsItem[]
  isLoading: boolean
  error: string | null
}

const initialState: NewsState = {
  articles: [],
  isLoading: false,
  error: null,
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<NewsItem[]>) => {
      state.articles = action.payload
      state.isLoading = false
      state.error = null
    },
    addArticle: (state, action: PayloadAction<NewsItem>) => {
      state.articles.unshift(action.payload)
    },
    updateArticle: (state, action: PayloadAction<NewsItem>) => {
      const index = state.articles.findIndex((article) => article.id === action.payload.id)
      if (index !== -1) {
        state.articles[index] = action.payload
      }
    },
    deleteArticle: (state, action: PayloadAction<string>) => {
      state.articles = state.articles.filter((article) => article.id !== action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export const { setArticles, addArticle, updateArticle, deleteArticle, setLoading, setError } = newsSlice.actions
export default newsSlice.reducer
