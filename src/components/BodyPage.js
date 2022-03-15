import React from "react";
import "../styles/bodyPage.scss";
import dongif from "../assets/dongif.gif";
import request from "../assets/request.gif";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BodyPage = () => {
  return (
    <>
      <Navbar />
      <div className="contain-body">
        <a name="nosotros">
          <h1 className="section-title1">¿Qué es Don App?</h1>
        </a>
        <div className="section1">
          <div className="contenido1">
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
        <a name="requisitos">
          <h1 className="section-title2">
            ¿Qué necesito para afiliarme a Don App?
          </h1>
        </a>
        <div className="section-2">
          <div className="contenido2">
            <p className="section-text">
              * Ser dueño de una tienda de abarrotes. 
            <br />
              * Tener al menos 1 años operando la tienda.
            <br />
              * Tener un teléfono inteligente (smartphone) 
            <br />
              * Tu información básica Identificación oficial (INE o Pasaporte)
            <br />
              * Comprobante de domicilio (Predial o escrituras) Recibo de CFE
            </p>
          </div>
          <div className="img-gif-right">
            <img className="img-home" alt="gif" src={request} />
          </div>
          <a name="requisitos">
            <h1 className="section-title1">
              ¿Qué necesito para afiliarme a Don App?
            </h1>
          </a>
          <div className="section-1">
            <div className="contenido1">
              <p className="section-text">
                Don App es una aplicación que te ofrece la posibilidad de
                realizar pagos de diferentes servicios tales como luz, agua,
                teléfono ó televisión de paga, entre otros.
                <br />
                Además de vender recargas telefónicas y tiempo aire.
              </p>
            </div>
            <div className="img-gif">
              <img className="img-home" alt="gif" src={request} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BodyPage;
