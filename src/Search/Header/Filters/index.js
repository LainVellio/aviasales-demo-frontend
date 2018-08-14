import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  margin-top: 39px;
  margin-bottom: 32px;
`;

const Filters = styled.div`
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
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  color: #ffffff;
  background: #ff9241;
  border-radius: 4px;
  border: none;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 31px;
  padding-right: 31px;
  weight: 100%;
`;

export default function() {
  return (
    <Wrap>
      <div className="row">
        <div className="col-lg-10">
          <Filters>
            <CityDeparture />
            <CityArrival />
            <DateDeparture />
            <DateArrival />
            <Passengers>
              <option> 1 пассажир, эконом </option>
            </Passengers>
          </Filters>
        </div>

        <div className="col-lg-2">
          <div>
            <Button>Найти билеты</Button>
          </div>
        </div>
      </div>
    </Wrap>
  );
}
