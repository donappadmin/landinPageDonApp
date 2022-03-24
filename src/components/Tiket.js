import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from 'react-query'
import { fetchTx } from '../services/tiket'

const Tiket = () => {

    const { store,id } = useParams();
  
    const { data : transaction} = useQuery('tx',async () => {
        const data = await fetchTx(store,id);
        return data;
    })


    return (
        <>
            <div className="container">
                <h1>Gracias por comprar en DonApp!</h1>
                <h2>Numero de tiket {id}</h2>
                <h3>Numero de tienda {store}</h3>
                {
                    transaction && <>
                        <div>Tiket: {transaction.request.upc}</div> 
                        <div>Autorizacion: {transaction.auth}</div>
                        <div>Telefono: {transaction.input}</div>
                    </>
                }
            </div>
        </>
    )
}

export default Tiket;