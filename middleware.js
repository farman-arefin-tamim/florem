import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request) {
  const session = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  const privateRoutes = ["/tile", "/my-profile"];
  const isPrivate = privateRoutes.some((route) => pathname.startsWith(route));

  if (isPrivate && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tile/:path*", "/my-profile/:path*"],
};
