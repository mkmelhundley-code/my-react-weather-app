import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weather-temperature">
        <span className="weather-app-temperature">
          {Math.round(props.celsius)}
        </span>
        <span className="weather-app-temperature-unit">
          C° |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-temperature">
        <span className="weather-app-temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="weather-app-temperature-unit">
          <a href="/" onClick={showCelsius}>
            C°
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
