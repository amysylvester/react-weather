import React from "react";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="Header">
      <header>
        <h1>
          <div className="row search">
            <div className="col logo-image">
              <img
                src="Images/Eye/icons8-surprise-500.svg"
                className="eye"
                alt=""
              />
            </div>
            <div className="col logo-text">
              on the
              <br />
              <strong className="sky">SKY</strong>
            </div>
          </div>
        </h1>
      </header>
    </div>
  );
}
