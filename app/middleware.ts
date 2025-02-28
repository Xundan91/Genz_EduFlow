// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  
  // Check if the path starts with /dashboard/admin
  if (req.nextUrl.pathname.startsWith("/dashboard/admin")) {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/auth/login/admin", req.url));
    }
    
    // Check if the user has the ADMIN role
    if (token.role !== "ADMIN") {
      // Redirect to unauthorized page or home
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/admin/:path*"]
};