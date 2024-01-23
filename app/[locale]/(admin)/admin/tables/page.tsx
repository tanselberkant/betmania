import BetsTable from '@/components/bets/BetsTable';
import Table from '@/components/table/Table';
import auth from '@/lib/auth';
import { table } from 'console';
import { getServerSession } from 'next-auth';
import React from 'react';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/tables', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const AdminTablesPage = async () => {
  const session = await getServerSession(auth);
  const tables = await getData();

  return (
    <div>
      <h2>Tables gonna be here</h2>
      {tables.map((table: TipsData, index: number) => (
        <Table results={table.tips} />
      ))}
    </div>
  );
};

export default AdminTablesPage;
