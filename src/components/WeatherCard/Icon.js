import React from "react";
import styled from "@emotion/styled";

const Icon = ({ condition }) => {
  const Icon = styled.img`
    width: 40%;
  `;

  var icon = "";
  switch (condition) {
    case "Clouds":
      icon = "/imgs/Mostly Cloudy-2x.png";
      break;
    case "Clear":
      icon = "/imgs/Mostly Sunny-2x.png";
      break;
    case "Haze":
      icon = "/imgs/Haze-2x.png";
      break;
    case "Hail":
      icon = "/imgs/Hail-2x.png";
      break;
    case "Fog":
      icon = "/imgs/Fog-2x.png";
      break;
    case "Tornado":
      icon = "/imgs/Tornado-2x.png";
      break;
    case "Dust":
      icon = "/imgs/Dust-2x.png";
      break;
    case "Mist":
      icon = "/imgs/Fog-2x.png";
      break;
    case "Snow":
      icon = "/imgs/Snow-2x.png";
      break;
    case "Rain":
      icon = "/imgs/Rain-2x.png";
      break;
    case "Drizzle":
      icon = "/imgs/Drizzle-2x.png";
      break;
    case "Thunderstorm":
      icon = "/imgs/Severe Thunderstorm-2x.png";
      break;
    default:
      icon = "/imgs/Fog-2x.png";
      break;
  }

  // return <Icon src={window.location.origin + icon} alt="Weather Icon" />;
  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
