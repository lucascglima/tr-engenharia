/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";
import { Element } from "react-scroll";
const AboutUs = () => {
  return (
    <Element name="howItWorks">
      <section className="about-us section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 valign md-mb50">
              <div className="mb-50">
                <h6 className="fw-100 text-u ls10 mb-10">
                  {AboutUs1Date.smallTitle}
                </h6>
                <h3 className="fw-600 text-u ls1 mb-30 color-font">
                  {AboutUs1Date.title}
                </h3>
                <p>{AboutUs1Date.content}</p>
                <Link href="/about/about-dark">
                  <a className="butn bord curve mt-30 btn-cta">
                    <span>RECEBA ECONOMIA NA SUA CONTA</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="img img-benefits">
              <img src={AboutUs1Date.image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs;
