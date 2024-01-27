'use client';
import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { convertDate } from '@/utils/convertDate';
import { classNames } from '@/utils/conditionalClasses';
import { adjustTimeForLocale } from '@/utils/adjustTimeForLocale';
import { PiSoccerBallLight } from 'react-icons/pi';

type Props = {
  session?: string | null;
  results: TipsData;
};

const Table = ({ results, session }: Props) => {
  const locale = useLocale();
  const { day, dayEng } = convertDate(results.day);

  // Başlangıçta tüm oranları seçili olarak ayarlayın
  const initialOdds = results.tips.map((tip) => parseFloat(tip.odds));
  const [selectedOdds, setSelectedOdds] = useState<number[]>(initialOdds);

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
  const allOdds = results.tips.reduce(
    (total, tip) => total * parseFloat(tip.odds),
    1
  );

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
          'Çıkar',
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
          'Remove',
        ];

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-green-800 text-4xl my-5">
          {locale === 'tr'
            ? `${day} - Günün Bahisleri`
            : `${dayEng} - Tips Of Day`}
        </h3>
        {session === 'admin' && (
          <Link
            href={`/admin/tables/${results._id}`}
            className="mr-4 border-2 rounded-md px-4 p-1 border-green-700"
          >
            <h1 className="text-lg font-semibold leading-6 text-black">
              Update
            </h1>
          </Link>
        )}
      </div>
      <div className="relative bg-indigo-400 rounded-t-md">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-sm text-white uppercase bg-indigo-400">
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
                return null;
              }

              const oddsValue = parseFloat(item.odds);
              return (
                <tr
                  key={item._id}
                  className="bg-[#a2e0a9] border-b text-green-800"
                >
                  <td className="px-6 py-4">
                    {adjustTimeForLocale(item.time, locale)}
                  </td>
                  <td className="px-6 py-4">
                    <PiSoccerBallLight
                      color="FF0000"
                      className="animate-spin w-5 h-5"
                    />
                  </td>
                  <td className="px-6 py-4">{item.country}</td>
                  <td className="px-6 py-4">{item.competition}</td>
                  <td scope="row" className="px-6 py-4">
                    {item.teams}
                  </td>
                  <td className="px-6 py-4">{item.tip}</td>
                  <td className="px-6 py-4">{item.odds}</td>
                  <td
                    className={classNames(
                      item.win === 'win' ? 'text-green-600' : 'text-red-700',
                      'px-11 py-4'
                    )}
                  >
                    {item.result}
                  </td>
                  <td className="pl-7 py-4">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, item.odds)}
                      checked={selectedOdds.includes(oddsValue)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-center my-2">
          {locale === 'tr'
            ? `Seçilen Toplam Oran: ${totalOdds.toFixed(2)}`
            : `Total Rate Selected: ${totalOdds.toFixed(2)}`}
        </p>
      </div>
    </>
  );
};

export default Table;
