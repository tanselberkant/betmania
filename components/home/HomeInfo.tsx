import { Link } from '@/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const HomeInfo = () => {
  const locale = useLocale();
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <div
          className="teamCardWrapper"
          style={{
            background: `linear-gradient(0deg, #6366f1 24.75%, rgba(31, 37, 75, 100%) 100%)`,
          }}
        >
          <Image
            style={{
              border: `1px solid #6366f1`,
            }}
            width={600}
            height={600}
            src="/home/info.png"
            className={`h-full w-full -z-10 object-fit rounded-[2px]  innerCardImage `}
            alt="Home Info"
          />
        </div>
        {/* <Image
          width={500}
          height={500}
          className="h-full w-full object-cover"
          src="/home/info.png"
          alt="Home Info"
        /> */}
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {locale === 'tr' ? 'Kazandıran Kuponlar' : 'Winning Bets'}
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-300">
            {locale === 'tr' ? (
              <>
                BetOrbit, bahisçilerin yeni evi - nerede olursanız olun,
                kazanmanın sınırlarını zorlayın. BetOrbit Adminlerinin
                hazırladığı kuponlara göz atın ve kazanma şansınızı arttırın
              </>
            ) : (
              <>
                BetOrbit, the new home of bettors - where to win, wherever you
                are push your limits. Coupons prepared by BetOrbit Admins Check
                it out and increase your chances of winning
              </>
            )}
          </p>
          <div className="mt-8 flex w-full ">
            <Link href="/bets" className="flex w-[80%]">
              <button className="w-full border-gray-300 border-[1.5px] rounded-md text-white py-3 border-mini-glow font-semibold glow-hover">
                {locale === 'tr' ? 'Kuponlara Göz at' : 'Browse Bets'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
