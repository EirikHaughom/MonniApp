import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import Resend from 'next-auth/providers/resend';

import { db } from '@/libs/DB';
import { Env } from '@/libs/Env';
import {
  accounts,
  authenticators,
  sessions,
  users,
  verificationTokens,
} from '@/models/Schema';
import { AllLocales } from '@/utils/AppConfig';

const protectedRoutePatterns = [
  /^\/dashboard(?:\/|$)/,
  /^\/[^/]+\/dashboard(?:\/|$)/,
  /^\/onboarding(?:\/|$)/,
  /^\/[^/]+\/onboarding(?:\/|$)/,
  /^\/api(?!\/auth)(?:\/|$)/,
  /^\/[^/]+\/api(?!\/auth)(?:\/|$)/,
];

const signInRoutePatterns = [/^\/sign-in(?:\/|$)/, /^\/[^/]+\/sign-in(?:\/|$)/];

const localeFromPath = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length) {
    return null;
  }

  const match = segments[0];

  if (match && AllLocales.includes(match)) {
    return match;
  }

  return null;
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
  trustHost: true,
  session: {
    strategy: 'database',
  },
  pages: {
    signIn: '/sign-in',
    verifyRequest: '/sign-in/verify',
  },
  providers: [
    Resend({
      apiKey: Env.RESEND_API_KEY,
      from: Env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id;
        session.user.email = user.email;
        session.user.name = user.name;
        session.user.image = user.image;
      }

      return session;
    },
    authorized({ auth: session, request: { nextUrl } }) {
      const pathname = nextUrl.pathname;
      const isProtected = protectedRoutePatterns.some(pattern =>
        pattern.test(pathname),
      );
      const isSignInRoute = signInRoutePatterns.some(pattern =>
        pattern.test(pathname),
      );
      const isAuthenticated = !!session?.user;

      if (isProtected && !isAuthenticated) {
        const locale = localeFromPath(pathname);
        const redirectUrl = new URL(
          locale ? `/${locale}/sign-in` : '/sign-in',
          nextUrl,
        );
        redirectUrl.searchParams.set('callbackUrl', nextUrl.toString());

        return Response.redirect(redirectUrl);
      }

      if (isAuthenticated && isSignInRoute) {
        const locale = localeFromPath(pathname);
        return Response.redirect(
          new URL(locale ? `/${locale}/dashboard` : '/dashboard', nextUrl),
        );
      }

      return true;
    },
  },
  secret: Env.AUTH_SECRET,
});
