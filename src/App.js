import "./App.css";
import BodyPage from "./components/BodyPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="col-md-12">
        <BodyPage />
      </div>
      <div className="col-md-12">
        <Footer />
      </div>
    </div>
  );
}

export default App;
