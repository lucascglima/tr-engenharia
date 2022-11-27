/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import { Element } from "react-scroll";

const LightTheme = ({ children, mobileappstyle }) => {
  React.useEffect(() => {
    window.theme = "light";
  }, []);
  return (
    <>
      <Element name="container" id="containerElement" className="wow">
        <Head>
          <link rel="stylesheet" href="/css/light.css" />

          {mobileappstyle ? (
            <link href="/css/mobile-app-light.css" rel="stylesheet" />
          ) : (
            ""
          )}
        </Head>
        {children}
      </Element>
    </>
  );
};

export default LightTheme;
