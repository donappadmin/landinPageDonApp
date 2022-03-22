import React from 'react'
import { Link } from "react-router-dom";
import errorLogo from "../assets/errorLogo.png";
import "../styles/errorPage.scss";
const ErrorPage = () => {
  return (
    <div className="errorPage">
    <h1 className="title-error">Ups...<br/>La página no ha sido encontrada</h1>
    <img className="identificador-error" alt="error" src={errorLogo} />
    <div id="link-cont"><Link to="/" className="linkHome">
      Regresar a home
    </Link></div>
    
  </div>
  )
}

export default ErrorPage