import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { fetchTx } from "../services/tiket";
//import "../styles/ticket.scss";
import logo from "../assets/logo-icon.png";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const Ticket = () => {
  const { store, id } = useParams();

  const { data: transaction } = useQuery("tx", async () => {
    const data = await fetchTx(store, id);
    return data;
  });

  return (
    <>
      <div className="container-ticket">
        <div className="container-title-ticket">
          <img className="logo-ticket" alt="logo" src={logo} />
          <h1>¡Gracias por comprar en DonApp!</h1>
        <hr/> 
        <br/> 
        </div>
        <h3 className="ticket-data">Número de ticket: {id}</h3>
        <h3 className="ticket-data">Número de tienda:{store}</h3>
        <hr/> 
        <br/> 
        {transaction && (
          <>
            <div className="data-div"> <h5>Ticket: {transaction.request.upc}</h5></div>
            <div className="data-div"> <h5>Autorización: {transaction.auth}</h5></div>
            <div className="data-div"> <h5>Teléfono: {transaction.input}</h5></div>
          </>
        )}
      </div>
    </>
  );
};

export default Ticket;
