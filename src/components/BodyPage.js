import React from "react";
import "../styles/bodyPage.scss";
import logo from "../assets/logo.png";
import cel from "../assets/cel.PNG";
import requisitos from "../assets/requisitos.gif";

import pasos from "../assets/pasos.png";
import pasoM from "../assets/pasoM.png";


import Navbar from "./Navbar";
import Footer from "./Footer";

const BodyPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row presentation">
          <div className="col-md-6 logo-body">
            <img className="img-body" alt="logo" src={logo} />
          </div>
          <div className="col-md-6 title-logo">
            <h1 className="principal-title">
              Agrega más servicios en tu tienda o negocio.
              <br />
              <p>
                La mejor app para recargar tiempo aire y pagar servicios desde
                tu computadora o celular
              </p>
            </h1>
          </div>
        </div>
        {/*<div className="col-md-12 div-cel">
          <img className="cel" alt="img-cel" src={cel} />
        </div>*/}

        <div className="col-md-12 div-cel">
        <a name="requisitos">
              <h1 className="title-pasos">
                Gana más con Don App en 6 sencillos pasos
              </h1>
            </a>
          <img className="pasos" alt="pasos" src={pasos} />
          <img className="pasoM" alt="pasos" src={pasoM} />
        </div>
        
        <div className="row">
          
          <div className="col-md-6 ">
            <h1 className="title-pasos">¿Qué necesito para afiliarme a Don App?</h1>

            {/*<p className="list">*/}
              <ol className="list">
                <li>Ser dueño de una tienda de abarrotes</li>
                <li>Tener al menos 1 años operando la tienda</li>
                <li>Tener un teléfono inteligente (smartphone)</li>
                <li>
                  Tu información básica Identificación oficial (INE o Pasaporte)
                </li>
                <li>
                  Comprobante de domicilio (Predial o escrituras) Recibo de CFE
                </li>
              </ol>
            {/*</p>*/}
          </div>
          <div className="col-md-6 logo-body">
            <img className="gif" alt="gif" src={requisitos} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BodyPage;
