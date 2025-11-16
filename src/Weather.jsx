import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="search">
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          className="search-input"
        />
        <input type="submit" className="search-button" />
      </form>
      <hr />
    </div>
  );
}
