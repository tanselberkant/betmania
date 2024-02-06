import React from 'react';
import { getTranslations } from 'next-intl/server';
import { useLocale } from 'next-intl';

import UserSingleBetTable from '@/components/bets/UserSingleBetTable';

const getCouponData = async (id: string) => {
  const res = await fetch(`${process.env.BASIC_URL}/api/coupons/${id}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'BetsMeta' });

  return {
    title: t('title'),
    keywords: t('keyword'),
    description: t('description'),
  };
}

const SingleCouponPage = async ({ params }: { params: { slug: string } }) => {
  const locale = useLocale();
  const coupon = await getCouponData(params.slug);

  return (
    <div className=" max-w-7xl mx-auto px-40">
      <h1 className="text-4xl text-white font-bold text-center mt-14 mb-10 ">
        {locale === 'tr' ? 'Kuponlar' : 'Bet Tips'}
        <UserSingleBetTable coupon={coupon} />
      </h1>
    </div>
  );
};

export default SingleCouponPage;
