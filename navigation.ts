import {
    createLocalizedPathnamesNavigation,
    Pathnames,
  } from "next-intl/navigation";
  
  export const locales = ["en", "tr"] as const;
  
  export const pathnames = {
    "/": "/",
    '/dashboard': {
      en: '/dashboard',
      tr: '/dashboard',
    },
    // '/contact': {
    //   en: '/contact',
    //   tr: '/iletisim',
    // },
  } satisfies Pathnames<typeof locales>;
  
  export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({ locales, pathnames });
  