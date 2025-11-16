import React from "react";
import "./CurrentConditions.css";

export default function CurrentConditions() {
  let weatherData = {
    city: "Gresham",
    date: "Tuesday 4:30 PM",
    description: "Clear Skies",
    humidity: 84,
    wind: 2,
    temperature: 53,
  };
  return (
    <div className="weather-app-data">
      <div className="city-and-conditions">
        <h1 className="weather-app-city">{weatherData.city}</h1>
        <p className="weather-app-details">
          <span>{weatherData.date}</span>,
          <span> {weatherData.description}</span>
          <br />
          Humidity: <strong> {weatherData.humidity}%</strong>, Wind:
          <strong> {weatherData.wind}mph</strong>
        </p>
      </div>
      <div className="weather-app-temperature-container">
        <div className="weather-app-icon">☀️</div>
        <span className="weather-app-temperature">
          {weatherData.temperature}
        </span>
        <span className="weather-app-temperature-unit">°F</span>
      </div>
    </div>
  );
}
