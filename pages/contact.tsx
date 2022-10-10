import { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <header>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 break-words mb-8">
            Contact
          </h1>
        </header>

        <form method="post" className="space-y-8 pt-10 pb-8">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-100">Name</span>
            <input
              name="name"
              type="text"
              className="mt-1 block w-full"
              required
              autoComplete="off"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-100">Email</span>
            <input
              name="email"
              type="email"
              className="mt-1 block w-full"
              required
              autoComplete="off"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-100">Message</span>
            <textarea
              name="message"
              className="mt-1 block w-full"
              rows={3}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
