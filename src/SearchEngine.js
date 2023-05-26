import React, { useState } from "react";
import axios from "axios";
import DateAndTime from "./DateAndTime";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("cloudy");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState(
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
  );

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.condition.icon_url);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&units=metric&key=tafff7052b3e143e4c8e9o14c3f6bfc4`;

    axios.get(url).then(handleResponse);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm city-search">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a city"
                aria-label="Search for a city"
                aria-describedby="basic-addon2"
                onChange={changeCity}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="results-div">
        <div className="row">
          <div className="col-sm current-weather-icon">
            {" "}
            <img src={icon} alt="Weather icon" />
          </div>
          <div className="col-sm current-temperature pt-3">
            {Math.round(temperature)}
            <sup>°C</sup>
          </div>
          <div className="col-sm current-conditions pt-3">
            <ul>
              <li>{description}</li>
              <li>humidity: {humidity}%</li>
              <li>wind: {Math.round(wind)} kmph</li>
              <br />
              <DateAndTime date="16:00" />
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm forecast-one"></div>
          <div className="col-sm forecast-two"></div>
          <div className="col-sm forecast-three"></div>
          <div className="col-sm forecast-four"></div>
          <div className="col-sm forecast-five"></div>
        </div>
      </div>
    </div>
  );
}
