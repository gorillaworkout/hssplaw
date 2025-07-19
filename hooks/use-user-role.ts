import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"
import { getUserFromFirestore } from "@/lib/firestore"

interface UserData {
  uid: string
  email: string
  displayName: string
  role: string
  photoURL?: string
  createdAt: string
  updatedAt: string
  lastLogin: string
}

export function useUserRole() {
  const [user, loading, error] = useAuthState(auth)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [roleLoading, setRoleLoading] = useState(true)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  // Function to force refresh user data
  const refreshUserData = () => {
    setRefreshTrigger(prev => prev + 1)
  }

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && !loading) {
        try {
          setRoleLoading(true)
          console.log("Fetching user data for UID:", user.uid)
          
          const userDoc = await getUserFromFirestore(user.uid)
          console.log("Raw user data from Firestore:", userDoc)
          
          if (userDoc) {
            setUserData(userDoc as unknown as UserData)
            console.log("User role detected:", (userDoc as any)?.role)
          } else {
            console.log("No user data found in Firestore")
            setUserData(null)
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
          setUserData(null)
        } finally {
          setRoleLoading(false)
        }
      } else if (!user && !loading) {
        console.log("No authenticated user")
        setUserData(null)
        setRoleLoading(false)
      }
    }

    fetchUserData()
  }, [user, loading, refreshTrigger])

  const isAdmin = userData?.role === "admin"
  const isUser = userData?.role === "user"

  // Debug logs untuk troubleshooting
  console.log("useUserRole Debug:", {
    user: user?.email,
    userData,
    userRole: userData?.role,
    isAdmin,
    isUser,
    loading: loading || roleLoading
  })

  return {
    user,
    userData,
    isAdmin,
    isUser,
    loading: loading || roleLoading,
    isLoading: loading || roleLoading,
    refreshUserData,
    error
  }
}
