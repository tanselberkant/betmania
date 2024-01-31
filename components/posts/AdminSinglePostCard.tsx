'use client';

import { deletePost } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';

type Props = {
  post: PostData;
  index: number;
  session?: string;
};

const AdminSinglePostCard = ({ index, post, session }: Props) => {
  const [state, formAction] = useFormState(deletePost, undefined);
  const router = useRouter();

  // CATCHING THE STATE OF THE FORM
  useEffect(() => {
    console.log('in use Effect');
    if (state === 'Post deleted successfully') {
      console.log('aaaaaa--');
      router.push('/admin/dashboard');
    } else if (state === 'Something went wrong') {
      alert('Something went wrong');
    }
  }, [state, router]);

  return (
    <article
      key={index}
      className="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <Image
          width={500}
          height={500}
          // src={post.imgUrl}
          src={
            'https://images.pexels.com/photos/20001482/pexels-photo-20001482/free-photo-of-a-lighthouse-on-a-cloudy-day-in-the-middle-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
          alt={post.title + ' image'}
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`/admin/post/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">{post.desc}</p>
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <Image
              width={500}
              height={500}
              src={
                'https://images.pexels.com/photos/8476592/pexels-photo-8476592.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
              alt={post.authorName + ' profile image'}
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {post.authorName}
              </p>
            </div>
            {session === 'admin' && (
              <form action={deletePost} className=" z-50">
                <input type="hidden" name="id" value={post._id} />
                <button className="border-2 border-black bg-black px-3 py-1 text-white rounded-md hover:cursor-pointer">
                  Delete Post
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default AdminSinglePostCard;
