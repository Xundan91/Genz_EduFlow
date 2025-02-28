"use client"

import { SidebarNav } from "@/components/ui/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardShellProps {
  children: React.ReactNode;
  role: "admin" | "teacher" | "student";
}

export function DashboardShell({ children, role }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card p-6">
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-xl font-bold">EduFlow</h1>
        </div>
        <SidebarNav role={role} />
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="h-16 border-b bg-card px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome back, {role === "admin" ? "Admin" : role === "teacher" ? "Teacher" : "Student"}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}