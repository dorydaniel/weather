import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="alaska" />
      <WeatherEngine location="brazil" />
      <WeatherEngine location="antarktika" />
      <WeatherEngine location="qatar" />
      {/* <img
        src={"imgs/Dust-2x.png"}
        alt=""
        style={{ width: "200px", height: "200px" }}
      /> */}
    </div>
  );
}

export default App;
