import { findPost, getPosts } from "@/lib/post";
import type { Post } from "@/lib/post";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Section from "@/components/section";
import Head from "next/head";
import { sitemap } from "@/lib/sitemap";
import * as Log from "next/dist/build/output/log";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  slug: string;
  post: Post;
}

const isDev = process.env.NODE_ENV === "development";

const Page: NextPage<Props, Params> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Section>
        <article>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 break-words">
                {post.title}
              </h1>
            </div>
          </header>
          <div
            className="break-words prose max-w-none pt-10 pb-8 dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </article>
      </Section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data: { params: Params }[] = [];

  const posts: Post[] = await getPosts();

  sitemap(
    posts.map(
      (item) =>
        `${process.env.SITE_URL || "http://localhost:3000"}/${item.slug}`
    ),
    process.env.SITEMAP_NAME || "sitemap"
  );

  isDev && Log.info("getStaticPaths");

  return {
    paths: posts.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;

  isDev && Log.info("getStaticProps");

  const post = await findPost(slug);

  if (!post) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      slug,
      post,
    },
  };
};

export default Page;
