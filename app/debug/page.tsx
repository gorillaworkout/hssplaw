"use client"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"
import { useUserRole } from "@/hooks/use-user-role"
import { getUserFromFirestore } from "@/lib/firestore"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DebugPage() {
  const [user] = useAuthState(auth)
  const { userData, isAdmin, isUser, refreshUserData } = useUserRole()
  const [rawData, setRawData] = useState<any>(null)

  const fetchRawData = async () => {
    if (user) {
      try {
        const data = await getUserFromFirestore(user.uid)
        setRawData(data)
        console.log("Raw Firestore data:", data)
      } catch (error) {
        console.error("Error fetching raw data:", error)
      }
    }
  }

  if (!user) {
    return (
      <div className="container mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Debug User Role</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Please login to debug user role.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>User Role Debug Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Firebase Auth User:</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                emailVerified: user.emailVerified
              }, null, 2)}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold">Firestore User Data (via useUserRole):</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {JSON.stringify(userData, null, 2)}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold">Role Checks:</h3>
            <ul className="list-disc pl-5">
              <li>Is Admin: <strong>{isAdmin ? "YES" : "NO"}</strong></li>
              <li>Is User: <strong>{isUser ? "YES" : "NO"}</strong></li>
              <li>User Role: <strong>{userData?.role || "NOT SET"}</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Raw Firestore Data:</h3>
            <Button onClick={fetchRawData} className="mb-2">
              Fetch Raw Data from Firestore
            </Button>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {rawData ? JSON.stringify(rawData, null, 2) : "Click button to fetch"}
            </pre>
          </div>

          <div className="flex gap-2">
            <Button onClick={refreshUserData}>
              Refresh User Data
            </Button>
            <Button onClick={() => window.location.reload()}>
              Reload Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
