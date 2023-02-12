/* eslint-disable @next/next/no-img-element */
import React from "react";

const Team2 = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h3
                className="wow fw-900 text-u ls1 mb-30 color-font"
                data-wow-delay=".50s"
              >
                Nosso Time
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="item cir md-mb50">
              <div className="img">
                <img src="/img/tr/team-member-min.jpg" alt="" />
                <div id="circle1">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath1"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath1" fill="none" />
                      <text fill="#fff">
                        <textPath xlinkHref="#circlePath1">
                          Diretor executivo Diretor executivo Diretor executivo{" "}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6> Tiago Lima</h6>
                  <span className="white-text">Engenheiro Civil</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item cir md-mb50">
              <div className="img">
                <img src="/img/tr/team-member-min.jpg" alt="" />
                <div id="circle2">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath2"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath2" fill="none" />
                      <text fill="#fff">
                        <textPath xlinkHref="#circlePath2">
                          Diretor executivo Diretor executivo Diretor executivo{" "}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Rodrigo Lima</h6>
                  <span>Engenheiro Civil</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item cir sm-mb50">
              <div className="img">
                <img src="/img/tr/team-member-min.jpg" alt="" />
                <div id="circle3">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath3"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath3" fill="none" />
                      <text fill="#fff">
                        <textPath xlinkHref="#circlePath3">
                          Engenheiro Eletricista Engenheiro Eletricista
                          Engenheiro Eletricista{" "}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Murilo Almeida </h6>
                  <span>Engenheiro Eletricista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team2;
