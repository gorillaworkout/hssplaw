"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"

interface SimpleMapProps {
  latitude?: number
  longitude?: number
  address?: string
  className?: string
}

export function SimpleMap({ 
  latitude = -7.2575, 
  longitude = 112.7521, 
  address = "Surabaya, Jawa Timur, Indonesia",
  className = ""
}: SimpleMapProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleOpenInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    window.open(url, "_blank")
  }

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    window.open(url, "_blank")
  }

  if (!isClient) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Memuat peta...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Map Container */}
      <div className="relative">
        <div className="w-full h-80 rounded-lg shadow-lg border border-gray-200 overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
          {/* Static Map using OpenStreetMap */}
          <iframe
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01},${latitude-0.01},${longitude+0.01},${latitude+0.01}&layer=mapnik&marker=${latitude},${longitude}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HSS Partners Law Firm Location"
          />
          
          {/* Custom Marker Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="bg-red-600 text-white p-2 rounded-full shadow-lg">
              <MapPin className="h-6 w-6" />
            </div>
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
