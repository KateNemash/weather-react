import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Weather from "./Weather";
import DailyForecast from "./DailyForecast";

import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function updateWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      datastamp: response.data.dt,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "611ef8bba21afa45018dc308c456cb60";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div>
        <Header data={weather} />
        <form className="search" id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            autoComplete="off"
            id="search-input"
            className="search-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
          <input type="submit" value="Current" id="current-location" />
        </form>
        <Weather data={weather} />
        <DailyForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
