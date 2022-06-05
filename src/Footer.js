import React from "react";
import "./Footer.css";

export default function Footer() {
  let sourceData = {
    open: "https://github.com/amysylvester/react-weather",
    host: "https://sensational-tulumba-9344cc.netlify.app/",
  };

  return (
    <div className="Footer">
      <footer>
        <a href={sourceData.open}>Open-source Code </a>
        by Amy Sylvester and <a href={sourceData.host}>hosted on Netlify</a>
      </footer>
    </div>
  );
}
