"use client"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Plus, Search, Edit, Trash2, Calendar, User, FileText, Upload, X, RefreshCw } from "lucide-react"
import { deleteArticle, updateArticle, setArticles, setLoading } from "@/lib/slices/newsSlice"
import { deleteNewsFromFirestore, updateNewsInFirestore, uploadImageToStorage, getNewsFromFirestore } from "@/lib/firestore"
import type { RootState, AppDispatch } from "@/lib/store"
import type { NewsItem } from "@/types/types"
import Image from "next/image"

// Helper function to serialize Firebase data for Redux
const serializeNewsData = (articles: any[]): NewsItem[] => {
  return articles.map((article: any) => ({
    ...article,
    publishedAt: article.publishedAt instanceof Date 
      ? article.publishedAt.toISOString() 
      : typeof article.publishedAt === 'string' 
      ? article.publishedAt 
      : new Date().toISOString(),
    createdAt: article.createdAt instanceof Date 
      ? article.createdAt.toISOString() 
      : typeof article.createdAt === 'string' 
      ? article.createdAt 
      : new Date().toISOString(),
    updatedAt: article.updatedAt instanceof Date 
      ? article.updatedAt.toISOString() 
      : typeof article.updatedAt === 'string' 
      ? article.updatedAt 
      : new Date().toISOString(),
  }))
}

interface EditFormData {
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  imageFile: File | null
  imageUrl: string
}

// Edit Modal Component
function EditNewsModal({ article, onUpdate }: { article: NewsItem; onUpdate: (updatedArticle: NewsItem) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<EditFormData>({
    title: article.title || "",
    excerpt: article.excerpt || "",
    content: article.content || "",
    category: article.category || "",
    author: article.author || "",
    imageFile: null,
    imageUrl: article.imageUrl || "",
  })

  // Reset form data when article changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        title: article.title || "",
        excerpt: article.excerpt || "",
        content: article.content || "",
        category: article.category || "",
        author: article.author || "",
        imageFile: null,
        imageUrl: article.imageUrl || "",
      })
      
      // Reset file input
      const fileInput = document.getElementById("image") as HTMLInputElement
      if (fileInput) {
        fileInput.value = ""
      }
    }
  }, [article, isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Validate required fields
      if (!formData.title?.trim() || !formData.excerpt?.trim() || !formData.content?.trim() || !formData.category?.trim() || !formData.author?.trim()) {
        alert("Harap lengkapi semua field yang wajib diisi")
        setIsLoading(false)
        return
      }

      let imageUrl = formData.imageUrl || ""

      // Upload new image if selected
      if (formData.imageFile) {
        // Validate file size (2MB limit)
        if (formData.imageFile.size > 2 * 1024 * 1024) {
          alert("Ukuran file terlalu besar. Maksimal 2MB.")
          setIsLoading(false)
          return
        }
        imageUrl = await uploadImageToStorage(formData.imageFile, "news")
      }

      const updatedArticle: NewsItem = {
        ...article,
        title: formData.title?.trim() || "",
        excerpt: formData.excerpt?.trim() || "",
        content: formData.content?.trim() || "",
        category: formData.category?.trim() || "",
        author: formData.author?.trim() || "",
        imageUrl: imageUrl || "",
        publishedAt: typeof article.publishedAt === 'string' 
          ? article.publishedAt 
          : new Date(article.publishedAt).toISOString(),
      }

      await updateNewsInFirestore(article.id, {
        title: formData.title?.trim() || "",
        excerpt: formData.excerpt?.trim() || "",
        content: formData.content?.trim() || "",
        category: formData.category?.trim() || "",
        author: formData.author?.trim() || "",
        imageUrl: imageUrl || "",
      })
      
      onUpdate(updatedArticle)
      setIsOpen(false)
    } catch (error) {
      console.error("Error updating article:", error)
      alert("Terjadi kesalahan saat mengupdate artikel")
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, imageFile: file }))
    }
  }

  const removeImage = () => {
    setFormData(prev => ({ ...prev, imageFile: null, imageUrl: "" }))
    // Reset file input
    const fileInput = document.getElementById("image") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Berita</DialogTitle>
          <DialogDescription>
            Perbarui informasi artikel berita
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Judul *</Label>
            <Input
              id="title"
              value={formData.title || ""}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Ringkasan *</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt || ""}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Konten *</Label>
            <Textarea
              id="content"
              value={formData.content || ""}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              rows={8}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Kategori *</Label>
              <Select value={formData.category || ""} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hukum Bisnis">Hukum Bisnis</SelectItem>
                  <SelectItem value="Hukum Pidana">Hukum Pidana</SelectItem>
                  <SelectItem value="Hukum Perdata">Hukum Perdata</SelectItem>
                  <SelectItem value="Hukum Keluarga">Hukum Keluarga</SelectItem>
                  <SelectItem value="Hukum Properti">Hukum Properti</SelectItem>
                  <SelectItem value="Berita Umum">Berita Umum</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Penulis *</Label>
              <Input
                id="author"
                value={formData.author || ""}
                onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Gambar</Label>
            <div className="space-y-2">
              {formData.imageUrl && (
                <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                  <Image
                    src={formData.imageUrl}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              <p className="text-sm text-gray-500">Maksimal 2MB. Format: JPG, PNG, WebP</p>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Batal
            </Button>
            <Button type="submit" disabled={isLoading} className="gradient-blue text-white">
              {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default function NewsManagement() {
  const dispatch = useDispatch<AppDispatch>()
  const { articles, isLoading } = useSelector((state: RootState) => state.news)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredArticles, setFilteredArticles] = useState<NewsItem[]>([])

  // Fetch news from Firebase when component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        dispatch(setLoading(true))
        const newsData = await getNewsFromFirestore()
        const serializedNewsData = serializeNewsData(newsData)
        dispatch(setArticles(serializedNewsData))
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        dispatch(setLoading(false))
      }
    }

    fetchNews()
  }, [dispatch])

  useEffect(() => {
    const filtered = (articles || []).filter(
      (article) =>
        article?.title?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        article?.category?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        article?.author?.toLowerCase()?.includes(searchTerm.toLowerCase()),
    )
    setFilteredArticles(filtered)
  }, [articles, searchTerm])

  const handleDeleteArticle = async (id: string) => {
    try {
      await deleteNewsFromFirestore(id)
      dispatch(deleteArticle(id))
      // Optional: Refresh data from Firebase to ensure consistency
      // const newsData = await getNewsFromFirestore()
      // dispatch(setArticles(newsData))
    } catch (error) {
      console.error("Error deleting article:", error)
      alert("Terjadi kesalahan saat menghapus artikel")
    }
  }

  const handleUpdateArticle = (updatedArticle: NewsItem) => {
    dispatch(updateArticle(updatedArticle))
  }

  const handleRefresh = async () => {
    try {
      dispatch(setLoading(true))
      const newsData = await getNewsFromFirestore()
      const serializedNewsData = serializeNewsData(newsData)
      dispatch(setArticles(serializedNewsData))
    } catch (error) {
      console.error("Error refreshing news:", error)
      alert("Terjadi kesalahan saat memuat ulang data")
    } finally {
      dispatch(setLoading(false))
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manajemen Berita</h1>
            <p className="text-gray-600">Kelola artikel dan berita website</p>
          </div>
          <Button asChild className="gradient-blue text-white">
            <Link href="/admin/news/create">
              <Plus className="h-4 w-4 mr-2" />
              Tambah Berita
            </Link>
          </Button>
        </div>
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Cari berita..."
                  disabled
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4 animate-pulse">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="h-6 bg-gray-200 rounded w-20"></div>
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manajemen Berita</h1>
          <p className="text-gray-600">
            Kelola artikel dan berita website 
            {articles && articles.length > 0 && (
              <span className="ml-2 text-blue-600 font-medium">
                ({articles.length} artikel)
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            onClick={handleRefresh}
            disabled={isLoading}
            className="text-gray-600 hover:text-gray-800"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button asChild className="gradient-blue text-white">
            <Link href="/admin/news/create">
              <Plus className="h-4 w-4 mr-2" />
              Tambah Berita
            </Link>
          </Button>
        </div>
      </div>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Cari berita..."
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm(e.target.value || "")}
                className="pl-10"
              />
            </div>
            {searchTerm && (
              <p className="text-sm text-gray-600">
                Menampilkan {filteredArticles?.length || 0} dari {articles?.length || 0} artikel
              </p>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {filteredArticles.length > 0 ? (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.publishedAt).toLocaleDateString("id-ID")}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                      <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <EditNewsModal article={article} onUpdate={handleUpdateArticle} />
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 bg-transparent"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Hapus Berita</AlertDialogTitle>
                            <AlertDialogDescription>
                              Apakah Anda yakin ingin menghapus berita "{article.title}"? Tindakan ini tidak dapat
                              dibatalkan.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Batal</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteArticle(article.id)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Hapus
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada berita</h3>
              <p className="text-gray-600 mb-4">Mulai dengan membuat berita pertama Anda</p>
              <Button asChild className="gradient-blue text-white">
                <Link href="/admin/news/create">
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Berita
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
