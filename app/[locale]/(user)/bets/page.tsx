import BetsPageWrapper from '@/components/bets/BetsPageWrapper';
import HomeSubscribeBanner from '@/components/home/HomeSubscribeBanner';
import TablesPagination from '@/components/paginations/TablesPagination';

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

const getBetCountData = async () => {
  const res = await fetch(`http://localhost:3000/api/coupon-count`, {
    // next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const UserBetPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const locale = useLocale();
  const currentPage = Number(searchParams?.page) || 1;

  const totalPage = await getBetCountData();

  return (
    <>
      <h1 className="text-4xl text-white font-bold text-center mt-14 mb-10 ">
        {locale === 'tr' ? 'Kuponlar' : 'Bet Tips'}
      </h1>
      <div className="max-w-7xl mx-auto mt-20 mb-4">
        <Suspense key={currentPage} fallback={<>Wait</>}>
          <BetsPageWrapper currentPage={currentPage} />
        </Suspense>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-9">
            <TablesPagination totalPages={totalPage} />
          </div>
          <div className="hidden md:block md:col-span-3 mt-20"></div>
        </div>
      </div>
      <HomeSubscribeBanner />
    </>
  );
};

export default UserBetPage;
