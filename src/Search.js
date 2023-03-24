import React from "react";

import "./styles.css";

export default function Search() {
  return (
    <form className="search" id="search-form">
      <input
        type="text"
        placeholder="Enter a city"
        autofocus="on"
        autocomplete="off"
        id="search-input"
        className="search-input"
      />
      <input type="submit" value="Search" />
      <input type="submit" value="Current" id="current-location" />
    </form>
  );
}
