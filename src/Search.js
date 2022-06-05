import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(" ");
  const [message, setMessage] = useState(" ");

  function searchCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayCity(event) {
    event.preventDefault();
    setMessage(`It is currently 10°C in ${city}`);
  }

  return (
    <div className="location">
      <form onSubmit={displayCity}>
        <input
          className="form-control"
          placeholder="Enter a City..."
          type="search"
          onChange={searchCity}
        />
      </form>
      <h2 className="location-displayed">{message}</h2>
    </div>
  );
}
