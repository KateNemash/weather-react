import React from "react";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row center">
        <div className="col temperature">
          <span className="changing-temp">
            {Math.round(props.data.temperature)}
          </span>
          <span className="temperature-units">°C</span>
        </div>
        <div className="col">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="sun-icon"
            id="icon"
          />
        </div>
        <div className="col details">
          <ul>
            <li>
              Feels like:{" "}
              <span id="feels-like">{Math.round(props.data.feels)}</span>°C
            </li>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind-speed">{props.data.wind}</span> m/s
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
