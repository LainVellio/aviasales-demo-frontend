import React from "react";
import styled from "styled-components";

import CityCard from "./CityCard";
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

import krasnodar from "./krasnodar.jpg";
import sochi from "./sochi.jpg";
import petersburg from "./petersburg.jpg";
import mineral from "./mineral.jpg";
import simferopol from "./simferopol.jpg";
import barcelona from "./barcelona.jpg";

import russia from "./russia.jpg";
import spain from "./spain.jpg";

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

const Cards = styled.div`
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
        <Cards>
          <CityCard
            img={krasnodar}
            flag={russia}
            city="Краснодар"
            country="РОССИЯ"
            price="1 212"
            date="18 марта"
          />
          <CityCard
            img={sochi}
            flag={russia}
            city="Сочи (Адлер)"
            country="РОССИЯ"
            price="1 334"
            date="27 марта"
          />
          <CityCard
            img={petersburg}
            flag={russia}
            city="Санкт-Петербург"
            country="РОССИЯ"
            price="1 508"
            date="19 февраля"
          />
          <CityCard
            img={mineral}
            flag={russia}
            city="Минеральные воды"
            country="РОССИЯ"
            price="2 074"
            date="13 марта"
          />
          <CityCard
            img={simferopol}
            flag={russia}
            city="Симферополь (Крым)"
            country="РОССИЯ"
            price="2 407"
            date="24 марта"
          />
          <CityCard
            img={barcelona}
            flag={spain}
            city="Барселона"
            country="ИСПАНИЯ"
            price="4 247"
            date="24 марта"
          />
        </Cards>
        <CalendarImg src={calendar} />
      </Container>
    </Cities>
  );
}
