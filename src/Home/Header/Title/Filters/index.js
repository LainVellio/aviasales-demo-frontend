import React from "react";
import styled from "styled-components";

import plane from "./Plane.svg";

const CityDeparture = styled.input`
  border-radius: 4px 0 0 4px;
  border: none;
  size: 224px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  align-self: baseline;
`;

const CityArrival = styled.input`
  border: none;
  size: 224px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  align-self: baseline;
`;

const DateDeparture = styled.input`
  border: none;
  size: 224px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  align-self: baseline;
`;

const DateArrival = styled.input`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  align-self: baseline;
`;

const Passengers = styled.select`
  border: none;
  padding-top: 17px;
  padding-bottom: 18px;
  padding-left: 16px;
  padding-right: 45px;
  border-radius: 0 4px 4px 0;
`;

const Button = styled.button`
  background: #ff9241;
  border: none;
  padding-top: 15px;
  padding-bottom: 16px;
  padding-left: 45px;
  border-radius: 4px;
  font-family: Roboto, sans-serif;
  color: white;
  font-weight: 900;
  font-size: 28px;
  margin-top: 48px;
`;

const ButtonImg = styled.img`
  margin-left: 24px;
  margin-right: 24px;
`;

export default function() {
  return (
    <div className="row center-lg">
      <CityDeparture />
      <CityArrival />
      <DateDeparture />
      <DateArrival />
      <Passengers>
        <option>1 пассажир</option>
      </Passengers>
      <Button>
        Найти билеты
        <ButtonImg src={plane} />
      </Button>
    </div>
  );
}
