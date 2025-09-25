"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-sm text-gray-600">Memuat peta...</p>
      </div>
    </div>
  )
})
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

// Fix default marker icons
const FixMarkerIcons = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.L) {
      // Fix default marker icons
      delete (window.L.Icon.Default.prototype as any)._getIconUrl
      window.L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
    }
  }, [])

  return null
}

// Custom marker component
const CustomMarker = ({ position, children }: { position: [number, number], children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Marker position={position}>
      {children}
    </Marker>
  )
}

interface LeafletMapProps {
  latitude?: number
  longitude?: number
  address?: string
  className?: string
}

export function LeafletMap({ 
  latitude = -7.2575, 
  longitude = 112.7521, 
  address = "Surabaya, Jawa Timur, Indonesia",
  className = ""
}: LeafletMapProps) {
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
        <div className="w-full h-80 rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <MapContainer
            center={[latitude, longitude]}
            zoom={15}
            style={{ height: "100%", width: "100%" }}
          >
            <FixMarkerIcons />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CustomMarker position={[latitude, longitude]}>
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">HSS Partners Law Firm</h3>
                  <p className="text-gray-600 text-xs mb-3">{address}</p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={handleOpenInGoogleMaps}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors"
                    >
                      📍 Buka di Google Maps
                    </button>
                    <button
                      onClick={handleGetDirections}
                      className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-colors"
                    >
                      🧭 Dapatkan Arah
                    </button>
                  </div>
                </div>
              </Popup>
            </CustomMarker>
          </MapContainer>
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
