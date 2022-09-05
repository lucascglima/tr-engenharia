import React from "react";
import Split from "../Split";
import Link from "next/link";
import { Element } from "react-scroll";

const CallToAction = ({ img }) => {
  return (
    <Element name="call-action">
      <section className="call-action section-padding sub-bg bg-img">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <Split>
                  <h6
                    className="wow words chars splitting text-yellow "
                    data-splitting
                  >
                    Monte seu projeto de ENERGIA SOLAR
                  </h6>
                  <h2 className="wow words chars splitting" data-splitting>
                    Fale cononosco
                  </h2>
                </Split>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              <Link href={`/contact/contact-dark`}>
                <a
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Saiba mais</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default CallToAction;
