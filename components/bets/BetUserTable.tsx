import { convertDate } from '@/utils/convertDate';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import React from 'react';

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

const BetUserTable = ({ coupon }: Props) => {
  const locale = useLocale();

  // Function to calculate total odds
  const calculateTotalOdds = () => {
    return coupon.matches
      .reduce((total, match) => total * match.odd, 1)
      .toFixed(2);
  };

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="flex justify-between my-5 pr-10">
            <div className="flex gap-6">
              <Image
                className="w-[100px]"
                src={`/bets/${coupon.advisorName}.png`}
                height={500}
                width={500}
                alt={coupon.advisorName + 'profil picture'}
              />
              <div>
                {locale === 'tr' ? (
                  <h2 className="text-lg font-semibold leading-6 text-orbitPurple">
                    {`${coupon.advisorName}'in Kuponu`}
                  </h2>
                ) : (
                  <h2 className="text-lg font-semibold leading-6 text-orbitPurple">
                    {`${coupon.advisorName}'s Betting Predictions`}
                  </h2>
                )}
                <p className="text-gray-300 mt-2">{coupon.description}</p>
              </div>
            </div>
            {/* <div>
              <button className=" border-gray-300 border-[1.5px] rounded-md text-white px-4 py-2 border-mini-glow font-semibold glow-hover">
                Share
              </button>
            </div> */}
          </div>

          <table className="min-w-full divide-y divide-orbitPurple  border-l-2 border-orbitPurple">
            <thead>
              <tr>
                {/* <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                  Match Code
                </th> */}
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  Date
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  Versus
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  Bets
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
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
                    {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                        {match.matchCode}
                      </td> */}
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
                      {match.odd}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="text-end pr-8 mb-20 mt-6 text-gray-300 font-semibold">
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

export default BetUserTable;
