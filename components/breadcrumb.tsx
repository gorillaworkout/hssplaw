'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { Suspense } from 'react'

interface BreadcrumbItem {
  label: string
  href: string
}

const pathToLabel: Record<string, string> = {
  '': 'Beranda',
  'about': 'Tentang Kami',
  'services': 'Layanan Hukum',
  'team': 'Tim Kami',
  'news': 'Berita',
  'contact': 'Kontak',
  'partnership': 'Partnership',
  'admin': 'Admin',
  'login': 'Login'
}

function BreadcrumbContent() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Beranda', href: '/' }
  ]

  let currentPath = ''
  for (const segment of pathSegments) {
    currentPath += `/${segment}`
    const label = pathToLabel[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    breadcrumbItems.push({
      label,
      href: currentPath
    })
  }

  if (breadcrumbItems.length <= 1) return null

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://hssplawfirm.com${item.href}`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />
                )}
                {index === 0 && (
                  <Home className="h-4 w-4 text-gray-600 mr-1" />
                )}
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-blue-600 font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}

export function Breadcrumb() {
  return (
    <Suspense fallback={null}>
      <BreadcrumbContent />
    </Suspense>
  )
}
