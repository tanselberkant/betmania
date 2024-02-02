import React from 'react';

const TableWrapperSuspense = () => {
  const placeholderRows = Array.from({ length: 8 }); // 8 elemanlı bir dizi oluştur
  return (
    <div className="grid grid-cols-12 gap-10 relative ">
      <div className="col-span-9 animate-pulse">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 table-border ">
            <table className="min-w-full divide-y divide-gray-700 ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0 uppercase"
                  >
                    <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                  >
                    <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                  >
                    <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                  >
                    <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                  >
                    <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                  >
                    <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                  >
                    <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Pick</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {placeholderRows.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-white sm:pl-0">
                        <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                        <div className="w-[30%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                        <div className="w-[30%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                        <div className="w-[40%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                        <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                        <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      </td>
                      <td
                        className={'whitespace-nowrap px-3 py-4 text-sm pl-7 '}
                      >
                        <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="text-end my-4 font-semibold text-white ">
              <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:col-span-3 mt-20 ">
        <div className="sticky top-24">
          <div
            style={{ border: `2px solid #d1d5db` }}
            className="rounded-xl p-4 h-[377px] glow-hover border-mini-glow border-2 border-[#d1d5db] "
          >
            <p className="text-center text-white text-base lg:text-lg font-medium mb-4 h-[40px] ">
              <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
            </p>
            <div className="w-[80%] h-[120px] lg:h-[160px] mx-auto  rounded-xl mb-6">
              <div className=" bg-gray-300 h-2.5 rounded-full mb-2"></div>
            </div>
            <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableWrapperSuspense;
