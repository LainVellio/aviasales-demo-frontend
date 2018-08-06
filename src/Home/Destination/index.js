import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Cities from "./Cities";

import compass from "./compass.svg";
import pen from "./pen.svg";

const Wrap = styled.div`
  background: #f8fcff;
  padding-top: 56px;
`;

const Pen = styled.img``;

const CompassImg = styled.img`
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  text-align: center;
  color: #4a4a4a;
`;

export default function(props) {
  return (
    <Wrap>
      <div className="container">
        <div className="row center-lg">
          <CompassImg src={compass} />
        </div>
        <Title>Популярные направления перелетов</Title>
        <Title>
          из города Москва <Pen src={pen} />
        </Title>
        <Navigation />
        <Cities />
      </div>
    </Wrap>
  );
}
