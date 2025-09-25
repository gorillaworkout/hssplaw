"use client"

import { LeafletMap } from "./leaflet-map"
import { SimpleMap } from "./simple-map"

interface OfficeLocationProps {
  latitude?: number
  longitude?: number
  address?: string
  className?: string
}

export function OfficeLocation({ 
  latitude = -7.2575, 
  longitude = 112.7521, 
  address = "Surabaya, Jawa Timur, Indonesia",
  className = ""
}: OfficeLocationProps) {
  // Try Leaflet first, fallback to SimpleMap if there are issues
  try {
    return (
      <LeafletMap 
        latitude={latitude}
        longitude={longitude}
        address={address}
        className={className}
      />
    )
  } catch (error) {
    console.warn("Leaflet map failed, using simple map:", error)
    return (
      <SimpleMap 
        latitude={latitude}
        longitude={longitude}
        address={address}
        className={className}
      />
    )
  }
}
