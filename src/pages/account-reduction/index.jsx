import React from "react";
import { Formik, Form, Field } from "formik";
import LightTheme from "../../layouts/Light";
import data from "../../data/sections/account-reduction.json";
const PageCTA = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <LightTheme>
      <section className="reduction contact section-padding-reduction ">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-6">
              <div className="logo-reduction mb-50">
                <img src={data.logo} alt="logo" />
              </div>
              <div className="form md-mb50">
                <h5 className="fw-900 text-u ls1 mb-100 color-font">
                  Quanto você gasta em média na sua conta de luz?
                </h5>
                <Formik
                  initialValues={{
                    accontValue: "",
                    // name: "",
                    // email: "",
                    // phoneNumber: "",
                    // companyName: "",
                    // highVoltage: '',
                    // policity: "",
                  }}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>
                      <div className="controls mb-30">
                        <div className="form-group">
                          <Field
                            id="form_accontValue"
                            type="text"
                            name="accontValue"
                            placeholder="Valor médio da conta"
                            required="required"
                          />
                        </div>
                      </div>
                      <p className="mb-50 text-center">
                        Mais de uma conta? Digite a soma de todas.
                      </p>
                      <button type="submit" className="btn-reduction">
                        <span>Continuar</span>
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
