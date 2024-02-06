import React from 'react';
import AddCarousel from '../table/AddCarousel';

import BetUserTable from './BetUserTable';
import { useLocale } from 'next-intl';

const getBetsData = async (page: number) => {
  const res = await fetch(`http://localhost:3000/api/coupons?page=${page}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const BetsPageWrapper = async ({ currentPage }: { currentPage: number }) => {
  const coupons = await getBetsData(currentPage);
  const locale = useLocale();
  //   console.log(coupons);

  // Check If Coupons Empty
  const content =
    coupons.length > 0 ? (
      coupons.map((coupon: BetsData, index: number) => (
        <BetUserTable coupon={coupon} key={index} />
      ))
    ) : (
      <div className="text-left py-40 text-2xl font-bold text-white">
        {locale === 'tr'
          ? 'Hiç Kupon Bulunamadı, Adminler Uyuyor...'
          : 'No Betting Predictions Found, Admins are Sleeping...'}
      </div>
    );

  return (
    <div className="grid grid-cols-12 gap-10 relative ">
      <div className="col-span-9 pl-6 md:px-4">{content}</div>
      <div className="hidden md:block md:col-span-3 mt-20 ">
        <div className="sticky top-24">
          <AddCarousel border={'6366f1'} />
        </div>
      </div>
    </div>
  );
};

export default BetsPageWrapper;
