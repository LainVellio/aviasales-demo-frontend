import React from "react";
import styled from "styled-components";

import Prices from "./Prices";
import Airlines from "./Airlines";
import Subscription from "./Subscription";
import SpecialOffer from "./SpecialOffer";

import calendar from "./calendar.svg";
import line from "./line.png";

const Wrap = styled.div`
  background: #f8fcff;
`;

const CalendarImg = styled.img``;

const Title = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  color: #4a4a4a;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Text1 = styled.div`
  font-family: Roboto;
  line-height: 26px;
  font-size: 14px;
  text-align: center;
  color: #4a4a4a;
  padding-top: 80px;
  padding-bottom: 16px;
`;

const Text2 = styled.div`
  font-family: Roboto;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
  padding-bottom: 97px;
`;

const Line = styled.div`
  background-position: left bottom;
  background-repeat: repeat-x;
  background-image: url(${line});
  width: 100%;
  height: 7px;
  margin-bottom: 32px;
`;

export default function() {
  return (
    <Wrap>
      <div className="container">
        <div className="center-lg">
          <div>
            <CalendarImg src={calendar} />
          </div>
          <Title>Лучшие цены на авиабилеты за последний месяц</Title>
        </div>
        <Prices />

        <div className="row center-lg">
          <div className="col-xs-6">
            <Text1>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </Text1>
            <Text2>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </Text2>
          </div>
        </div>
        <Airlines />
      </div>

      <Line />

      <div className="container">
        <Subscription />
      </div>
      <SpecialOffer />
    </Wrap>
  );
}
