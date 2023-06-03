import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  let week = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  let date = new Date(props.forecast.time * 1000);
  let weekday = week[date.getDay()];

  let maxtemp = Math.round(props.forecast.temperature.maximum);
  let mintemp = Math.round(props.forecast.temperature.minimum);

  let icon = props.forecast.condition.icon_url;

  return (
    <div className="col-sm">
      <div className="forecast-weekday">{weekday}</div>
      <div className="forecast-temperature">
        {maxtemp}°C | {mintemp}°C
      </div>
      <div>
        <img
          className="forecast-weather-icon"
          alt="Weather Forecast Icon"
          src={icon}
        />
      </div>
    </div>
  );
}
