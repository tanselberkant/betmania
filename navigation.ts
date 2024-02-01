import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';

export const locales = ['en', 'tr'] as const;

export const pathnames = {
  '/': '/',
  '/bahisler': {
    en: '/bets',
    tr: '/bahisler',
  },
  '/bets': {
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
  // ADMIN PAGES
  '/admin/dashboard': {
    en: '/admin/dashboard',
    tr: '/admin/dashboard',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
