'use client';
import { deleteTable } from '@/lib/actions';
import { adjustTimeForLocale } from '@/utils/adjustTimeForLocale';
import { convertDate } from '@/utils/convertDate';
import { useLocale } from 'next-intl';
// import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { PiSoccerBallLight } from 'react-icons/pi';

type Props = {
  session?: string | null;
  results: TipsData;
};

const theads = [
  'Time',
  'Sport',
  'Country',
  'Competitions',
  'Teams',
  'Tip',
  'Odds',
  'Results',
];

const AdminTable = ({ results, session }: Props) => {
  const locale = useLocale();
  const { day, dayEng } = convertDate(results.day);
  const [state, formAction] = useFormState(deleteTable, undefined);
  const router = useRouter();

  // CATCHING THE STATE OF THE FORM
  useEffect(() => {
    if (state === 'Table deleted successfully') {
      router.push('/admin/tables');
    } else if (state === 'Something went wrong') {
      alert('Something went wrong');
    }
  }, [state, router]);

  return (
    <>
      <div className="flex justify-between items-center ">
        <h3 className="text-green-800 text-4xl my-5">
          {locale === 'tr'
            ? `${day} - Günün Bahisleri`
            : `${dayEng} - Tips Of Day`}
        </h3>
        {session === 'admin' && (
          <div className="flex ">
            <Link
              className="mr-4 border-2 rounded-md px-4 p-1 border-green-700"
              href={`/admin/tables/${results._id}`}
            >
              <h1 className="text-lg font-semibold leading-6 text-black">
                Update
              </h1>
            </Link>
            <form action={deleteTable}>
              <input type="hidden" name="id" value={results._id} />
              <button className="mr-4 border-2 rounded-md px-4 p-1 border-red-700 text-red-700">
                Delete
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="relative  bg-green-800">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-sm text-white uppercase bg-green-800 ">
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminTable;
