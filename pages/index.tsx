import Random from "@/components/random";
import Section from "@/components/section";
import { Post, randomPost } from "@/lib/post";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface PageProps {
  posts: Post[];
}

const Home: NextPage<PageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
      </Head>

      <Section>
        <Random posts={posts} />
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const posts = await randomPost();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
