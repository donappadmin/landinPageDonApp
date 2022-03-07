import React, { useState } from "react";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      id="mainNavbar"
      className="navbar navbar-dark navbar-expand-lg bg-primary py-0 fixed-top"
    >
      <div className="container-fluid">
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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item li-header">
              <a className="nav-link" href="#">
                Pickup
              </a>
            </li>
          </ul>

          <button id="btnLogOut">Cerrar</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
