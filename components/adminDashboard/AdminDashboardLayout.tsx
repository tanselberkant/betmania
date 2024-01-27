'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  DocumentDuplicateIcon,
  FolderIcon,
  FolderPlusIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { classNames } from '@/utils/conditionalClasses';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export default function Example({ children, session }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [navigation, setNavigation] = useState(
    session?.user.name === 'user'
      ? [
          {
            name: 'Dashboard',
            href: `/admin/dashboard`,
            icon: HomeIcon,
          },
          { name: 'Kuponlar', href: `/admin/bets`, icon: FolderIcon },
          { name: 'Kupon Ekle', href: `/admin/add-bets`, icon: FolderPlusIcon },
        ]
      : [
          {
            name: 'Dashboard',
            href: `/admin/dashboard`,
            icon: HomeIcon,
          },
          { name: 'Tablolar', href: `/admin/tables`, icon: UsersIcon },
          { name: 'Tablo Ekle', href: `/admin/add-table`, icon: UsersIcon },
          { name: 'Kuponlar', href: `/admin/bets`, icon: FolderIcon },
          { name: 'Kupon Ekle', href: `/admin/add-bets`, icon: FolderPlusIcon },
          {
            name: 'Reports',
            href: `/admin/reports`,
            icon: DocumentDuplicateIcon,
          },
        ]
  );

  function onLogoutClick() {
    signOut();
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <Link href={'/'} className="text-white text-xl w-full">
                        Betmania
                      </Link>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      'text-indigo-200 group-hover:text-white',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}

                            <li key={'1111'}>
                              <button
                                onClick={onLogoutClick}
                                className={classNames(
                                  'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full'
                                )}
                              >
                                <UserIcon
                                  className={classNames(
                                    'text-indigo-200 group-hover:text-white',
                                    'h-6 w-6 shrink-0 '
                                  )}
                                  aria-hidden="true"
                                />
                                LogOut
                              </button>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-52  lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
            <div className="flex h-16 shrink-0 items-center ">
              <Link href={'/'} className="text-white text-xl w-full">
                Betmania
              </Link>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={classNames(
                            'text-indigo-200 hover:text-white hover:bg-indigo-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              'text-indigo-200 group-hover:text-white',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li key={'111'}>
                      <button
                        onClick={onLogoutClick}
                        className={classNames(
                          'text-indigo-200 hover:text-white hover:bg-indigo-700',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full'
                        )}
                      >
                        <UserIcon
                          className={classNames(
                            'text-indigo-200 group-hover:text-white',
                            'h-6 w-6 shrink-0 '
                          )}
                          aria-hidden="true"
                        />
                        LogOut
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-indigo-200 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <main className="py-10 lg:pl-52 ">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}

const navigation = [
  {
    name: 'Dashboard',
    href: `/admin/dashboard`,
    icon: HomeIcon,
  },
  { name: 'Tables', href: `/admin/tables`, icon: UsersIcon },
  { name: 'Coupons', href: `/admin/coupons`, icon: FolderIcon },
  {
    name: 'Reports',
    href: `/admin/reports`,
    icon: DocumentDuplicateIcon,
  },
];
