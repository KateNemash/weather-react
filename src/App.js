import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div class="container weather-app">
      <div class="card">
        <div class="card-body">
          <header>
            <div class="row">
              <div class="col">
                <h1>Barcelona</h1>
                <h2>Sat, 09.07.2022</h2>
              </div>
              <div class="col">
                <h3>13:07</h3>
              </div>
            </div>
          </header>
          <Search />
          <Weather />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}