import { convertDate } from '@/utils/convertDate';
import { useLocale } from 'next-intl';
import Link from 'next/link';
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
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className=" flex my-7 ">
            <div>
              {locale === 'tr' ? (
                <h1 className="text-lg font-semibold leading-6 text-orbitPurple">
                  {`${coupon.advisorName}'in Kuponu`}
                </h1>
              ) : (
                <h1 className="text-lg font-semibold leading-6 text-orbitPurple">
                  {`${coupon.advisorName}'s Betting Predictions`}
                </h1>
              )}
              <p className="text-gray-300 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium nulla illo molestias sit consectetur. Consectetur
                suscipit quis quasi veniam nihil? Fuga officiis natus fugiat,
                nesciunt iusto libero ea facere blanditiis.
              </p>
            </div>

            <div className="flex gap-4"></div>
          </div>
          <table className="min-w-full divide-y divide-gray-700  border-l-2 border-orbitPurple">
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
        </div>
      </div>
    </div>
  );
};

export default BetUserTable;
