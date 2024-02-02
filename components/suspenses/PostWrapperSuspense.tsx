import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostWrapperSuspense = async () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl animate-pulse">
          <p className="mt-2 text-lg leading-8 text-gray-300 text-center text-glow-silver"></p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {dummyPosts.map((post: PostData, index: number) => (
              <article
                key={index}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gray-300 border-mini-glow object-cover"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-gray-500">
                      <Link href={`/posts/${post.slug}`}>
                        <span className="absolute inset-0" />
                        <div className="w-[40%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-400">
                      <div className="w-[100%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                      <div className="w-[40%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-300/10 pt-6 ">
                    <div className="relative flex items-center gap-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-50"></div>
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-400">
                          <span className="absolute inset-0" />
                          <div className="w-[20%] bg-gray-300 h-2.5 rounded-full mb-2"></div>
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

export default PostWrapperSuspense;

const dummyPosts = [
  {
    _id: '65bc3262f0b3ea16b188ce78',
    title: 'Post-Title-2',
    desc: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imgUrl:
      'https://images.pexels.com/photos/11107635/pexels-photo-11107635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'post-title-2',
    authorName: 'admin',
    metaDescription: 'First Post Description2',
    metaKeyword: 'First Post Keyword2',
    metaTitle: 'First Post Title2',
    content:
      '<p><span style="background-color: rgb(255, 255, 255); color: rgb(75, 85, 99);">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(75, 85, 99);">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</span></p>',
    language: 'tr',
    createdAt: '2024-02-02T00:08:02.496Z',
    updatedAt: '2024-02-02T00:08:02.496Z',
    __v: 0,
  },
  {
    _id: '65bc3262f0b3ea16b188ce78',
    title: 'Post-Title-2',
    desc: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imgUrl:
      'https://images.pexels.com/photos/11107635/pexels-photo-11107635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'post-title-2',
    authorName: 'admin',
    metaDescription: 'First Post Description2',
    metaKeyword: 'First Post Keyword2',
    metaTitle: 'First Post Title2',
    content:
      '<p><span style="background-color: rgb(255, 255, 255); color: rgb(75, 85, 99);">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(75, 85, 99);">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</span></p>',
    language: 'tr',
    createdAt: '2024-02-02T00:08:02.496Z',
    updatedAt: '2024-02-02T00:08:02.496Z',
    __v: 0,
  },
  {
    _id: '65bc3262f0b3ea16b188ce78',
    title: 'Post-Title-2',
    desc: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imgUrl:
      'https://images.pexels.com/photos/11107635/pexels-photo-11107635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'post-title-2',
    authorName: 'admin',
    metaDescription: 'First Post Description2',
    metaKeyword: 'First Post Keyword2',
    metaTitle: 'First Post Title2',
    content:
      '<p><span style="background-color: rgb(255, 255, 255); color: rgb(75, 85, 99);">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(75, 85, 99);">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</span></p>',
    language: 'tr',
    createdAt: '2024-02-02T00:08:02.496Z',
    updatedAt: '2024-02-02T00:08:02.496Z',
    __v: 0,
  },
];
