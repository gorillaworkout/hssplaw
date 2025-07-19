'use client'

import { useEffect } from 'react'

// Web Vitals untuk SEO dan Performance Monitoring
export function WebVitals() {
  useEffect(() => {
    // Import web-vitals dinamically untuk mengurangi bundle size
    const loadWebVitals = async () => {
      try {
        const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals')
        
        // Function untuk send metrics ke analytics
        const sendToAnalytics = (metric: any) => {
          // Send ke Google Analytics jika tersedia
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', metric.name, {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              non_interaction: true,
            })
          }
          
          // Log untuk development
          if (process.env.NODE_ENV === 'development') {
            console.log('Web Vital:', metric.name, metric.value)
          }
        }

        // Track semua Core Web Vitals
        onCLS(sendToAnalytics)  // Cumulative Layout Shift
        onFID(sendToAnalytics)  // First Input Delay
        onFCP(sendToAnalytics)  // First Contentful Paint
        onLCP(sendToAnalytics)  // Largest Contentful Paint
        onTTFB(sendToAnalytics) // Time to First Byte
        
      } catch (error) {
        console.warn('Web Vitals tidak dapat dimuat:', error)
      }
    }

    // Load web vitals setelah component mount
    loadWebVitals()
  }, [])

  // Component ini tidak render apa-apa, hanya tracking
  return null
}

// Export default untuk kemudahan import
export default WebVitals