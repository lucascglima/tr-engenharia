import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import { Element } from "react-scroll";
const ContactForm = () => {
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
                    subject: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    alert(JSON.stringify(values, null, 2));
                    // show message

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. I will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    vaçies.subject = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>
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
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <Field
                            id="form_subject"
                            type="text"
                            name="subject"
                            placeholder="Assunto"
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
                  <h5 className="fw-900 mb-10">EMAIL:</h5>
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
