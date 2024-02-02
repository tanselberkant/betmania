// import createMiddleware from "next-intl/middleware";
import createIntlMiddleware from 'next-intl/middleware';
import { locales, pathnames } from './navigation';

import { withAuth } from 'next-auth/middleware';
import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';

const publicPages = [
  '/',
  '/login',
  '/tables',
  '/tablolar',
  '/bets',
  '/bahisler',
  '/blogs',
  '/blogs/:slug',
  '/posts',
  '/posts/:slug',

  // (/admin requires auth)
];

const intlMiddleware = createIntlMiddleware({
  defaultLocale: 'tr',
  locales,
  pathnames,
});

// export default NextAuth(authConfig).auth;

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  (req: any) => intlMiddleware(req),
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: '/login',
    },
  }
);

export default async function middleware(req: NextRequest) {
  // console.log('req.nextUrl.pathname', req.nextUrl.pathname);

  // Mevcut isteği uyarlama
  const adaptedReq = {
    headers: Object.fromEntries(req.headers.entries()),
    method: req.method,
    url: req.url,
  };

  // Oturum kontrolü
  const session = await getSession({ req: adaptedReq });

  // Kullanıcı oturum açmışsa ve /login sayfasına gitmeye çalışıyorsa, ana sayfaya yönlendir
  if (session && req.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Dinamik yol için özel kontrol
  if (
    req.nextUrl.pathname.startsWith('/blogs/') ||
    req.nextUrl.pathname.startsWith('/posts/') ||
    req.nextUrl.pathname.startsWith('/en/posts') ||
    req.nextUrl.pathname.startsWith('/tr/blogs/') ||
    req.nextUrl.pathname.startsWith('/tr/posts/')
  ) {
    return intlMiddleware(req);
  }

  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
