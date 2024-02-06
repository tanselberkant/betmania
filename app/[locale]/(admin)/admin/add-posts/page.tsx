import BetsTable from '@/components/bets/BetsTable';
import PostAddForm from '@/components/posts/PostAddForm';
import auth from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

const AdminAddPostPage = async () => {
  const session = await getServerSession(auth);

  return (
    <div>
      <PostAddForm />
    </div>
  );
};

export default AdminAddPostPage;
