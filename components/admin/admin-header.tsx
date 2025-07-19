"use client"

import { useSelector, useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Scale, LogOut, User } from "lucide-react"
import { logout } from "@/lib/auth"
import { clearUser } from "@/lib/slices/authSlice"
import type { RootState, AppDispatch } from "@/lib/store"
import Image from "next/image"

export function AdminHeader() {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)

  const handleLogout = async () => {
    try {
      await logout()
      dispatch(clearUser())
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/hssnotext.png" alt="HSS Partners Logo" width={50} height={100} />
          <div>
            <h1 className="text-xl font-bold text-gray-900">HSS Partners</h1>
            <p className="text-sm text-gray-600">Admin Panel</p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.photoURL || "/placeholder.svg"} alt={user?.displayName || ""} />
                <AvatarFallback>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p className="font-medium">{user?.displayName}</p>
                <p className="w-[200px] truncate text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
