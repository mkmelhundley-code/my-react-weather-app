import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.jsx";
import Forecast from "./Forecast.jsx";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "3oa2b4640a831a6act8f0d75a77730e5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="search-input"
            onChange={handleCityChange}
          />
          <input type="submit" className="search-button" />
        </form>
        <hr />
        <WeatherInfo data={weatherData.city} />
        <hr />
        <Forecast city={city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
