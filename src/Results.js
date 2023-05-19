import React from "react";
import "./results.css";

export default function Results(props) {
  if (props.description !== "") {
    return (
      <div>
        <div className="weatherList">
          <ul>
            <li>Temperature : {Math.round(props.temperature)}°C</li>
            <li>Description : {props.description}</li>
            <li>Humidity : {props.humidity}%</li>
            <li>Wind : {Math.round(props.wind)} kmph</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
