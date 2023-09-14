import React from "react";
import featuresData from "../../data/sections/features.json";
import Link from "next/link";

const Services = ({ style, lines }) => {
  return (
    <section className={`services bords section-padding `}>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-md-12 text-center">
            <div className="sec-head  text-center">
              <h6 className="fw-100 text-u ls2 mb-10 text-center">
                Contratação simples e descomplicada{" "}
              </h6>
              <h3
                className="wow fw-900 text-u ls1 mb-30 color-font"
                data-wow-delay=".5s"
              >
                Como Funciona?
              </h3>
            </div>
          </div>
        </div>
        <div className="row how-it-works-box">
          <img src="img/tr/how-it-works-art.webp" alt="how-it-works" />
        </div>
        <div className="row">
          {featuresData.map((feature) => (
            <div key={feature.id} className="col-lg-6 wow fadeInLeft">
              <div className="item-box item-how-works ">
                {/* <div>
                  <span className={`icon ${feature.icon}`}></span>
                </div> */}
                <h5 className="fw-900">#{feature.id}</h5>
                <div className="cont">
                  <h5 className="fw-900 mb-10">{feature.title}</h5>
                  <p className="text-justify">{feature.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/account-reduction">
            <a className="butn bord curve mt-30 btn-cta">
              <span>SIMULE AGORA SUA ECONOMIA</span>
            </a>
          </Link>
        </div>
      </div>
      {/* {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null} */}
    </section>
  );
};

export default Services;
