import React from "react";

export default function Forecast(props) {
  let week = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  let date = new Date(props.forecast.time * 1000);
  let weekday = week[date.getDay()];

  let maxtemp = Math.round(props.forecast.temperature.maximum);
  let mintemp = Math.round(props.forecast.temperature.minimum);

  let icon = props.forecast.condition.icon_url;

  console.log(props.forecast);

  return (
    <div className="col-sm">
      <div>{weekday}</div>
      <div>
        {maxtemp} | {mintemp}
      </div>
      <div>
        <img src={icon} />
      </div>
    </div>
  );
}
