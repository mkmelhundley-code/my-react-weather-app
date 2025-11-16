import React from "react";
import FormattedDate from "./FormattedDate.jsx";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div>
        <div>
          <h1 className="weather-app-city">{props.data.city}</h1>
          <ul className="weather-app-description">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="weather-app-data">
            <div className="weather-app-temperature-container">
              <div className="weather-app-icon">
                <img src={props.data.iconUrl} alt={props.data.description} />
              </div>
              <span className="weather-app-temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="weather-app-temperature-unit">°F</span>
            </div>

            <ul className="weather-app-details">
              <li>
                Humidity: <strong>{props.data.humidity}%</strong>
              </li>
              <li>
                Wind: <strong>{props.data.wind} mph</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
