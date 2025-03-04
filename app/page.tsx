import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { GraduationCap, Users, BookOpen, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <GraduationCap className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Welcome to EduFlow</h1>
          <p className="text-muted-foreground">
            Choose your role to continue
          </p>
        </div>
        
        
        <div className="grid gap-4">
          <Link href="/auth/login/student" className="w-full">
            <Button className="w-full h-16" variant="outline" size="lg">
              <Users className="mr-2 h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">Student Login</div>
                <div className="text-sm text-muted-foreground">Access your courses and assignments</div>
              </div>
            </Button>
          </Link>
          
          <Link href="/auth/login/teacher" className="w-full">
            <Button className="w-full h-16" variant="outline" size="lg">
              <BookOpen className="mr-2 h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">Teacher Login</div>
                <div className="text-sm text-muted-foreground">Manage your classes and students</div>
              </div>
            </Button>
          </Link>
          
          <Link href="/auth/login/admin" className="w-full">
            <Button className="w-full h-16" variant="outline" size="lg">
              <ShieldCheck className="mr-2 h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">Admin Login</div>
                <div className="text-sm text-muted-foreground">System administration and management</div>
              </div>
            </Button>
          </Link>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </Card>
    </main>
  );
}