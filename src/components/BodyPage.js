import React from "react";
import "../styles/bodyPage.scss";
import dongif from "../assets/dongif.gif";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BodyPage = () => {
  return (
    <>
    <Navbar />
    <div className="contain-body">
      <a name="nosotros">
        <h1 className="section-title">¿Qué es Don App?</h1>
      </a>
      <div className="section1">
        <div className="contenido">
          <p className="section-text">
            Don App es una aplicación que te ofrece la posibilidad de realizar
            pagos de diferentes servicios tales como luz, agua, teléfono ó
            televisión de paga, entre otros.
            <br />
            Además de vender recargas telefónicas y tiempo aire.
          </p>
          <p className="section-text">¡Sin invertir un solo peso!</p>
        </div>
        <div className="img-gif">
          <img className="img-home" alt="gif" src={dongif} />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BodyPage;
