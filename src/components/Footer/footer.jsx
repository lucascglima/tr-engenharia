/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row justify-content-space-between">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Entre em contato</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h5 className="fw-900 mb-10">Endereço</h5>
                    <p>Be Work casa Forte: Praça de casa forte, 46 - Sala 13</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>contato@trenergiasolar.eco.br</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Telefone</h6>
                    <p>81 - 9.9997- 5415</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="logo" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
