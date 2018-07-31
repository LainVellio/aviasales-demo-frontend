import React from "react";
import styled from "styled-components";

import Card from "./CityCard";
import { CardCity } from "./CityCard";

import compass from "./compass.svg";
import pen from "./pen.svg";

import anywhere from "./anywhere.svg";
import sea from "./sea.svg";
import shoping from "./shoping.svg";
import culture from "./culture.svg";
import nightlife from "./nightlife.svg";
import rest from "./rest.svg";
import calendar from "./calendar.svg";

const Cities = styled.div`
  background: #f8fcff;
  padding-top: 56px;
  height: 1414px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompassImg = styled.img`
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  text-align: center;
  color: #4a4a4a;
`;

const Pen = styled.img``;

const Navigation = styled.div`
  display: flex;
  margin-top: 56px;
`;
const NavElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  margin-right: 56px;
  text-align: center;
  font-family: Roboto;
  line-height: 20px;
  font-size: 12px;
  color: #00ace2;
  font-style: normal;
  font-weight: normal;
`;
const NavImgBackground = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;
const NavElementImg = styled.img``;

const CitiesCard = styled.div`
  display: flex;
  margin-top: 55px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 35px;
`;

const CalendarImg = styled.img``;

const LostMonthTitle = styled.text`
  font-family: Roboto;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  text-align: center;
  color: #4a4a4a;
  margin-top: 20px;
`;

export default function(props) {
  return (
    <Cities>
      <Container className="container">
        <CompassImg src={compass} />
        <Title>Популярные направления перелетов</Title>
        <Title>
          из города Москва <Pen src={pen} />
        </Title>
        <Navigation>
          <NavElement>
            <NavImgBackground>
              <NavElementImg src={anywhere} />
            </NavImgBackground>КУДА УГОДНО
          </NavElement>
          <NavElement>
            <NavImgBackground>
              <NavElementImg src={sea} />
            </NavImgBackground>СОЛНЦЕ И МОРЕ
          </NavElement>
          <NavElement>
            <NavImgBackground>
              <NavElementImg src={shoping} />
            </NavImgBackground>ШОПИНГ, ГОРОД
          </NavElement>
          <NavElement>
            <NavImgBackground>
              <NavElementImg src={culture} />
            </NavImgBackground>КУЛЬТУРА И ИСТОРИЯ
          </NavElement>
          <NavElement>
            <NavImgBackground>
              <NavElementImg src={nightlife} />
            </NavImgBackground>НОЧНАЯ ЖИЗНЬ
          </NavElement>
          <NavElement>
            <NavImgBackground>
              <NavElementImg src={rest} />
            </NavImgBackground>ОТДЫХ С ДЕТЬМИ
          </NavElement>
        </Navigation>
        <CitiesCard>
          {CardCity(shoping)}
          {CardCity(culture)}
          {CardCity(culture)}
          {CardCity(culture)}
          {CardCity(culture)}
          {CardCity(culture)}
        </CitiesCard>
        <CalendarImg src={calendar} />
        <LostMonthTitle>
          Лучшие цены на авиабилеты за последний месяц
        </LostMonthTitle>
      </Container>
    </Cities>
  );
}
