import HomeSubscribeBanner from '@/components/home/HomeSubscribeBanner';
import TablesPagination from '@/components/paginations/TablesPagination';
import UserPostsWrapper from '@/components/posts/UserPostsWrapper';

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

const getPostCount = async () => {
  const res = await fetch(`http://localhost:3000/api/post-count`, {
    // next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const UserPostsPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const locale = useLocale();
  const currentPage = Number(searchParams?.page) || 1;

  const totalPage = await getPostCount();
  console.log(totalPage);

  return (
    <>
      <h1 className="text-4xl text-white font-bold text-center mt-14 mb-10 ">
        {locale === 'tr' ? 'Blog' : 'Posts'}
      </h1>

      <Suspense key={currentPage} fallback={<>Wait</>}>
        <UserPostsWrapper currentPage={currentPage} />
      </Suspense>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-9">
          <TablesPagination totalPages={totalPage} />
        </div>
        <div className="hidden md:block md:col-span-3 mt-20"></div>
      </div>
      {/* {totalPage <= 8 ? (
            <></>
        ) : (
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-9">
              <TablesPagination totalPages={totalPage} />
            </div>
            <div className="hidden md:block md:col-span-3 mt-20"></div>
          </div>
        )} */}

      <HomeSubscribeBanner />
    </>
  );
};

export default UserPostsPage;
