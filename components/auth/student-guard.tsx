// components/auth/admin-guard.tsx
"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function StudentGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/auth/login/stundent")
    }
    
    if (status === "authenticated" && session?.user?.role !== "STUDENT") {
      redirect("/")
    }
  }, [session, status])
  
  if (status === "loading") {
    return <div>Loading...</div>
  }
  
  return <>{children}</>
}