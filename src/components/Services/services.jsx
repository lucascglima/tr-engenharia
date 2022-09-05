import React from "react";
import featuresData from "../../data/sections/features.json";
import Link from "next/link";

const Services = ({ style, lines }) => {
  return (
    <section className={`services bords section-padding `}>
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-left">
              <h6 className="fw-100 text-u ls10 mb-10">
                Economize, sem precisar investir
              </h6>
              <h3
                className="wow fw-600 text-u ls1 mb-30 color-font"
                data-wow-delay=".5s"
              >
                Como Funciona?
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {featuresData.map((feature) => (
            <div key={feature.id} className="col-lg-6 wow fadeInLeft">
              <div className="item-box item-how-works">
                {/* <div>
                  <span className={`icon ${feature.icon}`}></span>
                </div> */}
                <h6>#{feature.id}</h6>
                <div className="cont">
                  <h6>{feature.title}</h6>
                  <p>{feature.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null}
      <div className="container">
        <div className="row justify-content-center">
          <Link href="/about/about-dark">
            <a className="butn bord curve mt-30 btn-cta">
              <span>SIMULE AGORA SUA ECONOMIA</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
