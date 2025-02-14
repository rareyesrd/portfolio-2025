import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const locales = ["es"];
// const defaultLocale = "es";

// function getLocale(): string {
//   return defaultLocale;
// }

export function middleware(request: NextRequest) {
  // Get pathname from request (e.g. /products, /about, /)
  const pathname = request.nextUrl.pathname;

  // Check if the pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect to default locale if no locale in pathname
    const newUrl = new URL(`/es${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};
