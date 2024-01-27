'use client';

import { addTable } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useFormState } from 'react-dom';

const TableAddForm = () => {
  const [state, formAction] = useFormState(addTable, undefined);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // CATCHING THE STATE OF THE FORM
  useEffect(() => {
    if (state === 'Table saved successfully') {
      router.push('/admin/tables');
    } else if (state === 'Something went wrong') {
      setErrorMessage('An error occurred. Please try again.');
    } else if (state === 'No date provided') {
      setErrorMessage('Gün Girmediniz');
    }
  }, [state, router]);

  // DEFAULT STATE
  const [formData, setFormData] = useState<TipsData>({
    day: '',
    tips: [
      {
        time: '',
        countryFlagImageUrl:
          'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
        country: '',
        sportIconUrl: 'sportIcon',
        competition: '',
        teams: '',
        tip: '',
        odds: '',
        result: '?',
        resultColor: '#008000',
        win: 'win',
      },
    ],
  });

  // HANDLING INPUT CHANGES
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    index = 0
  ) => {
    const { name, value } = e.target;

    // 'day' alanını güncelleme
    if (name === 'day') {
      setFormData({ ...formData, day: value });
    } else if (name === 'advisorName' || name === 'description') {
      setFormData({ ...formData, [name]: value });
    } else {
      const updatedMatches = formData.tips.map((match, idx) =>
        index === idx ? { ...match, [name]: value } : match
      );
      setFormData({ ...formData, tips: updatedMatches });
    }
  };

  // ADDING A BET
  const addMatch = () => {
    setFormData({
      ...formData,
      tips: [
        ...formData.tips,
        {
          time: '',
          countryFlagImageUrl: 'xxx',
          country: '',
          sportIconUrl: 'sportIcon',
          competition: '',
          teams: '',
          tip: '',
          odds: '',
          result: '?',
          resultColor: '#008000',
          win: 'win',
        },
      ],
    });
  };

  // REMOVING A BET
  const removeMatch = (index: number) => {
    setFormData({
      ...formData,
      tips: formData.tips.filter((_, idx) => idx !== index),
    });
  };

  // SUBMITTIN THE FORM
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log('formData', formData);
    formAction(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" rounded-md py-2">
        <div className="my-4">
          <h2>Tablo Tarihi ekle </h2>

          <input
            className="border-[1px] rounded-md p-1"
            type="date"
            name="day"
            value={formData.day}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="border-[1px] py-3.5 text-center text-sm font-semibold text-white w-[40px] bg-indigo-600 rounded-t-md "
              >
                Saat
              </th>
              <th
                scope="col"
                className="border-[1px] py-3.5 text-center text-sm font-semibold text-white w-[40px] bg-indigo-600 rounded-t-md "
              >
                Ülke
              </th>
              <th
                scope="col"
                className="border-[1px] py-3.5 text-center text-sm font-semibold text-white w-[40px] bg-indigo-600 rounded-t-md "
              >
                Turnuva
              </th>

              <th
                scope="col"
                className="border-[1px] py-3.5 text-center text-sm font-semibold text-white w-[300px] bg-indigo-600 rounded-t-md "
              >
                Karşılaşma
              </th>
              <th
                scope="col"
                className="border-[1px] py-3.5 text-center text-sm font-semibold text-white w-[40px] bg-indigo-600 rounded-t-md "
              >
                Tahmin
              </th>
              <th
                scope="col"
                className="border-[1px] py-3.5 text-center text-sm font-semibold text-white w-[40px] bg-indigo-600 rounded-t-md "
              >
                Oran
              </th>
              <th
                scope="col"
                className="border-[1px] py-3.5 text-center text-sm font-semibold text-white w-[40px] bg-indigo-600 rounded-t-md "
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {formData.tips.map((match, index) => (
              <tr key={index}>
                {/* TIME  */}
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input
                    className="border-[1px] rounded-md p-1 w-[60px]"
                    type="text"
                    name="time"
                    value={match.time}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="14:00"
                  />
                </td>
                {/* COUNTRY */}
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input
                    placeholder="England"
                    className="border-[1px] rounded-md p-1 w-[120px]"
                    type="text" // Tarih seçici tipini burada belirtin
                    name="country"
                    value={match.country}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                {/* COMPETITION */}
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  <input
                    className="border-[1px] -ml-4 rounded-md p-1 w-[220px] "
                    type="text"
                    name="competition"
                    value={match.competition}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Bundesliga"
                  />
                </td>
                {/* TEAMS */}
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  <input
                    className="border-[1px] -ml-4 rounded-md p-1 w-[280px] "
                    type="text"
                    name="teams"
                    value={match.teams}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Fulham – Liverpool"
                  />
                </td>
                {/* TIP */}
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input
                    className="border-[1px] rounded-md p-1 "
                    type="text"
                    name="tip"
                    value={match.tip}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="x2"
                  />
                </td>
                {/* ODDS */}
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input
                    className="border-[1px] rounded-md p-1 w-[60px]"
                    type="number"
                    name="odds"
                    value={match.odds}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="1.05"
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
        <div className="mt-2 mb-4 text-center text-red-600 text-sm">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default TableAddForm;
