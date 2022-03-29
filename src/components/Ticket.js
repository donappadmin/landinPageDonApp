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
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "80%",
            margin: "2rem auto",
            padding: "2rem",
            borderRadius: "20px",
          }}
        >
          <View>
            <Image style={{width: "6rem",
    margin: "2rem"}} alt="logo" src={logo} />
            <Text
              style={{
                float: "left",
                margin: "2.5rem 2rem 2rem 2rem",
                fontWeight: "bold",
                color: "#a58ffd",
              }}
            >
              ¡Gracias por comprar en DonApp!
            </Text>

            {/*<hr
              style={{
                border: "0",
                height: "3px !important",
                backgroundColor: "#6533ff",
                margin: "3rem",
              }}
            />*/}
          </View>
          <Text
            style={{ color: "#ef2b43", textAlign: "center", padding: ".5rem" }}
          >
            Número de ticket: {id}
          </Text>
          <Text
            style={{ color: "#ef2b43", textAlign: "center", padding: ".5rem" }}
          >
            Número de tienda:{store}
          </Text>

          {transaction && (
            <>
              <View className="data-div">
                <Text
                  style={{
                    color: "#6533ff",
                    textAlign: "center",
                    padding: ".5rem",
                  }}
                >
                  Ticket: {transaction.request.upc}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6533ff",
                    textAlign: "center",
                    padding: ".5rem",
                  }}
                >
                  Autorización: {transaction.auth}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6533ff",
                    textAlign: "center",
                    padding: ".5rem",
                  }}
                >
                  Teléfono: {transaction.input}
                </Text>
              </View>
            </>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default Ticket;
