import React from "react";

const Table = () => {
  return (
    <>
      <h3 className="text-green-800 text-4xl my-5">
        20.12.2023 - TIPS OF DAY{" "}
      </h3>
      <div className="relative  bg-green-800">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-sm text-white uppercase bg-green-800 ">
            <tr>
              {theads.map((item,index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((item,index) => (
              <tr key={index} className="bg-[#a2e0a9] border-b text-green-800 ">
                <td className="px-6 py-4">{item.time} </td>
                <td className="px-6 py-4">{item.flag} </td>
                <td className="px-6 py-4">{item.country} </td>
                <td className="px-6 py-4">{item.competitions} </td>
                <td scope="row" className="px-6 py-4">
                  {item.teams}{" "}
                </td>
                <td className="px-6 py-4">{item.tip} </td>
                <td className="px-6 py-4">{item.odds} </td>
                <td className="px-6 py-4">{item.result} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

const theads = [
  "Time",
  "Flag",
  "Country",
  "Competitions",
  "Teams",
  "Tip",
  "Odds",
  "Results",
];

const results = [
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
  {
    time: "20:00",
    flag: "xx",
    country: "England",
    competitions: "EFL Cup",
    teams: "Liverpool - West Ham",
    tip: "1",
    odds: "1.44",
    result: "?",
  },
];
