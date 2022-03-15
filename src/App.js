import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BodyPage from "./components/BodyPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Privacity from "./components/Privacity";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    //<div className="App">
    //  <Navbar />
    //  <div className="col-md-12">
    //    <BodyPage />
    //  </div>
    //  <div className="col-md-12">
    //    <Footer />
    //  </div>
    //</div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BodyPage />} />

        <Route path="/avisoprivacidad" element={<Privacity />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
