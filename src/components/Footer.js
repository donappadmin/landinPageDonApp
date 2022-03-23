import React from "react";
import "../styles/footer.scss";
import face from "../assets/social-f.png";
import insta from "../assets/social-i.png";
import mail from "../assets/social-m.png";
import whats from "../assets/social-w.png";
const Footer = () => {
  return (
    <div className="contain-footer">
      <div className="cosa">
        <h6>Síguenos en nuestras redes sociales:</h6>
        
        <div className="link-img">
          <a className="nav-link" href="https://www.facebook.com/VendeConDonApp">
            <img className="social" alt='icon-face'src={face} />
          </a>
          <a className="nav-link" href="#">
            <img className="social" alt='icon-insta' src={insta} />
          </a>
          <a className="nav-link" href="info@don-app.com.mx">
            <img className="social" alt='icon-mail' src={mail} />
          </a>
          <a className="nav-link" href="https://api.whatsapp.com/send?phone=523125933452&app=facebook&entry_point=page_cta&fbclid=IwAR0tYQ50CncCXjDUjyoGLvFbmhJ7fBTCkMJmdl5P95bg83nVe9wx1SrGqx0">
            <img className="social" alt='icon-whats' src={whats} />
          </a>
        </div>
        <div class="liquid"></div>
      </div>
    </div>
  );
};

export default Footer;
