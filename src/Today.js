import React from "react";
import "./Today.css";

export default function Today() {
  let weatherData = {
    imgSrc: "images/Weather/Today/01d.svg",
    temperature: "65",
    description: "Clear",
    humidity: "50",
    wind: "4",
    date: "Wednesday May 9, 23:18",
  };

  return (
    <div className="Today">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4 today-weather">
            <img src={weatherData.imgSrc} alt={weatherData.description} />
          </div>
          <div className="col-md-8 temp">
            <div className="card-body">
              <h2 className="card-title">
                Today
                <div>
                  <span>{weatherData.temperature}</span>
                  <span className="units">°F</span>
                </div>
                <ul>
                  <li></li>
                  <li>
                    Humidity: <span>{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span>{weatherData.wind}</span>km/h
                  </li>
                  <em>{weatherData.date}</em>
                </ul>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
