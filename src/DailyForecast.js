import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function updateForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="col">
          <ForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiKey = "6d68aadfacdd4f5163bc273049a0cf2d";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall";

    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(updateForecast);
    return null;
  }
}
