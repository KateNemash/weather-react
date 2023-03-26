import React, { useState } from "react";

export default function UnitConvertion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="col temperature">
        <span className="changing-temp">{Math.round(props.celsius)}</span>
        <span className="temperature-units">
          °C /
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="col temperature">
        <span className="changing-temp">{Math.round(fahrenheit())}</span>
        <span className="temperature-units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          / °F
        </span>
      </div>
    );
  }
}
