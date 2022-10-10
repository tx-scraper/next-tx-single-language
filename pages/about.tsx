import { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <header>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 break-words mb-8">
            About
          </h1>
        </header>

        <div className="prose dark:prose-invert break-words max-w-none pt-10 pb-8"></div>
      </div>
    </>
  );
};

export default Page;
