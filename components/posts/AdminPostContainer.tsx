import AdminSinglePostCard from './AdminSinglePostCard';

type Props = {
  posts: PostData[];
  session?: string;
};

const AdminPostContainer = ({ posts, session }: Props) => {
  return (
    <div className="bg-white  sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog Posts
          </h2>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post: PostData, index) => (
              <AdminSinglePostCard
                post={post}
                index={index}
                session={session}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostContainer;
