import React from "react";
import "../styles/bodyPage.scss";
import logo from "../assets/logo.png";
import cel from "../assets/cel.PNG";
import requisitos from "../assets/requisitos.gif";
import requi from "../assets/requi.gif";

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
              <span>
                La mejor app para recargar tiempo aire y pagar servicios desde
                tu computadora o celular!
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-12 div-cel">
          <img className="cel" alt="img-cel" src={cel} />
        </div>

        <div className="row">
          <div className="col-md-6 title-logo">
            <a name="requisitos">
              <h1 className="title-r">

                Gana más con Don App en 6 sensillos pasos
              </h1>
            </a>
            <p className="list">
              <ol>
                <li>Descarga la app y regístrate</li>
                <li>
                Espera la visita del representante de tu zona para terminar el registro
                </li>
                <li>Empieza a vender nuestra amplia ga,a de productos y gana comisiones sin invertir un solo peso</li>
                <li>
                  prepara tu saldo por entregar para la visita del representante de t+u zona
                </li>
                <li>
                  Confirma el monto en la app y entregalo al representante
                </li>
                <li>
                  Sigue vendiendo y ganando más con Don App
                </li>
              </ol>
            </p>
           
          </div>
          <div className="col-md-6 logo-body">
            <img className="gif" alt="gif" src={requisitos} />
          </div>
        </div>

        <div className="row">
        <div className="col-md-6 logo-body">
            <img className="gif" alt="gif" src={requisitos} />
          </div>
          <div className="col-md-6 title-logo">
            
              
              <h1 className="title-r">
                ¿Qué necesito para afiliarme a Don App?
              </h1>
            
            
            <p className="list">
              <ol>
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
            </p>
          </div>
         
        </div>




      </div>
      <Footer />
    </>
  );
};

export default BodyPage;
