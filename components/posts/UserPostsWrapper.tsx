import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getPostsData = async (page: number | string) => {
  const res = await fetch(`${process.env.BASIC_URL}/api/posts?page=${page}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const UserPostsWrapper = async ({
  currentPage,
}: {
  currentPage: number | string;
}) => {
  const locale = useLocale();
  const posts = await getPostsData(currentPage);
  // console.log(posts);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h4 className="mt-2 text-lg leading-8 text-gray-300 text-center text-glow-silver">
            {locale === 'tr'
              ? 'Uzman tavsiyelerimizle bahis gelirinizi nasıl artıracağınızı öğrenin.'
              : 'Learn how to grow your betting income with our expert advice.'}
          </h4>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post: PostData, index: number) => (
              <article
                key={index}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    width={500}
                    height={500}
                    src={post.imgUrl}
                    alt={post.title + ' image'}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-300 border-mini-glow object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-gray-500">
                      <Link href={`/posts/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-400">
                      {post.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-300/10 pt-6 ">
                    <div className="relative flex items-center gap-x-4">
                      <Image
                        width={500}
                        height={500}
                        src={'/bets/Drake.png'}
                        alt="admin-image"
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-400">
                          <span className="absolute inset-0" />
                          Admin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostsWrapper;
