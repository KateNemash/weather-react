import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="container weather-app">
      <div className="card">
        <div className="card-body">
          <Search defaultCity="Barcelona" />
          <Forecast />
        </div>
      </div>
      <footer className="footer">
        <a
          href="https://github.com/KateNemash/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Kate Nemash
      </footer>
    </div>
  );
}
