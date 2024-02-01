'use client';

import { addBet } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent, useEffect, use } from 'react';
import { useFormState } from 'react-dom';

const BetsAddForm = () => {
  const [state, formAction] = useFormState(addBet, undefined);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // CATCHING THE STATE OF THE FORM
  useEffect(() => {
    if (state === 'Bet saved successfully') {
      router.push('/admin/bets');
    } else if (state === 'An error was encountered while registering a bet') {
      setErrorMessage('An error occurred. Please try again.');
    }
  }, [state, router]);

  // DEFAULT STATE
  const [formData, setFormData] = useState<BetsData>({
    advisorName: 'Drake', // first-default value
    description: '',
    matches: [{ matchCode: '', date: '', versus: '', bets: '', odd: 1.0 }],
  });

  // HANDLING INPUT CHANGES
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    index = 0
  ) => {
    const { name, value } = e.target;

    if (name === 'advisorName' || name === 'description') {
      setFormData({ ...formData, [name]: value });
    } else {
      const updatedMatches = formData.matches.map((match, idx) =>
        index === idx ? { ...match, [name]: value } : match
      );
      setFormData({ ...formData, matches: updatedMatches });
    }
  };

  // HADNLING BET SELECT CHANGE
  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedMatches = formData.matches.map((match, idx) =>
      index === idx ? { ...match, [name]: value } : match
    );
    setFormData({ ...formData, matches: updatedMatches });
  };

  // ADDING A BET
  const addMatch = () => {
    setFormData({
      ...formData,
      matches: [
        ...formData.matches,
        { matchCode: '', date: '', versus: '', bets: '', odd: 1.0 },
      ],
    });
  };

  // REMOVING A BET
  const removeMatch = (index: number) => {
    setFormData({
      ...formData,
      matches: formData.matches.filter((_, idx) => idx !== index),
    });
  };

  // SUBMITTIN THE FORM
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formAction(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="border-2 rounded-md py-2">
        <div className="border-b border-gray-900/10 pb-12 px-2">
          <div className="mt-10 grid grid-cols-1 gap-x6 gap-y-6 sm:grid-col-6">
            {/* BAHISCI ADI */}
            <div className="sm:col-span-4 w-full ">
              <label className="pr-4 " htmlFor="advisorName">
                Bahis Giren Adı:
              </label>
              <select
                name="advisorName"
                value={formData.advisorName}
                onChange={handleInputChange}
                className="border-2 p-1"
              >
                <option value="Drake">Drake</option>
                <option value="Mosman">Mosman</option>
                <option value="Tolgar">Tolgar</option>
                <option value="Mercan">Mercan</option>
              </select>
            </div>

            {/* BAHIS DESCRIPTION */}
            <div className="sm:col-span-4 flex items-center">
              <label className="pr-4 " htmlFor="advisorName">
                Bahis Açıklaması:
              </label>
              <textarea
                className="border-2 rounded-sm p-1"
                rows={3}
                cols={30}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Bahis Açıklaması..."
              />
            </div>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-1 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 w-[40px]"
              >
                Mac Kodu
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Tarih
              </th>
              <th
                scope="col"
                className="px-20  py-3.5 text-left text-sm font-semibold text-gray-900 w-[300px] "
              >
                Karsılasma
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Tahmin
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Oran
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Sil</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {formData.matches.map((match, index) => (
              <tr key={index}>
                {/* MATCH CODE */}
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input
                    className="border-[1px] rounded-md p-1  "
                    type="text"
                    name="matchCode"
                    value={match.matchCode}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="20831"
                  />
                </td>
                {/* DATE */}
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input
                    className="border-[1px] rounded-md p-1"
                    type="date" // Tarih seçici tipini burada belirtin
                    name="date"
                    value={match.date}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                {/* VERSUS */}
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  <input
                    className="border-[1px] rounded-md p-1  w-[300px] "
                    type="text"
                    name="versus"
                    value={match.versus}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Arsenal - Crystal Palace"
                  />
                </td>
                {/* BETS */}
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <select
                    name="bets"
                    value={match.bets}
                    // onChange={handleInputChange}
                    onChange={(e) => handleSelectChange(e, index)}
                    className="border-2 p-1"
                  >
                    <option>Seçiniz</option>
                    {resultOptions.map((opt, index) => (
                      <option key={index} value={opt}>
                        {opt}{' '}
                      </option>
                    ))}
                  </select>
                </td>
                {/* ODDS */}
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input
                    className="border-[1px] rounded-md p-1"
                    type="number"
                    name="odd"
                    value={match.odd}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Odd"
                  />
                </td>

                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <button
                    onClick={() => removeMatch(index)}
                    className="text-indigo-600 hover:text-indigo-900 px-2 py-1 border-indigo-600 border-[1px] rounded-md "
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-end space-x-4 px-4">
          <button
            className="bg-blue-500 text-white border-2 rounded-lg border-blue-500 hover:text-blue-300 p-2"
            type="button"
            onClick={addMatch}
          >
            Maç Ekle
          </button>
          <button
            className="bg-green-500 text-white border-2 rounded-lg border-green-500 hover:text-green-300 p-2"
            type="submit"
          >
            Gönder
          </button>
        </div>
      </form>
      {errorMessage && (
        <div className="mt-2 mb-4 text-center text-red-600 text-sm"> </div>
      )}
    </>
  );
};

export default BetsAddForm;

const resultOptions = [
  'MS X',
  'MS 2',
  'MS 1',
  '1-X',
  '1-2',
  'X-2',
  'HMS 1',
  'HMS X',
  'HMS 2',
  '0.5 ALT',
  'O.5 ÜST',
  '1.5 ALT',
  '1.5 ÜST',
  '2.5 ALT',
  '2.5 ÜST',
  '3.5 ALT',
  '3.5 ÜST',
  'KG VAR',
  'KG YOK',
  'Ev. Gol 0.5 AlT',
  'Ev. Gol 0.5 Üst',
  'Ev. Gol 1.5 AlT',
  'Ev. Gol 1.5 Üst',
  'Dep. Gol 0,5 ALT',
  'Dep. Gol 0,5 ÜST',
  'Dep. Gol 1,5 ALT',
  'Dep. Gol 1,5 ÜST',
];
