import AdminTable from '@/components/table/AdminTable';
import auth from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/tables', {
    // next: { revalidate: 3600 },
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
      {tables.map((table: TipsData, index: number) => (
        <AdminTable key={index} results={table} session={session?.user.name} />
      ))}
    </div>
  );
};

export default AdminTablesPage;
