import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Weather from "./Weather.jsx";
import CurrentConditions from "./CurrentConditions.jsx";
import Forecast from "./Forecast.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>My React Weather App</h1>
        <Weather />
        <CurrentConditions />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
