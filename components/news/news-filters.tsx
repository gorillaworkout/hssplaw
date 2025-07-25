"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface NewsFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchTerm: string
  onSearchChange: (term: string) => void
}

export function NewsFilters({ selectedCategory, onCategoryChange, searchTerm, onSearchChange }: NewsFiltersProps) {
  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "Hukum Korporasi", label: "Hukum Korporasi" },
    { value: "Litigasi", label: "Litigasi" },
    { value: "Kontrak Bisnis", label: "Kontrak Bisnis" },
    { value: "Hukum Properti", label: "Hukum Properti" },
    { value: "Hukum Keluarga", label: "Hukum Keluarga" },
    { value: "Hukum Pidana", label: "Hukum Pidana" },
    { value: "Berita Umum", label: "Berita Umum" },
  ]

  return (
    <div className="space-y-6 mb-8">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Cari artikel..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.value)}
            className={selectedCategory === category.value ? "gradient-blue text-white" : ""}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
