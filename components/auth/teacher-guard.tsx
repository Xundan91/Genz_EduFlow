// components/auth/admin-guard.tsx
"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function TeacherGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/auth/login/teacher")
    }
    
    if (status === "authenticated" && session?.user?.role !== "TEACHER") {
      redirect("/")
    }
  }, [session, status])
  
  if (status === "loading") {
    return <div>Loading...</div>
  }
  
  return <>{children}</>
}