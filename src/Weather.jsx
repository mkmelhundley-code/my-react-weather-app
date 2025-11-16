import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Sunday, 10:45 AM",
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  if (weatherData.ready) {
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
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <ul className="weather-app-description">
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="weather-app-data">
              <div className="weather-app-temperature-container">
                <div className="weather-app-icon">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />
                </div>
                <span className="weather-app-temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="weather-app-temperature-unit">°F</span>
              </div>

              <ul className="weather-app-details">
                <li>
                  Humidity: <strong>{weatherData.humidity}%</strong>
                </li>
                <li>
                  Wind: <strong>{weatherData.wind} mph</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    const apiKey = "3oa2b4640a831a6act8f0d75a77730e5";
    let city = "Gresham";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
