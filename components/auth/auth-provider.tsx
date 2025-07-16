"use client"

import { createContext, useContext, useEffect, type ReactNode } from "react"
import { useDispatch } from "react-redux"
import { onAuthStateChange } from "@/lib/auth"
import { setUser, clearUser, setLoading } from "@/lib/slices/authSlice"
import type { AppDispatch } from "@/lib/store"

const AuthContext = createContext({})

export function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setLoading(true))

    const unsubscribe = onAuthStateChange((user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email || "",
            displayName: user.displayName || "",
            photoURL: user.photoURL || undefined,
          }),
        )
      } else {
        dispatch(clearUser())
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
