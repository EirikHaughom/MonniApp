import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { auth } from '@/libs/auth';

import { AllLocales, AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

const protectedRoutePatterns = [
  /^\/dashboard(?:\/|$)/,
  /^\/onboarding(?:\/|$)/,
  /^\/api(?!\/auth)(?:\/|$)/,
];

const signInRoutePatterns = [/^\/sign-in(?:\/|$)/];

const isProtectedRoute = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && AllLocales.includes(maybeLocale)) {
    const sliced = `/${segments.slice(1).join('/')}`;
    return protectedRoutePatterns.some(regex => regex.test(sliced));
  }

  return protectedRoutePatterns.some(regex => regex.test(pathname));
};

const isSignInRoute = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && AllLocales.includes(maybeLocale)) {
    const sliced = `/${segments.slice(1).join('/')}`;
    return signInRoutePatterns.some(regex => regex.test(sliced));
  }

  return signInRoutePatterns.some(regex => regex.test(pathname));
};

const getLocaleFromPathname = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  const localeCandidate = segments[0];

  if (localeCandidate && AllLocales.includes(localeCandidate)) {
    return localeCandidate;
  }

  return AppConfig.defaultLocale;
};

export default auth((request) => {
  const { nextUrl } = request;

  if (nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  const locale = getLocaleFromPathname(nextUrl.pathname);
  const isAuthenticated = !!request.auth?.user;

  if (isProtectedRoute(nextUrl.pathname) && !isAuthenticated) {
    const signInUrl = new URL(
      locale === AppConfig.defaultLocale ? '/sign-in' : `/${locale}/sign-in`,
      nextUrl,
    );

    signInUrl.searchParams.set('callbackUrl', nextUrl.toString());

    return NextResponse.redirect(signInUrl);
  }

  if (isAuthenticated && isSignInRoute(nextUrl.pathname)) {
    return NextResponse.redirect(
      new URL(
        locale === AppConfig.defaultLocale
          ? '/dashboard'
          : `/${locale}/dashboard`,
        nextUrl,
      ),
    );
  }

  return intlMiddleware(request);
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next|monitoring).*)', '/', '/(api|trpc)(.*)'], // Also exclude tunnelRoute used in Sentry from the matcher
};
