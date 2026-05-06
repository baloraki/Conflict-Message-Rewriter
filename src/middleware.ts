import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/icons") ||
    pathname.startsWith("/fonts") ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|webmanifest|xml|txt)$/)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect root to default locale
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LOCALE}`, request.url)
    );
  }

  // Get preferred language from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  let preferredLocale = DEFAULT_LOCALE;

  for (const locale of LOCALES) {
    if (acceptLanguage.includes(locale)) {
      preferredLocale = locale;
      break;
    }
  }

  // Check for language preference in localStorage via cookie
  const langCookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (langCookie && LOCALES.includes(langCookie as any)) {
    preferredLocale = langCookie as typeof preferredLocale;
  }

  // Redirect to locale-prefixed path
  return NextResponse.redirect(
    new URL(`/${preferredLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Match all pathnames except those starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public folder
    "/((?!api|_next/static|_next/image|favicon.ico|manifest.json|robots.txt|sitemap.xml|public).*)",
  ],
};
