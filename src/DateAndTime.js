import React from "react";

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function DateAndTime(props) {
  let date = new Date(props.date * 1000);
  let weekday = week[date.getDay()];
  let day = date.getDate();
  let hour = date.getHours();
  if (hour <= 9) {
    hour = "0" + hour;
  }
  let minute = date.getMinutes();
  console.log(date);
  if (minute <= 9) {
    minute = "0" + minute;
  }

  return (
    <li>
      {hour}:{minute} {weekday} {day}{" "}
    </li>
  );
}
