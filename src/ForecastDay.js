import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="DailyForecast-days">{day()}</div>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={props.data.description}
          width={50}
        />
        <div className="DailyForecast-temperatures">
          <span className="DailyForecast-temperature-max">{maxTemp()}</span>
          <span className="DailyForecast-temperature-min">{minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
