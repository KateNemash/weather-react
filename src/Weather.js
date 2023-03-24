import React from "react";

import "./styles.css";

export default function Weather() {
  return (
    <div class="row center">
      <div class="col temperature">
        <span class="changing-temp"></span>
        <span class="temperature-units">°C</span>
      </div>
      <div class="col">
        <img src="" alt="" class="sun-icon" id="icon" />
      </div>
      <div class="col details">
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
