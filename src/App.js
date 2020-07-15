import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="alaska" />
      <WeatherEngine location="qatar" />
    </div>
  );
}

export default App;
