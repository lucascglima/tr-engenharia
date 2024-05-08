import React from "react";
import TrEngenharia from "./tr";
import GoogleTagManager from "../common/googleTagManager";

const Home = () => {
  return (
    <>
      <GoogleTagManager gtmId="GTM-TSF2C42Z" />
      <TrEngenharia />
    </>
  );
};

export default Home;
