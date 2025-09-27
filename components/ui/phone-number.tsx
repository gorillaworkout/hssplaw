"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PhoneNumberProps {
  phone: string
  displayText?: string
  variant?: "default" | "whatsapp" | "both"
  className?: string
  iconClassName?: string
  textClassName?: string
  showIcon?: boolean
  size?: "sm" | "md" | "lg"
}

const PHONE_NUMBERS = {
  primary: "0821-4079-0009",
  secondary: "0822-3399-0050", 
  tertiary: "0811-345-8191"
}

export function PhoneNumber({
  phone,
  displayText,
  variant = "default",
  className,
  iconClassName,
  textClassName,
  showIcon = true,
  size = "md"
}: PhoneNumberProps) {
  // Format phone number for display
  const formatPhoneNumber = (phone: string) => {
    // Remove any non-digit characters
    const cleaned = phone.replace(/\D/g, '')
    
    // Format Indonesian phone number
    if (cleaned.startsWith('08')) {
      return cleaned.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')
    }
    
    return phone
  }

  // Format phone number for WhatsApp (remove dashes and add country code)
  const formatWhatsAppNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '')
    if (cleaned.startsWith('08')) {
      return `62${cleaned.substring(1)}`
    }
    return cleaned
  }

  const handlePhoneClick = () => {
    const telNumber = phone.startsWith('+') ? phone : `+62${phone.replace(/\D/g, '').substring(1)}`
    window.open(`tel:${telNumber}`, '_self')
  }

  const handleWhatsAppClick = () => {
    const whatsappNumber = formatWhatsAppNumber(phone)
    const message = "Halo, saya ingin berkonsultasi hukum dengan HSS Partners Law Firm."
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base", 
    lg: "text-lg"
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  }

  const displayNumber = displayText || formatPhoneNumber(phone)

  if (variant === "whatsapp") {
    return (
      <Button
        variant="ghost"
        onClick={handleWhatsAppClick}
        className={cn(
          "flex items-center space-x-2 hover:bg-green-50 hover:text-green-600 transition-colors",
          className
        )}
      >
        {showIcon && <MessageCircle className={cn(iconSizes[size], iconClassName)} />}
        <span className={cn(sizeClasses[size], textClassName)}>{displayNumber}</span>
      </Button>
    )
  }

  if (variant === "both") {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <Button
          variant="ghost"
          onClick={handlePhoneClick}
          className="flex items-center space-x-1 hover:bg-blue-50 hover:text-blue-600 transition-colors"
        >
          {showIcon && <Phone className={cn(iconSizes[size], iconClassName)} />}
          <span className={cn(sizeClasses[size], textClassName)}>{displayNumber}</span>
        </Button>
        <Button
          variant="ghost"
          onClick={handleWhatsAppClick}
          className="flex items-center space-x-1 hover:bg-green-50 hover:text-green-600 transition-colors"
        >
          <MessageCircle className={cn(iconSizes[size], iconClassName)} />
        </Button>
      </div>
    )
  }

  // Default variant (phone only)
  return (
    <Button
      variant="ghost"
      onClick={handlePhoneClick}
      className={cn(
        "flex items-center space-x-2 hover:bg-blue-50 hover:text-blue-600 transition-colors",
        className
      )}
    >
      {showIcon && <Phone className={cn(iconSizes[size], iconClassName)} />}
      <span className={cn(sizeClasses[size], textClassName)}>{displayNumber}</span>
    </Button>
  )
}

// Export the phone numbers for easy access
export { PHONE_NUMBERS }
