/* eslint-disable @next/next/no-img-element */
import React from "react";
import LinkNext from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { Link } from "react-scroll";
const Navbar = ({ lr, nr, theme }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", duration: "1000" });
  };
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container nav-style">
        {/* <Link to="container"> */}
        <a className="logo ml-auto" onClick={scrollTop}>
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
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link to="container" smooth={true} duration={250}> */}
              <a className="nav-link" onClick={scrollTop}>
                Home
              </a>
              {/* </Link> */}
            </li>
            <li className="nav-item">
              <Link to="howItWorks" smooth={true} duration={1000}>
                <a className="nav-link">Redução na conta</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={1000}>
                <a className="nav-link">Projetos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="whoWeAre" smooth={true} duration={1000}>
                <a className="nav-link">Quem somos</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="first" smooth={true} duration={1000} containerId="containerElement">
                <a className="nav-link">
                  Time
                </a>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="footer" smooth={true} duration={1000}>
                <a className="nav-link">Contato</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
