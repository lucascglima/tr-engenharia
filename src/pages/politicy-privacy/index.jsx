import React from "react";
import { Formik, Form, Field } from "formik";
import LightTheme from "../../layouts/Light";
import data from "../../data/sections/privacy.json";
import CurrencyInput from "react-currency-input-field";
import { formatValue } from "react-currency-input-field";
import { useRouter } from "next/router";

const PageCTA = () => {
  const router = useRouter();

  const messageRef = React.useRef(null);

  return (
    <LightTheme>
      <iframe src={data.pdf} />
    </LightTheme>
  );
};

export default PageCTA;
