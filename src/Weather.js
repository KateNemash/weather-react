import React from "react";

import "./styles.css";

export default function Weather() {
  return (
    <div className="row center">
      <div className="col temperature">
        <span className="changing-temp"></span>
        <span className="temperature-units">°C</span>
      </div>
      <div className="col">
        <img src="" alt="" class="sun-icon" id="icon" />
      </div>
      <div className="col details">
        <ul>
          <li>
            Feels like: <span id="feels-like"></span>°C
          </li>
          <li>
            Humidity: <span id="humidity"></span>%
          </li>
          <li>
            Wind: <span id="wind-speed"></span> m/s
          </li>
        </ul>
      </div>
    </div>
  );
}
