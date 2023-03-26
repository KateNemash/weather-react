import React from "react";

import "./Header.css";

export default function Header(props) {
  let date = new Date(props.data.datastamp * 1000);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[date.getDay()];

  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[date.getMonth()];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <header className="Header">
      <div className="row">
        <div className="col">
          <h1>{props.data.city}</h1>
          <h2>
            {day}, {date.getDate()}.{month}.{date.getFullYear()}
          </h2>
        </div>
        <div className="col">
          <h3>
            {hours}:{minutes}
          </h3>
        </div>
      </div>
    </header>
  );
}
