/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/tr">
          <a className="logo">
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
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">Redução na conta</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">Projetos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">Quem somos</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">
                  Time
                </a>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
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
