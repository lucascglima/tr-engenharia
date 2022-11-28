import React from "react";
import { Formik, Form, Field } from "formik";
import LightTheme from "../../layouts/Light";
import data from "../../data/sections/account-reduction.json";
import CurrencyInput from "react-currency-input-field";
import { formatValue } from "react-currency-input-field";
import { useRouter } from "next/router";
import useStorage from "../../common/usageStore";
const PageCTA = () => {
  const router = useRouter();

  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Endereço de email invalido";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  const formCurrency = formatValue({
    value: "000",
    groupSeparator: ",",
    decimalSeparator: ".",
    prefix: "$",
  });
  return (
    <LightTheme>
      <div className="progress-bar-account"></div>
      <section className="reduction contact ">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-6">
              <div className="logo-reduction mb-50">
                <img src={data.logo} alt="logo" />
              </div>
              <div className="text-right">1/4</div>
              <div className="form md-mb50">
                <h4 className="fw-900 text-u ls1 mb-50 color-font">
                  Quanto você gasta em média na sua conta de luz?
                </h4>

                <Formik
                  initialValues={{
                    accontValue: "",
                    highVoltage: false,

                    // name: "",
                    // email: "",
                    // phoneNumber: "",
                    // companyName: "",
                    // highVoltage: '',
                    // policity: "",
                  }}
                  onSubmit={(values, actions) => {
                    useStorage().setItem("accontValue", values.accontValue);
                    useStorage().setItem("highVoltage", values.highVoltage);
                    router.push({
                      pathname: "/economy",
                    });
                  }}
                >
                  {({ errors, touched, values }) => (
                    <Form id="contact-form">
                      <div className="controls mb-30">
                        <div className="form-group">
                          <CurrencyInput
                            id="form_accontValue"
                            name="accontValue"
                            placeholder="Valor médio da conta (R$)"
                            decimalsLimit={2}
                            required="required"
                            prefix="R$"
                            onValueChange={(value, name) => {
                              sessionStorage.setItem("accountValue", value);
                            }}
                          />
                          <div className="d-flex form-checkbox mb-25 mt-25 align-items-center">
                            <Field type="checkbox" name="highVoltage" />
                            <p>Minha conta é de alta tensão</p>
                          </div>
                        </div>
                      </div>
                      <p className="mb-25 ">
                        Serviço exclusivo apenas para contas do estado de{" "}
                        <span className="pe-state">PERNAMBUCO</span>.
                      </p>
                      <p className="mb-25 ">
                        Mais de uma conta? Digite a soma de todas.
                      </p>
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
