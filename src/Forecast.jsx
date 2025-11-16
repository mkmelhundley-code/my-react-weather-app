import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="weather-forecast">
      <div className="weather-forecast-day">
        <div className="weather-forecast-date">Sunday</div>
        <p className="weather-forecast-icon">🌥️</p>
        <div className="weather-forecast-temperatures">
          <div className="weather-forecast-temperature">
            <strong>58°</strong>
          </div>
          <div className="weather-forecast-temperature">47°</div>
        </div>
      </div>
      <div className="weather-forecast-day">
        <div className="weather-forecast-date">Monday</div>
        <p className="weather-forecast-icon">☁️</p>
        <div className="weather-forecast-temperatures">
          <div className="weather-forecast-temperature">
            <strong>56°</strong>
          </div>
          <div className="weather-forecast-temperature">45°</div>
        </div>
      </div>
      <div className="weather-forecast-day">
        <div className="weather-forecast-date">Tuesday</div>
        <p className="weather-forecast-icon">☀️</p>
        <div className="weather-forecast-temperatures">
          <div className="weather-forecast-temperature">
            <strong>57°</strong>
          </div>
          <div className="weather-forecast-temperature">47°</div>
        </div>
      </div>
      <div className="weather-forecast-day">
        <div className="weather-forecast-date">Wednesday</div>
        <p className="weather-forecast-icon">☁️</p>
        <div className="weather-forecast-temperatures">
          <div className="weather-forecast-temperature">
            <strong>59°</strong>
          </div>
          <div className="weather-forecast-temperature">48°</div>
        </div>
      </div>
      <div className="weather-forecast-day">
        <div className="weather-forecast-date">Thursday</div>
        <p className="weather-forecast-icon">🌧️</p>
        <div className="weather-forecast-temperatures">
          <div className="weather-forecast-temperature">
            <strong>59°</strong>
          </div>
          <div className="weather-forecast-temperature">50°</div>
        </div>
      </div>
    </div>
  );
}
