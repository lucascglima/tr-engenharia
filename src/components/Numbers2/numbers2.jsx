import React from "react";
import Split from "../Split";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Element } from "react-scroll";
const Numbers2 = () => {
  React.useEffect(() => {
    console.clear();
  });
  return (
    <Element name="projects">
      <section className="block-sec section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h1 className="wow fadeInLeft color-font" data-wow-delay=".5s">
                  Nossos Projetos
                </h1>
                {/* <h3 className="wow color-font">Como Funciona</h3> */}
              </div>
            </div>
          </div>
          <div className="number-sec">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="item md-mb50">
                  <span className="icon pe-7s-sun"></span>
                  <h3 className="custom-font">
                    &nbsp;
                    <CountUp redraw={true} end={60} duration="3">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <Split>
                    <h6 className="wow words chars splitting " data-splitting>
                      Usinas Geradoras
                    </h6>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item md-mb50">
                  <span className="icon pe-7s-cash"></span>
                  <h3 className="custom-font">
                    &nbsp;R$
                    <CountUp redraw={true} end={189} duration="3">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    k
                  </h3>
                  <Split>
                    <h6
                      className="wow txt words chars splitting "
                      data-splitting
                    >
                      Economia mensal
                    </h6>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item sm-mb50">
                  <span className="icon pe-7s-gleam"></span>
                  <h3 className="custom-font">
                    &nbsp;
                    <CountUp redraw={true} end={57886} duration="3">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    kWh
                  </h3>
                  <Split>
                    <h6
                      className="wow txt words chars splitting"
                      data-splitting
                    >
                      {" "}
                      Geração mensal{" "}
                    </h6>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item">
                  <span className="icon pe-7s-leaf"></span>
                  <h3 className="custom-font">
                    &nbsp; -
                    <CountUp redraw={true} end={18555} duration="3">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <Split>
                    <h6
                      className="wow txt words chars splitting"
                      data-splitting
                    >
                      Kg de Co₂ por ano
                    </h6>
                  </Split>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Numbers2;
