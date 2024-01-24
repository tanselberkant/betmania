'use client';
import { adjustTimeForLocale } from '@/utils/adjustTimeForLocale';
import { convertDate } from '@/utils/convertDate';
import { useLocale } from 'next-intl';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiSoccerBallLight } from 'react-icons/pi';

type Props = {
  session?: string | null;
  results: TipsData;
};

const Table = ({ results, session }: Props) => {
  const locale = useLocale();
  // console.log(results);

  const { day, dayEng } = convertDate(results.day);

  const theads =
    locale === 'tr'
      ? [
          'Saat',
          'Branş',
          'Ülke',
          'Turnuva',
          'Takımlar',
          'Tahmin',
          'Oran',
          'Sonuç',
          'Ekle',
        ]
      : [
          'Time',
          'Sport',
          'Country',
          'Competitions',
          'Teams',
          'Tip',
          'Odds',
          'Results',
          'Add',
        ];

  return (
    <>
      <div className="flex justify-between items-center  ">
        <h3 className="text-green-800 text-4xl my-5">
          {locale === 'tr'
            ? `${day} - Günün Bahisleri`
            : `${dayEng} - Tips Of Day`}
        </h3>
        {session === 'admin' && (
          <Link
            className="mr-4 border-2 rounded-md px-4 p-1 border-green-700"
            href={`/admin/tables/${results._id}`}
          >
            <h1 className="text-lg font-semibold leading-6 text-black">
              Update
            </h1>
          </Link>
        )}
      </div>
      <div className="relative  bg-indigo-400 rounded-t-md">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-sm text-white uppercase bg-indigo-400 ">
            <tr>
              {theads.map((item, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.tips.map((item: TipData) => {
              if (!item.competition) {
                // Eğer competition yoksa, bu öğeyi atla
                return null;
              }

              return (
                <tr
                  key={item._id}
                  className="bg-[#a2e0a9] border-b text-green-800 "
                >
                  <td className="px-6 py-4">
                    {adjustTimeForLocale(item.time, locale)}{' '}
                  </td>
                  {/* <td className="px-6 py-4">
                    <Image
                      src={item.countryFlagImageUrl}
                      alt={`${item.country} flag`}
                      className="h-5 w-5"
                      width={500}
                      height={500}
                    />
                  </td> */}
                  <td className="px-6 py-4">
                    <PiSoccerBallLight
                      color="FF0000"
                      className=" animate-spin w-5 h-5"
                    />
                  </td>
                  <td className="px-6 py-4">{item.country} </td>
                  <td className="px-6 py-4">{item.competition} </td>
                  <td scope="row" className="px-6 py-4">
                    {item.teams}
                  </td>
                  <td className="px-6 py-4">{item.tip} </td>
                  <td className="px-6 py-4">{item.odds} </td>
                  <td className="px-11 py-4">{item.result} </td>
                  {/* CHECKBOX */}
                  <td className="pl-7 py-4">
                    <input
                      type="checkbox"
                      onChange={
                        (e) => console.log('here')
                        // handleCheckboxChange(e.target.checked, item.odds)
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
