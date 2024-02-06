'use client';

import { convertDate } from '@/utils/convertDate';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {
  session?: string | null;
  results: TipsData;
};

const theads = ['Competitions', 'Teams', 'Tip', 'Odds', 'Results', 'Win'];

const UpdateTable = ({ results, session }: Props) => {
  const router = useRouter();

  // DELETING TABLE
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(
        `${process.env.BASIC_URL}/api/tables?id=${results._id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const content = await res.json();
      if (content.success) {
        router.push('/admin/dashboard');
      } else {
        alert('Something went wrong');
      }
    } catch (error: any) {
      alert('Error: ' + error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const [tips, setTips] = useState<TipData[]>(results.tips);
  const { day } = convertDate(results.day);

  // INPUT ONCHANGE
  const handleInputChange = (
    index: number,
    fieldName: string,
    newValue: string
  ) => {
    const updatedTips = tips.map((tip, idx) => {
      if (idx === index) {
        if (fieldName === 'win') {
          // Sadece 'win' veya 'lose' değerlerini kabul et
          return { ...tip, win: newValue === 'win' ? 'win' : 'lose' };
        }
        return { ...tip, [fieldName]: newValue };
      }
      return tip;
    });

    setTips(updatedTips);
  };

  // SUBMITTIN FORM
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Güncellenen Tips:', tips);

    const data = {
      id: results._id,
      tips: tips,
    };

    const res = await fetch(`${process.env.BASIC_URL}/api/tables `, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const content = await res.json();
    if (content.success > 0) {
      router.push('/admin/dashboard');
    }
  };

  return (
    <>
      <div className="flex justify-between items-center ">
        <h3 className="text-green-800 text-4xl my-5">{day} - Günü Datası</h3>
        {session === 'admin' && (
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="mr-4 border-2 rounded-md px-4 p-1 border-red-700 text-red-700"
          >
            Delete
          </button>
        )}
      </div>
      <div className="relative  bg-green-800">
        <form onSubmit={handleSubmit}>
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
              {tips.map((item: TipData, index: number) => {
                if (!item.competition) {
                  return null;
                }

                return (
                  <tr
                    key={item._id}
                    className="bg-[#a2e0a9] border-b text-green-800 "
                  >
                    <td className="px-6 py-4">
                      <input
                        className="border-2"
                        type="text"
                        name="competition"
                        value={item.competition}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            'competition',
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td scope="row" className="px-6 py-4">
                      <input
                        className="border-2"
                        type="text"
                        name="teams"
                        value={item.teams}
                        onChange={(e) =>
                          handleInputChange(index, 'teams', e.target.value)
                        }
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        className="border-2"
                        type="text"
                        name="tip"
                        value={item.tip}
                        onChange={(e) =>
                          handleInputChange(index, 'tip', e.target.value)
                        }
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        className="border-2"
                        type="number"
                        name="odds"
                        value={item.odds}
                        onChange={(e) =>
                          handleInputChange(index, 'odds', e.target.value)
                        }
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        className="border-2"
                        type="text"
                        name="result"
                        value={item.result}
                        onChange={(e) =>
                          handleInputChange(index, 'result', e.target.value)
                        }
                      />
                    </td>
                    <td className="px-6 py-4 flex items-center">
                      <div className="flex items-center mr-4">
                        <input
                          type="radio"
                          id={`win-${item._id}`}
                          name={`win-${item._id}`}
                          value="win"
                          checked={item.win === 'win'}
                          onChange={(e) =>
                            handleInputChange(index, 'win', e.target.value)
                          }
                        />
                        <label htmlFor={`win-${item._id}`} className="ml-2">
                          Win
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id={`lose-${item._id}`}
                          name={`win-${item._id}`}
                          value="lose"
                          checked={item.win === 'lose'}
                          onChange={(e) =>
                            handleInputChange(index, 'win', e.target.value)
                          }
                        />
                        <label htmlFor={`lose-${item._id}`} className="ml-2">
                          Lose
                        </label>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="py-2 flex justify-end px-4">
            <button
              type="submit"
              className="px-4 py-1 text-white border-[2px] bg-black rounded-lg border-white"
            >
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateTable;
