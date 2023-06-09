import React, { useState } from "react";
import axios from "axios";
import DateAndTime from "./DateAndTime";
import "./SearchEngine.css";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function SearchEngine() {
  let [city, setCity] = useState("Tokyo");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("cloudy");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [cityName, setCityName] = useState("Tokyo");
  let [icon, setIcon] = useState(
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
  );
  let [timestamp, setTimestamp] = useState("");
  let [userHasSearched, setUserHasSearched] = useState(false);
  let [forecastOne, setForecastOne] = useState({});
  let [forecastTwo, setForecastTwo] = useState({});
  let [forecastThree, setForecastThree] = useState({});
  let [forecastFour, setForecastFour] = useState({});
  let [forecastFive, setForecastFive] = useState({});

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.condition.icon_url);
    setTimestamp(response.data.time);
    setCityName(response.data.city);
    setUserHasSearched(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiGetWeather();
  }

  function handleForecast(response) {
    setForecastOne(response.data.daily[0]);
    setForecastTwo(response.data.daily[1]);
    setForecastThree(response.data.daily[2]);
    setForecastFour(response.data.daily[3]);
    setForecastFive(response.data.daily[4]);
  }

  function apiGetWeather() {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&units=metric&key=tafff7052b3e143e4c8e9o14c3f6bfc4`;
    axios.get(url).then(handleResponse);
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=tafff7052b3e143e4c8e9o14c3f6bfc4&units=metric`;

    axios.get(forecastUrl).then(handleForecast);
  }

  if (userHasSearched) {
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
            <div className="col-sm current-temperature">
              <Temperature celsius={temperature} />
            </div>
            <div className="col-sm current-conditions">
              <ul>
                <span className="cityName">{cityName}</span>
                <br />
                <li>{description}</li>
                <li>humidity: {humidity}%</li>
                <li>wind: {Math.round(wind)} kmph</li>
                <br />
                <DateAndTime date={timestamp} />
              </ul>
            </div>
          </div>
          <div className="row pt-2">
            <Forecast forecast={forecastOne} />
            <Forecast forecast={forecastTwo} />
            <Forecast forecast={forecastThree} />
            <Forecast forecast={forecastFour} />
            <Forecast forecast={forecastFive} />
          </div>
        </div>
      </div>
    );
  } else {
    apiGetWeather();

    return "Loading...";
  }
}
