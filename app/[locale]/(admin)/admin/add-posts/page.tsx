import BetsTable from '@/components/bets/BetsTable';
import PostAddForm from '@/components/posts/PostAddForm';
import auth from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/posts', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const AdminAddPostPage = async () => {
  const session = await getServerSession(auth);
  //   const coupons = await getData();

  return (
    <div>
      <PostAddForm />
    </div>
  );
};

export default AdminAddPostPage;
