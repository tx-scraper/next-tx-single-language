import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Script from "next/script";
import Layout from "@/components/layout";
import * as statcounter from "@/lib/statcounter";
import Popup from "@/components/popup";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      statcounter.isEnabled && statcounter.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      {statcounter.isEnabled && (
        <>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              var sc_project=${statcounter.SC_PROJECT};
              var sc_invisible=1;
              var sc_security="${statcounter.SC_SECURITY}";
              `,
            }}
          />
          <Script src="https://www.statcounter.com/counter/counter.js"></Script>
          <noscript>
            <img
              src={`https://c.statcounter.com/${statcounter.SC_PROJECT}/0/${statcounter.SC_SECURITY}/1/`}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </noscript>
        </>
      )}

      <Popup />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
