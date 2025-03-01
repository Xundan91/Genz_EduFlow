import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log(pathname);
  
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log(token);
  
  const userRole = token?.role as string | undefined;
  console.log(userRole);

  // Protect routes based on role
  if (pathname.startsWith("/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }
  if (pathname.startsWith("/teacher") && userRole !== "TEACHER") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }
  if (pathname.startsWith("/student") && userRole !== "STUDENT") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to these routes
export const config = {
  matcher: ["/admin/:path*", "/teacher/:path*", "/student/:path*"],
};
