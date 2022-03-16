import React from "react";
import BodyPage from "./BodyPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/home.scss"

const Home = () => {
  return (
    <>
      <Navbar />
      <BodyPage />
      <Footer />
    </>
  );
};

export default Home;
