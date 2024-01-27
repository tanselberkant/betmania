import UpdateTable from '@/components/table/UpdateTable';
import auth from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

const getTableData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tables?id=${id}`, {
    // next: { revalidate: 3600 },
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
  const table = await getTableData(params.slug);
  // console.log(table[0]);
  const session = await getServerSession(auth);

  return (
    <div>
      <UpdateTable session={session?.user.name} results={table[0]} />
    </div>
  );
};

export default AdminSingleTablePage;
