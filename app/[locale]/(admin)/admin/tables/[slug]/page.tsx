import Table from '@/components/table/Table';
import React from 'react';

const getTableData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tables?id=${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const AdminSingleTablePage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  //   const coupons = await getTableData(params.slug);
  const table = await getTableData(params.slug);

  return (
    <div>
      <h2>Hi bro</h2>
      <Table results={table[0]} />
    </div>
  );
};

export default AdminSingleTablePage;
