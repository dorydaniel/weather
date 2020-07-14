import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import WeatherCard from "./WeatherCard/Component";

const WeatherEngine = ({ location }) => {
  const SearchBtn = styled.button`
    padding: 1%;
    margin: 2%;
    font-family: "Fira Sans", sans-serif;
  `;

  const [query, setQuery] = useState(location);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null,
  });

  const getWeather = async (q) => {
    setIsLoading(true);
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=d265e4ce81a183424e3f69a1dbb0bb9b`
      );
      const resJson = await apiRes.json();
      setWeather({
        city: resJson.name,
        country: resJson.sys.country,
        temp: resJson.main.temp,
        condition: resJson.weather[0].main,
      });
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setError(false);
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div style={{ margin: "3%", textAlign: "center", position: "relative" }}>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
        isLoading={isLoading}
        error={error}
      />
      <form>
        <input
          type="text"
          style={{
            borderRadius: "10px",
            padding: "2%",
            textAlign: "center",
            fontFamily: "Fira Sans, sans-serif",
            outline: "none",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <br />
        <SearchBtn onClick={(e) => handleClick(e)}>Search</SearchBtn>
      </form>
    </div>
  );
};

export default WeatherEngine;
