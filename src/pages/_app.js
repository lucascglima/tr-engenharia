import { Analytics } from "@vercel/analytics/react";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";
import "../styles/form-reduction.scss";

function MyApp({ Component, pageProps }) {
  React.useLayoutEffect = React.useEffect;
  return (
    <>
      <Head>
        <title>TR Energia solar</title>
        <link rel="icon" href="/img/tr/favicon.ico" />
      </Head>
      <LoadingScreen />
      <Component {...pageProps} />
      <Analytics />
      <ScrollToTop />
      <Script
        id="wow"
        src="/js/wow.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>

      <Script id="wowInit" strategy="lazyOnload">{`new wow().init();`}</Script>
    </>
  );
}

export default MyApp;
