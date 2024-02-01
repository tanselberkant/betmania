import React from 'react';
import SubscribeForm from '../subscribeForm/SubscribeForm';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const HomeSubscribeBanner = () => {
  const locale = useLocale();
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
        <div className="relative overflow-hidden rounded-lg border-mini-glow-purple">
          <div className="absolute inset-0 ">
            <Image
              width={500}
              height={500}
              src="https://images.pexels.com/photos/16826134/pexels-photo-16826134/free-photo-of-ball-on-football-pitch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="subscribe-banner-photo"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 px-2 py-32 sm:px-12 sm:py-40 lg:px-16 ">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <p className="my-3  text-3xl font-bold text-white">
                {locale === 'tr'
                  ? 'Kaçırmamak için abone olun!'
                  : "Subscribe so you don't miss it!"}
              </p>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscribeBanner;
