import React, { useState } from "react";
import "../styles/navBar.scss";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      id="mainNavbar"
      className="navbar navbar-dark navbar-expand-lg bg-primary py-0 fixed-top"
    >
      <div className="container-fluid">
        <img className="logo" src={logo} />
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapseNavMenu"
          aria-controls="collapseNavMenu"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse `}
          id="collapseNavMenu"
        >
          <ul className="navbar-nav justify-content-between">
            <li className="nav-item li-header">
              <a className="nav-link" href="#nosotros">
                Nosotros
              </a>
            </li>
            <li className="nav-item li-header">
              <a className="nav-link" href="#requisitos">
                Requisitos
              </a>
            </li>

            <li className="nav-item li-header">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item li-header ">
              <a className="nav-link" href="https://www.don-app.com.mx/">
                Aviso de privacidad
              </a>
            </li>
            <li className="nav-item li-header">
              <a className="nav-link" href="#">
                Preguntas frecuentes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
