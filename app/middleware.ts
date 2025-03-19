import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  const path = req.nextUrl.pathname;

  if (path.startsWith("/dashboard/admin")) {
    if (!isAuthenticated || token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/auth/login/admin", req.url));
    }
  } else if (path.startsWith("/dashboard/teacher")) {
    if (!isAuthenticated || token.role !== "TEACHER") {
      return NextResponse.redirect(new URL("/auth/login/teacher", req.url));
    }
  } else if (path.startsWith("/dashboard/student")) {
    if (!isAuthenticated || token.role !== "STUDENT") {
      return NextResponse.redirect(new URL("/auth/login/student", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/admin/:path*", "/dashboard/teacher/:path*", "/dashboard/student/:path*"],
};
