import React from 'react';
import AddCarousel from '../table/AddCarousel';

import BetUserTable from './BetUserTable';

const getBetsData = async (page: number) => {
  const res = await fetch(`http://localhost:3000/api/coupons?page=${page}`, {
    // next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const BetsPageWrapper = async ({ currentPage }: { currentPage: number }) => {
  const coupons = await getBetsData(currentPage);
  console.log(coupons);

  return (
    <div className="grid grid-cols-12 gap-10 relative ">
      <div className="col-span-9">
        {coupons.map((coupon: BetsData, index: number) => (
          <BetUserTable coupon={coupon} key={index} />
        ))}
      </div>
      <div className="hidden md:block md:col-span-3 mt-20 ">
        <div className="sticky top-24">
          <AddCarousel border={'6366f1'} />
        </div>
      </div>
    </div>
  );
};

export default BetsPageWrapper;
