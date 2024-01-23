import Image from 'next/image';
import React from 'react';

type Props = {
  results: TipData[];
};

const Table = ({ results }: Props) => {
  console.log(results);
  const theads = [
    'Time',
    'Flag',
    'Country',
    'Competitions',
    'Teams',
    'Tip',
    'Odds',
    'Results',
  ];

  return (
    <>
      <h3 className="text-green-800 text-4xl my-5">
        20.12.2023 - TIPS OF DAY{' '}
      </h3>
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
            {results.map((item: TipData) => {
              if (!item.competition) {
                // Eğer competition yoksa, bu öğeyi atla
                return null;
              }

              return (
                <tr
                  key={item._id}
                  className="bg-[#a2e0a9] border-b text-green-800 "
                >
                  <td className="px-6 py-4">{item.time} </td>
                  <td className="px-6 py-4">
                    <Image
                      src={item.countryFlagImageUrl}
                      alt={`${item.country} flag`}
                      className="h-5 w-5"
                      width={500}
                      height={500}
                    />
                  </td>
                  <td className="px-6 py-4">{item.country} </td>
                  <td className="px-6 py-4">{item.competition} </td>
                  <td scope="row" className="px-6 py-4">
                    {item.teams}
                  </td>
                  <td className="px-6 py-4">{item.tip} </td>
                  <td className="px-6 py-4">{item.odds} </td>
                  <td className="px-6 py-4">{item.result} </td>
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
