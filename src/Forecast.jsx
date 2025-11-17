import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thursday</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png"
            alt="rain-night"
          />
          <div className="WeatherForecast-temperatures">19 10</div>
        </div>
      </div>
    </div>
  );
}
