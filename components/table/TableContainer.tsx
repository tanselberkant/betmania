import React from 'react';
import AddCarousel from './AddCarousel';
import Table from './Table';

const getTableData = async () => {
  const res = await fetch('http://localhost:3000/api/tables', {
    // next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const TableContainer = async () => {
  const tables = await getTableData();
  return (
    <div id="#results" className="max-w-7xl mx-auto my-4">
      <div className="grid grid-cols-12 gap-6 relative ">
        <div className="col-span-9">
          {tables.map((table: TipsData, index: number) => (
            <Table key={index} results={table} />
          ))}
        </div>
        <div className="hidden md:block md:col-span-3 mt-20 ">
          <div className="sticky top-24">
            <AddCarousel border={'166534'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;

const dummyResult = [
  {
    _id: '1',
    time: '20:00',
    sportIconUrl: 'aaaa',
    countryFlagImageUrl: 'xx',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
  {
    _id: '2',
    time: '20:00',
    countryFlagImageUrl: 'xx',
    sportIconUrl: 'aaaa',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
  {
    _id: '3',
    time: '20:00',
    countryFlagImageUrl: 'xx',
    sportIconUrl: 'aaaa',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
  {
    _id: '4',
    time: '20:00',
    countryFlagImageUrl: 'xx',
    sportIconUrl: 'aaaa',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
  {
    _id: '5',
    time: '20:00',
    countryFlagImageUrl: 'xx',
    sportIconUrl: 'aaaa',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
  {
    _id: '6',
    time: '20:00',
    countryFlagImageUrl: 'xx',
    sportIconUrl: 'aaaa',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
  {
    _id: '7',
    time: '20:00',
    countryFlagImageUrl: 'xx',
    sportIconUrl: 'aaaa',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
  {
    _id: '8',
    time: '20:00',
    countryFlagImageUrl: 'xx',
    sportIconUrl: 'aaaa',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
  {
    _id: '9',
    time: '20:00',
    countryFlagImageUrl: 'xx',
    sportIconUrl: 'aaaa',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
  {
    _id: '10',
    time: '20:00',
    countryFlagImageUrl: 'xx',
    sportIconUrl: 'aaaa',
    country: 'England',
    competition: 'EFL Cup',
    teams: 'Liverpool - West Ham',
    tip: '1',
    odds: '1.44',
    result: '?',
    resultColor: '#008000',
  },
];
