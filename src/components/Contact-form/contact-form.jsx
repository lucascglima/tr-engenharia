import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import { Element } from "react-scroll";
import { useState } from "react";
import InputMask from "react-input-mask";
const ContactForm = () => {
  const messageRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Campo Obrigatório";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Endereço de email invalido";
    }
    return error;
  }
  // const sendMessage = (info) => new Promise((req, resp) => {
  //   setName(info.name)
  //   setEmail(info.email)
  //   setMessage(info.message)
  //   handleSubmit(
  // });

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Sending");

  //   let data = {
  //     name,
  //     email,
  //     phoneNumber,
  //     subject,
  //     message,
  //   };

  //   fetch("/api/contact", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => {
  //     console.log("Response received");
  //     if (res.status === 200) {
  //       console.log("Response succeeded!");
  //       setSubmitted(true);
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     }
  //   });
  // };
  return (
    <Element name="footer">
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="fw-900 text-u ls1 mb-30 color-font">
                  Fale conosco
                </h4>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phoneNumber: "",
                    subject: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    values.phoneNumber = phoneNumber;
                    // await fetch("/api/contact/", {
                    //   method: "POST",
                    //   headers: {
                    //     Accept: "application/json, text/plain, */*",
                    //     "Content-Type": "application/json",
                    //   },
                    //   body: JSON.stringify(values, phoneNumber),
                    // }).then((res) => {
                    //   if (res.status === 200) {
                    //     // show message
                    //     messageRef.current.innerText = `Sua mensagem foi enviada com sucesso.
                    //   Nós entraremos em contato com você em breve.`;
                    //     messageRef.current.className = "messages";
                    //     // Reset the values
                    //     values.name = "";
                    //     values.email = "";
                    //     values.phoneNumber = "";
                    //     setPhoneNumber("");
                    //     values.subject = "";
                    //     values.message = "";
                    //     // clear message
                    //     setTimeout(() => {
                    //       messageRef.current.className = "hidden";
                    //       messageRef.current.innerText == null;
                    //     }, 10000);
                    //   }
                    // });
                  }}
                >
                  {({ errors, touched }) => (
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
                          {/* <Field
                            id="form_phoneNumber"
                            type="tel"
                            name="phoneNumber"
                            placeholder="Telefone (Whatsapp)"
                            required="required"
                            mask="(99) 99999-9999"
                          /> */}
                          <InputMask
                            id="form_phoneNumber"
                            type="tel"
                            name="phoneNumber"
                            required="required"
                            maskPlaceholder={null}
                            mask="(99) 99999-9999"
                            placeholder="Telefone (Whatsapp)"
                            value={phoneNumber}
                            onChange={(value) => {
                              setPhoneNumber(value.target.value);
                              setTimeout(() => {
                                if (phoneNumber.length != 15) {
                                  phoneRef.current.innerText =
                                    "Telefone inválido";
                                } else {
                                  phoneRef.current.innerText = null;
                                  phoneRef.current.className = "";
                                }
                              }, 100);
                            }}
                          />
                          <div>
                            <div className="" ref={phoneRef}></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <Field
                            id="form_subject"
                            type="text"
                            name="subject"
                            placeholder="Assunto"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <Field
                          as="textarea"
                          id="form_message"
                          name="message"
                          placeholder="Mensagem"
                          rows="4"
                          required="required"
                        />
                      </div>
                      <div className="" ref={messageRef}></div>

                      <button type="submit" className="butn btn-cta">
                        <span>Enviar mensagem</span>
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="fw-900 text-u ls1 mb-30 color-font">Contato</h4>
                <h3 className="wow" data-wow-delay=".5s" data-splitting>
                  {ContactFromDate.title}
                </h3>
                <div className="item mb-40">
                  <h5 className="fw-900 mb-10">E-MAIL:</h5>
                  <p>{ContactFromDate.email}</p>
                  <h5 className="fw-900 mb-10"> TELEFONE:</h5>
                  <p>{ContactFromDate.phone}</p>
                </div>
                <h3 className="wow" data-wow-delay=".5s" data-splitting>
                  Visite nosso escritório
                </h3>
                <div className="item">
                  <h5 className="fw-900 mb-10">ENDEREÇO:</h5>
                  <p>
                    {ContactFromDate.location.first}
                    <br />
                    {ContactFromDate.location.second}
                  </p>
                </div>

                <div className="social mt-50">
                  <h5 className="fw-900 mb-10">Acompanhe nossas redes</h5>
                  <a href="https://api.whatsapp.com/send?phone=55819999888888">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/tr-energia-solar/?originalSubdomain=br">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/tr.energiasolar/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://web.facebook.com/TR-Energia-Solar-108003291793647/">
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
                <div className="item mt-50">
                  <h6>{ContactFromDate.location.third}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactForm;
