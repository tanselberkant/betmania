import AdminPostContainer from '@/components/posts/AdminPostContainer';
import auth from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

const getData = async () => {
  const res = await fetch(`${process.env.BASIC_URL}/api/posts`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  return res.json();
};

const AdminPostsPage = async () => {
  const session = await getServerSession(auth);
  const posts = await getData();
  return (
    <div>
      <AdminPostContainer posts={posts} session={session?.user.name} />
    </div>
  );
};

export default AdminPostsPage;
