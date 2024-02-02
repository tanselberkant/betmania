import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';

export const locales = ['en', 'tr'] as const;

export const pathnames = {
  '/': '/',
  '/bets': {
    en: '/bets',
    tr: '/bahisler',
  },
  '/bahisler': {
    en: '/bets',
    tr: '/bahisler',
  },
  '/tables': {
    en: '/tables',
    tr: '/tablolar',
  },
  '/tablolar': {
    en: '/tables',
    tr: '/tablolar',
  },
  '/posts': {
    en: '/posts',
    tr: '/blogs',
  },
  '/blogs': {
    en: '/posts',
    tr: '/blogs',
  },
  // ADMIN PAGES
  '/admin/dashboard': {
    en: '/admin/dashboard',
    tr: '/admin/dashboard',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
