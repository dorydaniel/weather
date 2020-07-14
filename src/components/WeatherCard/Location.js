import React from "react";
import styled from "@emotion/styled";

const Location = ({ city, country }) => {
  const City = styled.h1`
    font-family: "Merriweather", sans-serif;
    font-size: 1.6rem;
  `;

  const Country = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.1rem;
  `;

  return (
    <div>
      <City>{city}</City>
      <Country>{country}</Country>
    </div>
  );
};

export default Location;
