import { NextResponse } from 'next/server';

import { i18n } from '../i18n';

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const pathnameLocale = i18n.locales.find(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // Redirect if there is no locale in the pathname
  if (!pathnameLocale) {
    // Check if there is cookie for locale
    const localeFromCookies = request.cookies.get('locale')?.value;

    if (localeFromCookies) {
      const response = NextResponse.redirect(
        new URL(
          `/${localeFromCookies}${
            pathname.startsWith('/') ? '' : '/'
          }${pathname}`,
          request.url,
        ),
      );

      return response;
    } else {
      const response = NextResponse.redirect(
        new URL(
          `/${i18n.defaultLocale}${
            pathname.startsWith('/') ? '' : '/'
          }${pathname}`,
          request.url,
        ),
      );
      response.cookies.set('locale', i18n.defaultLocale);

      return response;
    }
  }

  const response = NextResponse.next();

  response.cookies.set('locale', pathnameLocale);

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|public|images|icons|meta|favicon.ico).*)',
  ],
};
