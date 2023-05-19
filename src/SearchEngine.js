import React, { useState } from "react";
import Results from "./Results.js";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0]["main"]);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9e0fb79c2f66d0cd0dcf06710976a873`;

    axios.get(url).then(handleResponse);
  }

  return (
    <div>
      <a href="https://github.com/ZoeSttn/my-reactapp">
        Github repository for this project{" "}
      </a>
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          placeholder="Search for a city"
          onChange={changeCity}
        />{" "}
        <input type="submit" value="Search" />
      </form>

      <Results
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
      />
    </div>
  );
}
