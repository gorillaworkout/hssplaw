"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { PageLoader } from "@/components/ui/loader"

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <PageLoader />
  }

  return <>{children}</>
}
