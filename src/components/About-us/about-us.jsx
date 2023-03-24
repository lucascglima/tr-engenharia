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
                <h6 className="fw-100 text-u ls2 mb-10">
                  {AboutUs1Date.smallTitle}
                </h6>
                <h4 className="fw-900 text-u ls1 mb-30 color-font">
                  {AboutUs1Date.title1} <br />
                  {AboutUs1Date.title2} <br />
                  {AboutUs1Date.title3}
                </h4>
                <p>{AboutUs1Date.content}</p>
                <Link href="/account-reduction">
                  <a className="butn bord curve mt-40 btn-cta">
                    <span>RECEBA ECONOMIA NA SUA CONTA</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="img img-benefits wow fadeInUp" data-wow-delay=".5s">
              <img src={AboutUs1Date.image} alt="Time Tr Energia" />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs;
