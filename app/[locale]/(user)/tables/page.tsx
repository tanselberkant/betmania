import HomeSubscribeBanner from '@/components/home/HomeSubscribeBanner';
import TablesPagination from '@/components/paginations/TablesPagination';
import TableWrapperSuspense from '@/components/suspenses/TableWrapperSuspense';
import TablesPageWrapper from '@/components/table/TablesPageWrapper';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React, { Suspense } from 'react';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'TablesMeta' });

  return {
    title: t('title'),
    keywords: t('keyword'),
    description: t('description'),
  };
}

const getTableCountData = async () => {
  const res = await fetch(`${process.env.BASIC_URL}/api/table-count`, {
    // next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const UserTablePage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const locale = useLocale();
  const currentPage = Number(searchParams?.page) || 1;

  const totalPage = await getTableCountData();

  return (
    <>
      <h1 className="text-4xl text-white font-bold text-center mt-14 mb-10 ">
        {locale === 'tr' ? 'Tablolar' : 'Tables'}
      </h1>
      <div className="max-w-7xl mx-auto mt-20 mb-4">
        <Suspense key={currentPage} fallback={<TableWrapperSuspense />}>
          <TablesPageWrapper currentPage={currentPage} />
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

export default UserTablePage;
