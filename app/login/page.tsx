"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, googleProvider } from "@/lib/firebase"
import { signInWithPopup } from "firebase/auth"
import { saveUserToFirestore, getUserFromFirestore, updateUserLastLogin } from "@/lib/firestore"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Chrome, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && user) {
      // Check user role to determine redirect destination
      const checkUserRole = async () => {
        try {
          const userData = await getUserFromFirestore(user.uid)
          if (userData && (userData as any).role === "admin") {
            router.push("/admin/news") // Redirect admin to admin panel
          } else {
            router.push("/") // Redirect regular user to home
          }
        } catch (error) {
          console.error("Error checking user role:", error)
          router.push("/") // Default redirect to home
        }
      }
      
      checkUserRole()
    }
  }, [user, loading, router])

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      setError("")

      const userCredential = await signInWithPopup(auth, googleProvider)
      const user = userCredential.user
      
      // Check if user exists in Firestore
      let userData = await getUserFromFirestore(user.uid)
      
      if (!userData) {
        // Create new user with "user" role for Google login
        await saveUserToFirestore(user, "user")
        console.log("New user registered in Firestore:", {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          role: "user"
        })
        // New users default to home page
        router.push("/")
      } else {
        // Update last login for existing user
        await updateUserLastLogin(user.uid)
        console.log("Existing user login updated:", user.email)
        
        // Check role and redirect accordingly
        if ((userData as any).role === "admin") {
          console.log("Admin user detected, redirecting to admin panel")
          router.push("/admin/news")
        } else {
          console.log("Regular user detected, redirecting to home")
          router.push("/")
        }
      }
    } catch (error: any) {
      setError("Gagal masuk dengan Google. Silakan coba lagi.")
      console.error("Google login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Show loading while checking auth state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  // Don't render if user is already authenticated (will redirect)
  if (user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <Image src="/hssnotext.png" alt="HSS Partners Logo" width={50} height={100} />
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Login
              </CardTitle>
              <p className="text-gray-600 mt-2">HSS Partners Law Firm</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              size="lg"
            >
              <Chrome className="h-5 w-5 mr-3" />
              {isLoading ? "Memproses..." : "Masuk dengan Google"}
            </Button>

            <div className="text-center text-sm text-gray-500">
              Masuk dengan akun Google untuk mengakses website HSS Partners
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
