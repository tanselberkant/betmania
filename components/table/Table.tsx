'use client';
import { adjustTimeForLocale } from '@/utils/adjustTimeForLocale';
import { convertDate } from '@/utils/convertDate';
import { useLocale } from 'next-intl';
// import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { PiSoccerBallLight } from 'react-icons/pi';

type Props = {
  session?: string | null;
  results: TipsData;
};

const Table = ({ results, session }: Props) => {
  const locale = useLocale();
  const { day, dayEng } = convertDate(results.day);

  const [selectedOdds, setSelectedOdds] = useState<number[]>([]);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    odds: string
  ) => {
    const checked = e.target.checked;
    const oddsValue = parseFloat(odds);
    if (checked) {
      setSelectedOdds([...selectedOdds, oddsValue]);
    } else {
      setSelectedOdds(selectedOdds.filter((item) => item !== oddsValue));
    }
  };

  const totalOdds = selectedOdds.reduce((total, odds) => total * odds, 1);

  const calculateTotalOdds = () => {
    return results.tips.reduce((total, tip) => total * parseFloat(tip.odds), 1);
  };

  const allOdds = calculateTotalOdds();

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
                      onChange={(e) => handleCheckboxChange(e, item.odds)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-center my-2">
          Toplam Oran: {allOdds.toFixed(2)} | Seçtiğiniz Oran:{' '}
          {totalOdds.toFixed(2)}
        </p>
      </div>
    </>
  );
};

export default Table;
