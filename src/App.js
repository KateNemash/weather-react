import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="container weather-app">
      <div className="card">
        <div className="card-body">
          <Header />
          <Search />
          <Weather />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
