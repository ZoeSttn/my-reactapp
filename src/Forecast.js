import React from "react";

export default function Forecast(props) {
  let week = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  let date = new Date(props.forecast.time * 1000);
  let weekday = week[date.getDay()];

  console.log(props.forecast.temperature);

  return (
    <div className="col-sm">
      <div>{weekday}</div>
      <div></div>
    </div>
  );
}
