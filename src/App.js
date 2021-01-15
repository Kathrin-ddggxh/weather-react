import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Search from "./Search";
import Header from "./Header";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather defaultCity="Dublin" />
        <Search />
        <Header />

        <br />
        <Forecast />
        <script src="src/index.js"></script>
      </div>
      <span className="open-source-link">
        <a
          href="https://github.com/Kathrin-ddggxh/weather-react"
          target="_blank"
        >
          Open-source code{" "}
        </a>
        by Kathrin Welfare
      </span>
    </div>
  );
}
