import React from 'react';
import AddCarousel from './AddCarousel';
import Table from './Table';
import { Link } from '@/navigation';
import { useLocale } from 'next-intl';

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
  const locale = useLocale();
  return (
    <div id="#results" className="max-w-7xl mx-auto mt-20 mb-4">
      <div className="grid grid-cols-12 gap-10 relative ">
        <div className="col-span-9">
          {tables.slice(0, 4).map((table: any, index: number) => (
            <Table key={index} results={table} />
          ))}
        </div>
        <div className="hidden md:block md:col-span-3 mt-20 ">
          <div className="sticky top-24">
            <AddCarousel border={'d1d5db'} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-9">
          <Link href={'/tables'}>
            <p className="text-end text-gray-300 text-glow-silver">
              {' '}
              {locale === 'tr' ? 'Daha fazla gör...' : 'See more...'}{' '}
            </p>
          </Link>
        </div>
        <div className="hidden md:block md:col-span-3 mt-20"></div>
      </div>
    </div>
  );
};

export default TableContainer;
