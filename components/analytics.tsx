'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
    dataLayer: any[]
  }
}

export function GoogleAnalytics({ ga_id }: { ga_id: string }) {
  useEffect(() => {
    // Only load in production or when GA_ID is provided
    if (process.env.NODE_ENV === 'production' && ga_id && ga_id !== 'G-XXXXXXXXXX') {
      // Load Google Analytics script
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ga_id}`
      script.async = true
      document.head.appendChild(script)
      
      // Initialize gtag
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      gtag('js', new Date())
      gtag('config', ga_id)
    }
  }, [ga_id])

  return null
}
