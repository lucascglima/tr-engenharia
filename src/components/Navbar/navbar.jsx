/* eslint-disable @next/next/no-img-element */
import React from "react";

import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { Link } from "react-scroll";
const Navbar = ({ lr, nr, theme }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change nav-scroll ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container nav-style">
        {/* <Link to="container"> */}
        <a className="logo mr-auto" onClick={scrollTop}>
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={appData.darkLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" />
          )}
        </a>
        {/* </Link> */}

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li
              onClick={handleMobileDropdown}
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <a className="nav-link" onClick={scrollTop}>
                Home
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <Link
                onClick={handleDropdown}
                to="howItWorks"
                className="nav-link"
                absolute={true}
              >
                Redução na conta
              </Link>
            </li>

            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <Link onClick={handleDropdown} to="projects" className="nav-link">
                Projetos executados
              </Link>
            </li>

            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <Link onClick={handleDropdown} to="whoWeAre" className="nav-link">
                Quem somos
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <Link onClick={handleDropdown} to="footer" className="nav-link">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
