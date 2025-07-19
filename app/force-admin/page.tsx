"use client"

import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"
import { makeUserAdmin } from "@/lib/admin-utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForceAdminPage() {
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleForceAdmin = async () => {
    if (!user) {
      setMessage("Please login first")
      return
    }

    try {
      setLoading(true)
      setMessage("")

      await makeUserAdmin(user.uid, {
        email: user.email,
        displayName: user.displayName || user.email,
        uid: user.uid
      })

      setMessage("✅ Successfully made user admin! Please refresh the page and check navbar.")
    } catch (error: any) {
      setMessage("❌ Error: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Force Admin Access</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {user ? (
            <div>
              <p>Logged in as: <strong>{user.email}</strong></p>
              <p>UID: <code>{user.uid}</code></p>
              
              <Button 
                onClick={handleForceAdmin}
                disabled={loading}
                className="mt-4"
              >
                {loading ? "Processing..." : "Make Me Admin"}
              </Button>

              {message && (
                <Alert className="mt-4">
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}
            </div>
          ) : (
            <p>Please login first to use this tool.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
