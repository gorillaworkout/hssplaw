"use client"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"
import { useUserRole } from "@/hooks/use-user-role"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, loading] = useAuthState(auth)
  const { isAdmin, isLoading: roleLoading } = useUserRole()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !roleLoading) {
      if (!user || !isAdmin) {
        router.push("/login")
      }
    }
  }, [user, isAdmin, loading, roleLoading, router])

  if (loading || roleLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!user || !isAdmin) {
    return null
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
