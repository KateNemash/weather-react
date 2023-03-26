import React from "react";
import UnitConvertion from "./UnitConvertion";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row center">
        <UnitConvertion celsius={props.data.temperature} />
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
