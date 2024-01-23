import BetsTable from '@/components/bets/BetsTable';
import React from 'react';

const getData = async (advisorName: string) => {
  const res = await fetch(
    `http://localhost:3000/api/coupons?advisorName=${advisorName}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const AdminBetsSlugPage = async ({ params }: { params: { slug: string } }) => {
  const coupons = await getData(params.slug);
  return (
    <div>
      <h2>Hi bro</h2>
      {coupons.map((coupon: BetsData, index: number) => (
        <BetsTable coupon={coupon} key={index} />
      ))}
    </div>
  );
};

export default AdminBetsSlugPage;
