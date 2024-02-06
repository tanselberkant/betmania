'use client';

import { deleteBet } from '@/lib/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';

type Props = {
  session?: string;
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

const BetsTable = ({ coupon, session }: Props) => {
  const [state, formAction] = useFormState(deleteBet, undefined);
  const router = useRouter();

  // CATCHING THE STATE OF THE FORM
  useEffect(() => {
    if (state === 'Bet deleted successfully') {
      router.push('/admin/bets');
    } else if (state === 'Something went wrong') {
      alert('Something went wrong');
    }
  }, [state, router]);

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-10 mt-2">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <div className=" flex justify-between">
                <h1 className="text-lg font-semibold leading-6 text-white">
                  {coupon.advisorName}
                </h1>

                {session === 'admin' && (
                  <form action={deleteBet}>
                    <input type="hidden" name="id" value={coupon._id} />
                    <button className="border-2 border-gray-500 px-3 py-1 text-white rounded-md">
                      Delete
                    </button>
                  </form>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-300">{coupon.description}</p>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                        Match Code
                      </th>
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
                    {coupon.matches.map((match, key) => (
                      <tr key={key}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                          {match.matchCode}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {match.date}
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetsTable;
