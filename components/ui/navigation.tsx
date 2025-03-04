"use client"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Settings,
  MessageSquare,
  Video,
  Calendar,
  BarChart,
  LogOut,
  Bell,
  Shield,
  
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const teacherNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/teacher",
    icon: BarChart,
  },
  {
    title: "Courses",
    href: "/dashboard/teacher/courses",
    icon: BookOpen,
  },
  {
    title: "Students",
    href: "/dashboard/teacher/students",
    icon: Users,
  },
  {
    title: "Live Classes",
    href: "/dashboard/teacher/live",
    icon: Video,
  },
  {
    title: "Calendar",
    href: "/dashboard/teacher/calendar",
    icon: Calendar,
  },
  {
    title: "Community",
    href: "/dashboard/teacher/community",
    icon: MessageSquare,
  },
];

const adminNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: BarChart,
  },{
    title : "Teacher",
    href : "/dashboard/admin/teacher",
    icon : Users,
  },
  {
    title: "Student",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "Subject",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "Lesson",
    href: "/dashboard/admin/users",
    icon: BookOpen,
  },
  {
    title: "Exam",
    href: "/dashboard/admin/courses",
    icon: BookOpen,
  },
  {
    title: "lesson",
    href: "/dashboard/admin/settings",
    icon: Settings,
  },
  {
    title: "Assignment",
    href: "/dashboard/admin/notifications",
    icon: Bell,
  },
  {
    title: "Result",
    href: "/dashboard/admin/roles",
    icon: Shield,
  },
  {
    title: "Attendence",
    href: "/dashboard/admin/roles",
    icon: Shield,
  },
  {
    title: "Account",
    href: "/dashboard/admin/roles",
    icon: Shield,
  },
];

const studentNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/student",
    icon: BarChart,
  },
  {
    title: "My Courses",
    href: "/dashboard/student/courses",
    icon: BookOpen,
  },
  {
    title: "Live Classes",
    href: "/dashboard/student/live",
    icon: Video,
  },
  {
    title: "Calendar",
    href: "/dashboard/student/calendar",
    icon: Calendar,
  },
  {
    title: "Community",
    href: "/dashboard/student/community",
    icon: MessageSquare,
  },
];

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  role: "admin" | "teacher" | "student";
}


export function SidebarNav({ className, role, ...props }: f) {
  const pathname = usePathname();
  const items = role === "admin" 
    ? adminNavItems 
    : role === "teacher" 
    ? teacherNavItems 
    : studentNavItems;

  return  (
    <nav
      className={cn(
        "flex flex-col space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2 text-sm font-medium rounded-md",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
          >
            <Icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        );
      })}
      <Button variant="ghost" className="justify-start mt-auto">
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </nav>
  );
}