"use client";
import { usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Image from "next/image";

const Switcher = () => {
  const router = useRouter();
  const pathName = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (event: any) => {
    // console.log(event);
    // const locale = event.target.value;
    const locale = event;
    const cleanedPathName = pathName.startsWith("/")
      ? pathName
      : "/" + pathName;

    // console.log(cleanedPathName, cleanedPathName.startsWith('/blog/'));

    if (cleanedPathName.startsWith("/blog/") && locale === "en") {
      router.push(`/en/blog`);
    } else if (cleanedPathName.startsWith("/blog/") && locale === "tr") {
      router.push(`/tr/blog`);
    } else if (locale === "en") {
      router.push(`/en${cleanedPathName}`);
    } else {
      router.push(`/tr${cleanedPathName}`);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div>
        {locale === "en" ? (
          <Menu.Button className="inline-flex items-center gap-2 justify-center w-24  px-2 py-2 text-sm font-medium text-gray-700 ">
            <Image
              className="h-3 w-auto object-contain"
              src="/layout/brits.jpeg"
              alt="english-language"
              width={500}
              height={500}
            />
            ENG
            <ChevronDownIcon
              className="-mr-1 h-4 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        ) : (
          <Menu.Button className="inline-flex items-center gap-2 justify-center w-20  px-2 py-2 text-sm font-medium text-gray-700 -ml-2 ">
            <Image
              className="h-3 w-auto object-contain"
              src="/layout/tr.png"
              alt="turkish-language"
              width={500}
              height={500}
            />
            TR
            <ChevronDownIcon
              className="-mr-1 h-4 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        )}
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleLanguageChange("tr")}
                className={`${
                  active ? "bg-gray-200" : "text-gray-700"
                } flex w-full items-center rounded-md px-4 py-2 text-sm gap-2`}
              >
                <Image
                  className="h-3 w-auto object-contain"
                  src="/layout/tr.png"
                  alt="rexven-logo"
                  width={500}
                  height={500}
                />
                <span>{locale === "tr" ? "Türkçe" : "Turkish"} </span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleLanguageChange("en")}
                className={`${
                  active ? "bg-gray-200" : "text-gray-700"
                } flex w-full items-center rounded-md px-4 py-2 text-sm gap-2`}
              >
                <Image
                  className="h-3 w-auto object-contain"
                  src="/layout/brits.jpeg"
                  alt="rexven-logo"
                  width={500}
                  height={500}
                />
                <span>{locale === "tr" ? "İngilizce" : "English"} </span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Switcher;
