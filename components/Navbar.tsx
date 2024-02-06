'use client';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Switcher from './Switcher';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import CompanyImage from './CompanyImage';

type Props = {
  session: Session | null;
};

export default function Navbar({ session }: Props) {
  const locale = useLocale();

  function onLogoutClick() {
    signOut();
  }
  useEffect(() => {}, [session]);

  return (
    <Disclosure as="nav" className="bg-betOrbitMainDark">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2   rounded-xl">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  {/* <CompanyImage classes={'h-8 w-auto'} /> */}
                  <Link href={'/'}>
                    <span className="text-3xl font-semibold  text-orbitPurple-custom">
                      BetOrbit
                    </span>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
                <Link
                  href={'/'}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-betOrbitMainSilver hover:text-gray-400"
                >
                  {locale === 'en' ? 'Home' : 'Anasayfa'}
                </Link>
                <Link
                  href="/tables"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-betOrbitMainSilver hover:text-gray-400"
                >
                  {locale === 'en' ? 'Tables' : 'Tablolar'}
                </Link>
                <Link
                  href={'/bets'}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-betOrbitMainSilver hover:text-gray-400"
                >
                  {locale === 'en' ? 'Bets' : 'Bahisler'}
                </Link>
                <Link
                  href={'/posts'}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-betOrbitMainSilver hover:text-gray-400"
                >
                  {locale === 'en' ? 'Posts' : 'Blog'}
                </Link>

                {session && (
                  <>
                    <Link
                      href={'/admin/dashboard'}
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-betOrbitMainSilver hover:text-gray-400"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={onLogoutClick}
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-betOrbitMainSilver hover:text-gray-400"
                    >
                      LogOut
                    </button>
                  </>
                )}
                <div className=" mx-auto flex justify-center">
                  <Switcher />
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-betOrbitMainSilver focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 pb-3 pt-2">
              <Link href={'/'} passHref>
                <Disclosure.Button
                  as="a"
                  className="block border-l-4 border-indigo-500  py-2 pl-3 pr-4 text-base text-center text-gray-300 font-semibold"
                >
                  {locale === 'tr' ? 'Anasayfa' : 'Home'}
                </Disclosure.Button>
              </Link>
              <Link href={'/tables'} passHref>
                <Disclosure.Button
                  as="a"
                  className="block border-l-4 border-indigo-500  py-2 pl-3 pr-4 text-base text-center text-gray-300 font-semibold"
                >
                  {locale === 'tr' ? 'Tablolar' : 'Tables'}
                </Disclosure.Button>
              </Link>
              <Link href={'/bets'} passHref>
                <Disclosure.Button
                  as="a"
                  className="block border-l-4 border-indigo-500  py-2 pl-3 pr-4 text-base text-center text-gray-300 font-semibold"
                >
                  {locale === 'tr' ? 'Bahisler' : 'Bets'}
                </Disclosure.Button>
              </Link>
              <Link href={'/posts'} passHref>
                <Disclosure.Button
                  as="a"
                  className="block border-l-4 border-indigo-500  py-2 pl-3 pr-4 text-base text-center text-gray-300 font-semibold"
                >
                  {locale === 'tr' ? 'Blog' : 'Posts'}
                </Disclosure.Button>
              </Link>
              {session && (
                <>
                  <Link href="/admin/dashboard" passHref>
                    <Disclosure.Button
                      as="a"
                      className="block border-l-4 border-indigo-500  py-2 pl-3 pr-4 text-base text-center text-gray-300 font-semibold"
                    >
                      Dashboard
                    </Disclosure.Button>
                  </Link>
                  <button
                    onClick={onLogoutClick}
                    className="w-full text-center  block py-2 text-base text-betOrbitMainSilver hover:text-gray-400"
                  >
                    LogOut
                  </button>
                </>
              )}
              <Disclosure.Button
                as="div"
                className="block   py-2 pl-3 pr-4 text-base text-center text-gray-300 font-semibold"
              >
                <Switcher />
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
