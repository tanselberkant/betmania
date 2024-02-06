import BetsTable from '@/components/bets/BetsTable';
import auth from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/coupons');

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const AdminBetsPage = async () => {
  const session = await getServerSession(auth);
  const coupons = await getData();
  return (
    <div>
      {coupons.map((coupon: BetsData, index: number) => (
        <BetsTable coupon={coupon} key={index} session={session?.user.name} />
      ))}
    </div>
  );
};

export default AdminBetsPage;
