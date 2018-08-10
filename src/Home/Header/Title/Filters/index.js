import React from "react";
import styled from "styled-components";

import plane from "./Plane.svg";

const Wrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const CityDeparture = styled.input`
  border-radius: 4px 0 0 4px;
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  width: 20%;
`;

const CityArrival = styled.input`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  width: 20%;
`;

const DateDeparture = styled.input`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  width: 20%;
`;

const DateArrival = styled.input`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  width: 20%;
`;

const Passengers = styled.select`
  border: none;
  padding-top: 17px;
  padding-bottom: 18px;
  padding-left: 16px;
  border-radius: 0 4px 4px 0;
  width: 20%;
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
      <div className="col-lg-10">
        <Wrap>
          <CityDeparture />

          <CityArrival />

          <DateDeparture />

          <DateArrival />

          <Passengers>
            <option> 1 пассажир, эконом </option>
          </Passengers>
        </Wrap>
      </div>
      <Button>
        Найти билеты
        <ButtonImg src={plane} />
      </Button>
    </div>
  );
}
