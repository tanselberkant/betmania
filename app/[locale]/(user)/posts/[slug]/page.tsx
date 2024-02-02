import SinglePost from '@/components/post/SinglePost';
import { ResolvingMetadata, Metadata } from 'next';

const getPostData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts?slug=${slug}`, {
    // next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

export async function generateMetadata(
  { params }: { params: { slug: string; locale: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // console.log(params.locale);;
  const post = await getPostData(params.slug);

  return {
    title: post.metaTitle ? post.metaTitle : post.title,
    keywords: post.metaKeywords ? post.metaKeywords : post.title,
    description: post.metaDescription ? post.metaDescription : post.title,
  };
}

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostData(params.slug);
  // console.log('post-->', post);
  return (
    <div className="relative">
      <SinglePost post={post} />
    </div>
  );
};

export default SinglePostPage;
