import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <header className="Header">
      <div className="row">
        <div className="col">
          <h1>Barcelona</h1>
          <h2>Sat, 09.07.2022</h2>
        </div>
        <div className="col">
          <h3>13:07</h3>
        </div>
      </div>
    </header>
  );
}
