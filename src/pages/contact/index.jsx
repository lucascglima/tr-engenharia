import React from "react";
import { Formik, Form, Field } from "formik";
import LightTheme from "../../layouts/Light";
import data from "../../data/sections/account-reduction.json";
import InputMask from "react-input-mask";
import useStorage from "../../common/usageStore";
import { useRouter } from "next/router";
const PageCTA = () => {
  const router = useRouter();
  const messageRef = React.useRef("");

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Esse campo é obrigatório";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Endereço de email invalido";
    }
    return error;
  }
  function validatePhone(value) {
    let error;
    if (!value) {
      error = "Esse campo é obrigatório";
    } else if (value.length != 14) {
      error = "Telefone inválido";
    }
    return error;
  }

  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <LightTheme>
      <div className="progress-bar-contact"></div>
      <section className="reduction contact ">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-6">
              <div className="logo-reduction mb-50">
                <img src={data.logo} alt="logo" />
              </div>
              <div className="text-right">3/4</div>
              <div className="form md-mb50">
                <h5 className="fw-900 text-u ls1 mb-40 color-font">
                  Quais são os seus dados para contato?
                </h5>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phoneNumber: "",
                    company: "",
                    privacy: false,
                    accountValue: 0,
                  }}
                  onSubmit={async (values) => {
                    if (values.phoneNumber.length != 15) {
                      messageRef.current.innerText =
                        "Telefone para contato inválido !";
                      return;
                    } else {
                      await sendMessage(500);
                      values.accountValue = new Intl.NumberFormat(
                        "pt-BR"
                      ).format(parseFloat(useStorage().getItem("accontValue")));
                      useStorage().setItem("contact", values);
                      useStorage().setItem("name", values.name);
                      useStorage().setItem("email", values.email);
                      useStorage().setItem("phoneNumber", values.phoneNumber);
                      useStorage().setItem("company", values.company);
                      useStorage().setItem("privacy", values.privacy);
                      useStorage().setItem(
                        "accountValue",
                        JSON.stringify(values.accountValue)
                      );

                      // clear message
                      messageRef.current.innerText = null;
                      router.push({
                        pathname: "/resume",
                      });
                    }
                  }}
                >
                  {({ errors, touched, values }) => (
                    <Form id="contact-form">
                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Nome"
                            required="required"
                          />
                        </div>
                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <InputMask
                            id="form_phoneNumber"
                            type="tel"
                            name="phoneNumber"
                            required="required"
                            maskPlaceholder={null}
                            mask="(99) 99999-9999"
                            placeholder="Número do seu WhatApp"
                            onChange={(value) => {
                              values.phoneNumber = value.target.value;
                              setTimeout(() => {
                                messageRef.current.innerText =
                                  values.phoneNumber.length != 15
                                    ? "Telefone para contato inválido"
                                    : null;
                              }, 2000);
                            }}
                          />
                        </div>

                        <div
                          className={messageRef ? "text-red" : "d-none"}
                          ref={messageRef}
                        ></div>
                        <div className="form-group">
                          <Field
                            id="form_company"
                            type="text"
                            name="company"
                            placeholder="Nome da empresa"
                          />
                        </div>
                        <div className="d-flex form-checkbox mb-25 mt-25 align-items-center">
                          <Field
                            type="checkbox"
                            name="privacy"
                            required="required"
                          />
                          <label>
                            Li e concordo com a Política de Privacidade
                          </label>
                        </div>
                      </div>

                      <button type="submit" className="btn-reduction">
                        <span>CONTINUAR</span>
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LightTheme>
  );
};

export default PageCTA;
