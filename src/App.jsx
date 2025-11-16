import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Weather from "./Weather.jsx";
import Forecast from "./Forecast.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Gresham" />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
