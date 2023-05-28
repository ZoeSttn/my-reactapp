import React, { useState } from "react";
import "./temperature.css";

export default function Temperature(props) {
  let [unit, setUnit] = useState("metric");
  let fahrenheit = props.celsius * 1.8 + 32;

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <div>
        <span>{Math.round(props.celsius)}</span>
        <a href="/" onClick={convertFahrenheit} className="unitDisplay">
          °C
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(fahrenheit)}</span>
        <a href="/" onClick={convertCelsius} className="unitDisplay">
          °F
        </a>
      </div>
    );
  }
}
