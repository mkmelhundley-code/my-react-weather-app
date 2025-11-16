import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="search">
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          className="search-input"
        />
        <input type="submit" className="search-button" />
      </form>
      <hr />
      <div>
        <div>
          <h1 className="weather-app-city">Gresham</h1>
          <ul className="weather-app-description">
            <li>Sunday, 9:36 AM</li>
            <li>Fog</li>
          </ul>
          <div className="weather-app-data">
            <div className="weather-app-temperature-container">
              <div className="weather-app-icon">🌫️</div>
              <span className="weather-app-temperature">53</span>
              <span className="weather-app-temperature-unit">°F</span>
            </div>

            <ul className="weather-app-details">
              <li>
                Precipitation: <strong>0%</strong>
              </li>
              <li>
                Humidity: <strong>91%</strong>
              </li>
              <li>
                Wind: <strong>3 mph</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
