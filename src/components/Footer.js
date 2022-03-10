import React from "react";
import "../styles/footer.scss";
import face from "../assets/social-f.png";
import insta from "../assets/social-i.png";
import mail from "../assets/social-m.png";
const Footer = () => {
  return (
    <div className="contain-footer">
      <div className="cosa">
        <h6>Síguemos en nuestras redes sociales:</h6>
        <ul className="navbar-nav justify-content-between">
          <li className="nav-item li-header">
            <a className="nav-link" href="#">
            <img className="social" src={face} />
            </a>
          </li>
          <li className="nav-item li-header">
            <a className="nav-link" href="#">
            <img className="social" src={insta} />
            </a>
          </li>
          <li className="nav-item li-header">
            <a className="nav-link" href="#">
            <img className="social" src={mail} />
            </a>
          </li>
        </ul>
        <div class="liquid"></div>
      </div>
    </div>
  );
};

export default Footer;
