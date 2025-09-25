"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Navigation } from "lucide-react"

interface GoogleMapsProps {
  latitude?: number
  longitude?: number
  address?: string
  className?: string
}

export function GoogleMaps({ 
  latitude = -7.2575, 
  longitude = 112.7521, 
  address = "Surabaya, Jawa Timur, Indonesia",
  className = ""
}: GoogleMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return

      const mapOptions: google.maps.MapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ],
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
      }

      mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions)

      // Add marker
      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: mapInstanceRef.current,
        title: "HSS Partners Law Firm",
        animation: google.maps.Animation.DROP,
      })

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; color: #1e40af; font-weight: bold;">HSS Partners Law Firm</h3>
            <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px;">${address}</p>
            <div style="display: flex; gap: 8px; margin-top: 12px;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}" 
                 target="_blank" 
                 style="background: #3b82f6; color: white; padding: 6px 12px; border-radius: 4px; text-decoration: none; font-size: 12px; font-weight: 500;">
                🧭 Arahkan
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}" 
                 target="_blank" 
                 style="background: #10b981; color: white; padding: 6px 12px; border-radius: 4px; text-decoration: none; font-size: 12px; font-weight: 500;">
                📍 Buka Maps
              </a>
            </div>
          </div>
        `,
      })

      marker.addListener("click", () => {
        infoWindow.open(mapInstanceRef.current, marker)
      })

      // Open info window by default
      infoWindow.open(mapInstanceRef.current, marker)
    }

    // Load Google Maps script if not already loaded
    if (typeof window.google === "undefined") {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null
      }
    }
  }, [latitude, longitude, address])

  const handleOpenInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    window.open(url, "_blank")
  }

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    window.open(url, "_blank")
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Map Container */}
      <div className="relative">
        <div 
          ref={mapRef} 
          className="w-full h-80 rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          style={{ minHeight: "320px" }}
        />
        
        {/* Loading overlay */}
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Memuat peta...</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={handleOpenInGoogleMaps}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <MapPin className="h-4 w-4 mr-2" />
          Buka di Google Maps
        </Button>
        
        <Button 
          onClick={handleGetDirections}
          variant="outline"
          className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          <Navigation className="h-4 w-4 mr-2" />
          Dapatkan Arah
        </Button>
      </div>

      {/* Address Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Lokasi Kantor</h4>
            <p className="text-gray-600 text-sm">{address}</p>
            <p className="text-gray-500 text-xs mt-1">
              Koordinat: {latitude.toFixed(6)}, {longitude.toFixed(6)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Fallback component if Google Maps API key is not available
export function GoogleMapsFallback({ 
  latitude = -7.2575, 
  longitude = 112.7521, 
  address = "Surabaya, Jawa Timur, Indonesia",
  className = ""
}: GoogleMapsProps) {
  const handleOpenInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    window.open(url, "_blank")
  }

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    window.open(url, "_blank")
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Static Map Image */}
      <div className="relative">
        <div className="w-full h-80 rounded-lg shadow-lg border border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Peta Lokasi Kantor</p>
            <p className="text-gray-500 text-sm">Klik tombol di bawah untuk membuka di Google Maps</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={handleOpenInGoogleMaps}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <MapPin className="h-4 w-4 mr-2" />
          Buka di Google Maps
        </Button>
        
        <Button 
          onClick={handleGetDirections}
          variant="outline"
          className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          <Navigation className="h-4 w-4 mr-2" />
          Dapatkan Arah
        </Button>
      </div>

      {/* Address Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Lokasi Kantor</h4>
            <p className="text-gray-600 text-sm">{address}</p>
            <p className="text-gray-500 text-xs mt-1">
              Koordinat: {latitude.toFixed(6)}, {longitude.toFixed(6)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
