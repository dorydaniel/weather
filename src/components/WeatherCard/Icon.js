import React from "react";
import styled from "@emotion/styled";

const Icon = ({ condition }) => {
  const Icon = styled.img`
    width: 40%;
  `;

  var icon = "";
  switch (condition) {
    case "Clouds":
      icon = `Mostly Cloudy`;
      break;
    case "Clear":
      icon = `Mostly Sunny`;
      break;
    case "Haze":
      icon = `Haze`;
      break;
    case "Hail":
      icon = `Hail`;
      break;
    case "Fog":
      icon = `Fog`;
      break;
    case "Tornado":
      icon = `Tornado`;
      break;
    case "Dust":
      icon = `Dust`;
      break;
    case "Mist":
      icon = `Fog`;
      break;
    case "Snow":
      icon = `Snow`;
      break;
    case "Rain":
      icon = `Rain`;
      break;
    case "Drizzle":
      icon = `Drizzle`;
      break;
    case "Thunderstorm":
      icon = `Severe Thunderstorm`;
      break;
    default:
      icon = `Fog`;
      break;
  }

  return <Icon src={`./img/${icon}-2x.png`} alt="Weather Icon" />;
};

export default Icon;
