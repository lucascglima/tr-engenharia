import { Analytics } from "@vercel/analytics/react";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";

function MyApp({ Component, pageProps }) {
  React.useLayoutEffect = React.useEffect;
  return (
    <>
      <Head>
        <title>TR Energia Solar</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="author" content="Lucas Lima" />
        <meta
          name="keywords"
          content="TR energia, energia solar, redução conta de luz"
        />
        <meta
          name="description"
          content="Reduza os gastos da sua empresa, utilizando energia limpa e sustentável. Com zero investimento, você economiza 20% do custo de energia."
        />
        <link rel="icon" href="/img/tr/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
          crossorigin="anonymous"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WE3ST3KW82"
        ></script>
        <link href="../common/googleTagManager.js"></link>
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
      <Script id="wowInit" strategy="lazyOnload">
        {`new wow().init();`}
      </Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
        crossorigin="anonymous"
      ></Script>

      <Script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></Script>
    </>
  );
}

export default MyApp;
