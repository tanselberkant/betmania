import { useLocale } from 'next-intl';
import Image from 'next/image';

type Props = {
  post: PostData;
};

const SinglePost = ({ post }: Props) => {
  const locale = useLocale();
  return (
    <div className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-10 text-orbitPurple">
          {locale === 'tr' ? 'Hakkında' : 'Introducing'}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          {post.title}
        </h1>
        <div className="my-8">
          <Image
            width={500}
            height={500}
            className="aspect-video rounded-xl bg-gray-50 object-cover w-full border-[1.5px] border-gray-300 border-mini-glow"
            src={post.imgUrl}
            alt={post.title + ' image'}
          />
        </div>
        <h2 className="mt-6 text-xl leading-8">{post.desc}</h2>

        <article
          className="mt-16 max-w-2xl custom-post-body text-red-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
      </div>
    </div>
  );
};

export default SinglePost;
