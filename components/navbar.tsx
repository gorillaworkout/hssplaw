"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, Scale, Phone, Mail, User, LogOut, Settings } from "lucide-react"
import { PhoneNumber, PHONE_NUMBERS } from "@/components/ui/phone-number"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"
import { useUserRole } from "@/hooks/use-user-role"
import { signOut } from "firebase/auth"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Jasa Hukum", href: "/services" },
  { name: "Kerjasama", href: "/partnership" },
  { name: "Tim Kami", href: "/team" },
  // { name: "Berita", href: "/news" },
  // { name: "Kontak", href: "/contact" },

]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const [user] = useAuthState(auth)
  const { isAdmin, refreshUserData, userData } = useUserRole()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const getUserDisplayName = () => {
    if (user?.displayName) return user.displayName
    if (user?.email) return user.email.split("@")[0]
    return "User"
  }

  // Debug info untuk troubleshooting admin menu
  console.log("Navbar Debug:", {
    user: user?.email,
    userData,
    isAdmin,
    userRole: userData?.role
  })

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <PhoneNumber 
              phone={PHONE_NUMBERS.primary}
              variant="default"
              size="sm"
              className="text-white hover:text-yellow-400"
              textClassName="text-white"
            />
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@hssplawfirm.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-yellow-400 h-auto p-2">
                    <User className="h-4 w-4 mr-2" />
                    <span>{getUserDisplayName()}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/admin/news" className="flex items-center">
                          <Settings className="h-4 w-4 mr-2" />
                          Admin Panel
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login" className="hover:text-yellow-400 transition-colors">
                Login Admin
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/hssnotext.png" alt="HSS Partners Logo" width={50} height={100} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">HSS Partners</h1>
                <p className="text-sm text-gray-600">Law Firm</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-500"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="gradient-blue text-white hover:opacity-90 transition-opacity">
                Konsultasi Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* User Info Section for Mobile */}
                  {user && (
                    <div className="pb-4 border-b">
                      <div className="flex items-center space-x-3 px-4 py-2">
                        <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{getUserDisplayName()}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-2 text-lg font-medium transition-colors ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      } rounded-lg`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Admin and Logout for Mobile */}
                  {user ? (
                    <div className="space-y-2 pt-4 border-t">
                      {isAdmin && (
                        <Link
                          href="/admin/news"
                          className="flex items-center px-4 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Settings className="h-5 w-5 mr-3" />
                          Admin Panel
                        </Link>
                      )}
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => {
                          handleLogout()
                          setMobileMenuOpen(false)
                        }}
                      >
                        <LogOut className="h-5 w-5 mr-3" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <Button
                      asChild
                      className="gradient-blue text-white mt-4"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                  )}

                  {!user && (
                    <Button className="gradient-blue text-white mt-4">Konsultasi Gratis</Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
