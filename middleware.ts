import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { env } from "@/env";

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: env.NEXTAUTH_SECRET,
  });

  const signInUrl = new URL("/api/auth/signin", req.url);
  const isAuthPage = req.nextUrl.pathname.startsWith("/api/auth/signin");
  if (!session && !isAuthPage) {
    signInUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(signInUrl);
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
