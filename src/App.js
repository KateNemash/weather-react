import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";

import Forecast from "./Forecast";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
}
