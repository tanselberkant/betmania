import React from 'react';
import AddCarousel from './AddCarousel';
import Table from './Table';

const getTableData = async (page: number) => {
  const res = await fetch(`${process.env.BASIC_URL}/api/tables?page=${page}`, {
    // next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const TablesPageWrapper = async ({ currentPage }: { currentPage: number }) => {
  const tables = await getTableData(currentPage);

  return (
    <div className="grid grid-cols-12 gap-10 relative ">
      <div className="col-span-9">
        {tables.map((table: any, index: number) => (
          <Table key={index} results={table} />
        ))}
      </div>
      <div className="hidden md:block md:col-span-3 mt-20 ">
        <div className="sticky top-24">
          <AddCarousel border={'d1d5db'} />
        </div>
      </div>
    </div>
  );
};

export default TablesPageWrapper;
