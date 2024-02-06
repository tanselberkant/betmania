import UpdateTable from '@/components/table/UpdateTable';
import auth from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

const getTableData = async (id: string) => {
  const res = await fetch(`${process.env.BASIC_URL}/api/tables?id=${id}`);

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
  const tableData = await getTableData(params.slug);
  // console.log('table-->', tableData);
  const session = await getServerSession(auth);

  // tableData'nın dizi olup olmadığını kontrol et
  const table = Array.isArray(tableData) ? tableData[0] : tableData;

  return (
    <div>
      <UpdateTable session={session?.user.name} results={table} />
    </div>
  );
};

export default AdminSingleTablePage;
