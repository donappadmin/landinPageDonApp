import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacity from "./components/Privacity";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/avisoprivacidad" element={<Privacity />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
