import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({
  temp,
  condition,
  city,
  country,
  isLoading,
  error,
  resetError,
}) => {
  let highColor;
  let lowColor;
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
  } else {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
  }

  const Card = styled.div`
    margin: 2% auto;
    background: linear-gradient(
      to top,
      rgb(${temp > 12 ? 255 : 0}, ${highColor}, ${temp > 12 ? 0 : 255}),
      rgb(${temp > 12 ? 255 : 0}, ${lowColor}, ${temp > 12 ? 0 : 255})
    );
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  const ErrorDiv = styled.div`
    font-family: "Fira Sans", sans-serif;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <Card>
      {isLoading ? (
        <div className="spinner-border"></div>
      ) : error ? (
        <ErrorDiv>
          <h2>Invalid!</h2>
          <br />
          <h3>Please try again</h3>
          <br />
          <button style={{ padding: "0% 1%" }} onClick={resetError}>
            OK
          </button>
        </ErrorDiv>
      ) : (
        <>
          <Location city={city} country={country} />
          <Icon condition={condition} />
          <Condition temp={temp} condition={condition} />
        </>
      )}
    </Card>
  );
};

export default WeatherCard;
