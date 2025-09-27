"use client"

import { PhoneNumber, PHONE_NUMBERS } from "@/components/ui/phone-number"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PhoneDemo() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Phone Number Component Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Default Phone Variant */}
        <Card>
          <CardHeader>
            <CardTitle>Default Phone</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PhoneNumber phone={PHONE_NUMBERS.primary} />
            <PhoneNumber phone={PHONE_NUMBERS.secondary} />
            <PhoneNumber phone={PHONE_NUMBERS.tertiary} />
          </CardContent>
        </Card>

        {/* WhatsApp Variant */}
        <Card>
          <CardHeader>
            <CardTitle>WhatsApp Only</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PhoneNumber phone={PHONE_NUMBERS.primary} variant="whatsapp" />
            <PhoneNumber phone={PHONE_NUMBERS.secondary} variant="whatsapp" />
            <PhoneNumber phone={PHONE_NUMBERS.tertiary} variant="whatsapp" />
          </CardContent>
        </Card>

        {/* Both Variant */}
        <Card>
          <CardHeader>
            <CardTitle>Phone + WhatsApp</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PhoneNumber phone={PHONE_NUMBERS.primary} variant="both" />
            <PhoneNumber phone={PHONE_NUMBERS.secondary} variant="both" />
            <PhoneNumber phone={PHONE_NUMBERS.tertiary} variant="both" />
          </CardContent>
        </Card>

        {/* Different Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Different Sizes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PhoneNumber phone={PHONE_NUMBERS.primary} size="sm" />
            <PhoneNumber phone={PHONE_NUMBERS.primary} size="md" />
            <PhoneNumber phone={PHONE_NUMBERS.primary} size="lg" />
          </CardContent>
        </Card>

        {/* Custom Styling */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Styling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PhoneNumber 
              phone={PHONE_NUMBERS.primary} 
              className="bg-blue-100 text-blue-800 rounded-lg p-2"
            />
            <PhoneNumber 
              phone={PHONE_NUMBERS.secondary} 
              variant="whatsapp"
              className="bg-green-100 text-green-800 rounded-lg p-2"
            />
            <PhoneNumber 
              phone={PHONE_NUMBERS.tertiary} 
              variant="both"
              className="bg-purple-100 text-purple-800 rounded-lg p-2"
            />
          </CardContent>
        </Card>

        {/* Without Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Without Icons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PhoneNumber phone={PHONE_NUMBERS.primary} showIcon={false} />
            <PhoneNumber phone={PHONE_NUMBERS.secondary} variant="whatsapp" showIcon={false} />
            <PhoneNumber phone={PHONE_NUMBERS.tertiary} variant="both" showIcon={false} />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Available Phone Numbers:</h2>
        <ul className="space-y-2">
          <li><strong>Primary:</strong> {PHONE_NUMBERS.primary}</li>
          <li><strong>Secondary:</strong> {PHONE_NUMBERS.secondary}</li>
          <li><strong>Tertiary:</strong> {PHONE_NUMBERS.tertiary}</li>
        </ul>
      </div>
    </div>
  )
}
