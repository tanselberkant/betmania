import React from 'react';
import Image from 'next/image';

import { EnvelopeIcon, ArrowDownIcon } from '@heroicons/react/20/solid';
import { useLocale } from 'next-intl';
import SubscribeForm from '../subscribe/SubscribeForm';

const HomeBanner = () => {
  const locale = useLocale();
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            {locale === 'tr' ? (
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                <span className="text-orbitPurple-custom">BetOrbit</span>'e Hoş
                Geldiniz
              </h1>
            ) : (
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Welcome to{' '}
                <span className="text-orbitPurple-custom">BetOrbit</span>
              </h1>
            )}
            <h2 className="mt-12 text-lg leading-8 text-gray-300">
              {locale === 'tr' ? (
                <>
                  Bahis Evreniniz! Yıldızlar arası en keskin bahis tavsiyeleri,
                  maç analizleri ve kazanma stratejileriyle galaksiler ötesi bir
                  keşfe çıkın. Futbolun büyüleyici dünyasında, her bir maç bir
                  gezegen kadar zengin ve çeşitli. BetOrbit, size bu evrende
                  gezinirken, en değerli bahis fırsatlarını bulmanız için
                  rehberlik eder.
                </>
              ) : (
                <>
                  Your Betting Universe! The sharpest betting tips between the
                  stars, match on a transgalactic exploration with analysis and
                  winning strategies. get out In the fascinating world of
                  football, each match is a planet So rich and diverse. BetOrbit
                  helps you navigate this universe, It guides you to find
                  valuable betting opportunities.
                </>
              )}
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-300">
              {locale === 'tr'
                ? 'Kaçırmamak için abone olun!'
                : "Subscribe so you don't miss it!"}
            </p>
            <div className="mt-10 flex items-center gap-x-6 w-full ">
              <SubscribeForm />
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="/home/homeBanner.png"
                alt="app screen"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 h-[75%] "
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-16 md:bottom-32 lg:bottom-40 flex   justify-center w-full py-10">
          <div className="flex flex-col justify-center items-center">
            <ArrowDownIcon
              className=" animate-bounce border-gray-300 glow-border h-10 w-7 text-white border-mini-glow"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
