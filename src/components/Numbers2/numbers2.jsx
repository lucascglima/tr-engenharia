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
                <h3
                  className="wow fw-900 text-u ls1  color-font"
                  data-wow-delay=".5s"
                >
                  NOSSOS PROJETOS
                </h3>
              </div>
            </div>
          </div>
          <div className="number-sec pt-60 pb-60">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="item md-mb50">
                  <span className="icon pe-7s-sun"></span>
                  <h4 className="fw-900 text-u ls1 mb-30 color-font text-center">
                    &nbsp;
                    <CountUp redraw={true} end={70} duration="3">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h4>
                  <Split>
                    <h5 className="fw-900 mb-10" data-splitting>
                      Usinas Geradoras
                    </h5>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item md-mb50">
                  <span className="icon pe-7s-cash"></span>
                  <h4 className="fw-900 text-u ls1 mb-30 color-font">
                    &nbsp; R${" "}
                    <CountUp redraw={true} end={19} duration="3">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    M
                  </h4>
                  <Split>
                    <h5 className="fw-900 mb-10" data-splitting>
                      Economia mensal em milhões de reais
                    </h5>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item sm-mb50">
                  <span className="icon pe-7s-gleam"></span>
                  <h4 className="fw-900 text-u ls1 mb-30 color-font">
                    &nbsp;
                    <CountUp redraw={true} end={2715} duration="3">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h4>
                  <Split>
                    <h5 className="fw-900 mb-10" data-splitting>
                      GWh (Gigawatt-hora) de Geração mensal
                    </h5>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item">
                  <span className="icon pe-7s-leaf"></span>
                  <h4 className="fw-900 text-u ls1 mb-30 color-font">
                    &nbsp; -
                    <CountUp redraw={true} end={138} duration="3">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h4>
                  <Split>
                    <h5 className="fw-900 mb-10">Toneladas de CO² por ano</h5>
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
