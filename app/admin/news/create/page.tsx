"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Upload, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { addArticle } from "@/lib/slices/newsSlice"
import { saveNewsToFirestore, uploadImageToStorage } from "@/lib/firestore"
import type { RootState, AppDispatch } from "@/lib/store"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"


export default function CreateNews() {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    category: "",
  })
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [firebaseUser, loading, authError] = useAuthState(auth)

  const categories = [
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

    // Check authentication
  useEffect(() => {
    if (!loading && !firebaseUser) {
      router.push("/login")
    }
  }, [firebaseUser, loading, router])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validasi ukuran file (2MB)
      const maxSize = 2 * 1024 * 1024 // 2MB
      if (file.size > maxSize) {
        setError(`File terlalu besar. Maksimal 2MB. Ukuran file: ${(file.size / (1024 * 1024)).toFixed(2)}MB`)
        return
      }

      // Validasi tipe file
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
      if (!allowedTypes.includes(file.type)) {
        setError('Tipe file tidak diizinkan. Gunakan JPEG, PNG, atau WebP')
        return
      }

      // Clear error jika file valid
      setError("")
      setImage(file)

      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  const removeImage = () => {
    setImage(null)
    setImagePreview(null)
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.content || !formData.category) {
      setError("Mohon lengkapi semua field yang wajib diisi")
      return
    }

    // Check if user is authenticated
    if (!firebaseUser) {
      setError("Anda harus login terlebih dahulu")
      router.push("/login")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      let imageUrl = ""

      if (image) {
        console.log("Uploading image...") // Debug log
        imageUrl = await uploadImageToStorage(image, `news/${Date.now()}_${image.name}`)
        console.log("Image uploaded:", imageUrl) // Debug log
      }

      const newArticle = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt || formData.content.substring(0, 150) + "...",
        imageUrl,
        author: firebaseUser.displayName || firebaseUser.email || "Admin",
        publishedAt: new Date().toISOString(),
        category: formData.category,
        slug: generateSlug(formData.title),
        createdBy: firebaseUser.uid, // Add user ID
      }

      console.log("Saving to Firestore...") // Debug log
      const docId = await saveNewsToFirestore(newArticle)
      console.log("Article saved successfully with ID:", docId) // Debug log
      
      // Add the document ID to the article for Redux
      const articleWithId = { ...newArticle, id: docId }
      dispatch(addArticle(articleWithId))
      router.push("/admin/news")
    } catch (error: any) {
      console.error("Error saving article:", error)
      setError(`Gagal menyimpan berita: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/admin/news">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tambah Berita</h1>
          <p className="text-gray-600">Buat artikel atau berita baru</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Konten Berita</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Judul *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Masukkan judul berita"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Ringkasan</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange("excerpt", e.target.value)}
                    placeholder="Ringkasan singkat berita (opsional)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Konten *</Label>
                  <RichTextEditor
                    value={formData.content}
                    onChange={(value) => handleInputChange("content", value)}
                    placeholder="Tulis konten berita lengkap di sini. Gunakan toolbar di atas untuk memformat teks."
                    className="min-h-[300px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Pengaturan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Kategori *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>


                <div className="space-y-2">
                  <Label>Gambar</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    {imagePreview ? (
                      <div className="relative">
                        <Image
                          src={imagePreview || "/placeholder.svg"}
                          alt="Preview"
                          width={300}
                          height={200}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={removeImage}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        {image && (
                          <p className="text-xs text-gray-500 mt-2">
                            {image.name} ({(image.size / (1024 * 1024)).toFixed(2)}MB)
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Upload gambar berita</p>
                        <p className="text-xs text-gray-400 mb-2">Maksimal 2MB (JPEG, PNG, WebP)</p>
                        <input
                          type="file"
                          accept="image/jpeg,image/jpg,image/png,image/webp"
                          onChange={handleImageChange}
                          className="hidden"
                          id="image-upload"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById("image-upload")?.click()}
                        >
                          Pilih Gambar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-3">
                  <Button type="submit" className="w-full gradient-blue text-white" disabled={isLoading}>
                    {isLoading ? "Menyimpan..." : "Publikasikan"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => router.push("/admin/news")}
                  >
                    Batal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
