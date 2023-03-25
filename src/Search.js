import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function updateWeather(response) {
    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "611ef8bba21afa45018dc308c456cb60";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div>
        <form className="search" id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            autocomplete="off"
            id="search-input"
            className="search-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
          <input type="submit" value="Current" id="current-location" />
        </form>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <form className="search" id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          autoFocus="on"
          autocomplete="off"
          id="search-input"
          className="search-input"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
        <input type="submit" value="Current" id="current-location" />
      </form>
    );
  }
}
