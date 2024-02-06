'use client';

import { convertDate } from '@/utils/convertDate';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  coupon: {
    _id?: string;
    advisorName: string;
    description: string;
    matches: {
      matchCode: string;
      date: string;
      versus: string;
      bets: string;
      odd: number;
    }[];
  };
};

const UserSingleBetTable = ({ coupon }: Props) => {
  const locale = useLocale();
  const [isCopied, setIsCopied] = useState(false);

  // ADVISOR CONFIGURATIONS
  let advisorName = ''; // Used for image string
  let advisorString = '';

  if (coupon.advisorName === 'Drake') {
    advisorName = 'Drake';
    advisorString =
      locale === 'tr' ? "Drake'in Kuponu" : "Drake's Betting Predictions";
  } else if (coupon.advisorName === 'Osman') {
    advisorName = 'Osman';
    advisorString =
      locale === 'tr'
        ? "Kazandıran Osman'ın Kuponu"
        : `Kazandıran Osman's Betting Predictions`;
  } else if (coupon.advisorName === 'Tolga') {
    advisorName = 'Tolga';
    advisorString =
      locale === 'tr'
        ? "Tutturan Tolga'nın Kuponu"
        : `Tutturan Tolga's Betting Predictions`;
  }

  // Function to calculate total odds
  const calculateTotalOdds = () => {
    return coupon.matches
      .reduce((total, match) => total * match.odd, 1)
      .toFixed(2);
  };

  // Function to handle the copy to clipboard action
  const copyToClipboard = () => {
    // Construct the URL dynamically using the coupon._id and the current locale
    const couponUrl = `${window.location.origin}/${locale}/bets/${coupon._id}`;

    navigator.clipboard.writeText(couponUrl).then(() => {
      setIsCopied(true); // Set isCopied to true to trigger the animation
      setTimeout(() => setIsCopied(false), 2000); // Reset isCopied after 2 seconds to allow re-triggering the animation
    });
  };

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="flex justify-between my-5 pr-10">
            <div className="flex gap-6">
              <Image
                className="w-[100px]"
                src={`/bets/${advisorName}.png`}
                height={500}
                width={500}
                alt={advisorName + 'profil picture'}
              />
              <Link href={`/bets/${coupon._id}`}>
                <h2 className="text-lg font-semibold  text-orbitPurple">
                  {advisorString}
                </h2>
                <p className="text-gray-300 text-left text-lg mt-2">
                  {coupon.description}
                </p>
              </Link>
            </div>
            <div>
              <button
                onClick={copyToClipboard}
                className={`border-gray-300 border-[1.5px] text-lg rounded-md text-white px-4 py-2 border-mini-glow font-semibold glow-hover ${
                  isCopied ? 'animate-pulse' : ''
                }`}
              >
                {isCopied
                  ? locale === 'tr'
                    ? 'Kopyalandı!'
                    : 'Copied!'
                  : locale === 'tr'
                  ? 'Linki Kopyala'
                  : 'Copy Link'}
              </button>
            </div>
          </div>

          <table className="min-w-full divide-y divide-orbitPurple  border-l-2 border-orbitPurple">
            <thead>
              <tr>
                {/* <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                  Match Code
                </th> */}
                <th className="px-3 py-3.5 text-center text-sm font-semibold text-white">
                  Date
                </th>
                <th className="px-3 py-3.5 text-center text-sm font-semibold text-white">
                  Versus
                </th>
                <th className="px-3 py-3.5 text-center text-sm font-semibold text-white">
                  Bets
                </th>
                <th className="px-3 py-3.5 text-center  text-sm font-semibold text-white">
                  Odd
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {coupon.matches.map((match, key) => {
                let day, dayEng;
                if (match.date) {
                  const convertedDate = convertDate(match.date);
                  day = convertedDate.day;
                  dayEng = convertedDate.dayEng;
                } else {
                  day = '-';
                  dayEng = '-';
                }
                return (
                  <tr key={key}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {locale === 'tr' ? day : dayEng}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {match.versus}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {match.bets}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {match.odd.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="text-end pr-8 mb-20 mt-6 text-gray-300 font-semibold text-lg">
            {locale === 'tr' ? (
              <>
                <>Toplam Oran: </>
                <span className="text-lg text-orbitPurple">
                  {calculateTotalOdds()}{' '}
                </span>
              </>
            ) : (
              <>
                <>Total Odds: </>
                <span className="text-lg text-orbitPurple">
                  {calculateTotalOdds()}{' '}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSingleBetTable;
