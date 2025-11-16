import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        This project is coded by
        <a href="https://github.com/mkmelhundley-code" target="_blank">
          Melissa Hundley
        </a>
        , is open-sourced on
        <a
          href="https://github.com/mkmelhundley-code/my-react-weather-app"
          target="_blank"
        >
          GitHub
        </a>
        , and hosted on
        <a href="https://vanilla-weather-app-rose.vercel.app/" target="_blank">
          Vercel
        </a>
      </footer>
    </div>
  );
}
