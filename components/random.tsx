import Link from "next/link";
import type { Post } from "@/lib/post";

const Random = ({ posts }: { posts: Post[] }) => (
  <div className="divide-y divide-gray-200 dark:divide-gray-700">
    {!posts.length && "No posts found."}

    {posts.map((post) => (
      <article key={post.title}>
        <div className="py-12 space-y-6">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            <Link href={post.slug} passHref>
              <a
                className="text-gray-900 dark:text-gray-100 break-words"
                aria-label={`Read "${post.title}"`}
              >
                {post.title}
              </a>
            </Link>
          </h2>
          <div className="text-base font-medium leading-6">
            <Link href={post.slug} passHref>
              <a
                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label={`Read "${post.title}"`}
              >
                Read more &rarr;
              </a>
            </Link>
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default Random;
