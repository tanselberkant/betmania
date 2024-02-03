import AdminSubscribersWrapper from '@/components/subscribe/AdminSubscribersWrapper';
import auth from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React, { Suspense } from 'react';

const getSubscribersData = async () => {
  const res = await fetch('http://localhost:3000/api/subscribers', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const AdminSubscribersPage = async () => {
  const subscribers = await getSubscribersData();

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <div className="text-center">Loading...</div>
        </div>
      }
    >
      <AdminSubscribersWrapper data={subscribers} />
    </Suspense>
  );
};

export default AdminSubscribersPage;
