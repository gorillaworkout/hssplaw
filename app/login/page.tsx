"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Scale, Chrome, AlertCircle } from "lucide-react"
import { signInWithGoogle } from "@/lib/auth"
import { setUser } from "@/lib/slices/authSlice"
import type { RootState, AppDispatch } from "@/lib/store"

export default function LoginPage() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      setError("")

      const user = await signInWithGoogle()

      dispatch(
        setUser({
          uid: user.uid,
          email: user.email || "",
          displayName: user.displayName || "",
          photoURL: user.photoURL || undefined,
        }),
      )

      router.push("/admin")
    } catch (error) {
      setError("Gagal masuk. Silakan coba lagi.")
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isAuthenticated) {
    router.push("/admin")
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
            <div className="mx-auto bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-full w-fit">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">Admin Login</CardTitle>
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

            <div className="text-center text-sm text-gray-500">Hanya admin yang dapat mengakses halaman ini</div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
