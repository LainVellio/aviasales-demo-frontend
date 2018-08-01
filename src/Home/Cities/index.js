import React from "react";
import styled from "styled-components";

import CityCard from "./CityCard";
import Nav from "./Navigation";
import BestPrice from "./BestPrice";

import compass from "./compass.svg";
import pen from "./pen.svg";
import anywhere from "./anywhere.svg";
import sea from "./sea.svg";
import shoping from "./shoping.svg";
import culture from "./culture.svg";
import nightlife from "./nightlife.svg";
import rest from "./rest.svg";
import calendar from "./calendar.svg";
import path from "./path.svg";

import krasnodar from "./krasnodar.jpg";
import sochi from "./sochi.jpg";
import petersburg from "./petersburg.jpg";
import mineral from "./mineral.jpg";
import simferopol from "./simferopol.jpg";
import barcelona from "./barcelona.jpg";

import russia from "./russia.png";
import spain from "./spain.png";
import armenia from "./armenia.png";
import moldavia from "./moldavia.png";

const Cities = styled.div`
  background: #f8fcff;
  padding-top: 56px;
`;

const Compass = styled.div`
  display: flex;
  justify-content: center;
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
  margin-bottom: 58px;
  justify-content: center;
`;

const CalendarImg = styled.img``;

const TitleBestPrice = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  color: #4a4a4a;
  margin-bottom: 50px;
`;

const BestPriceCenter = styled.div`
  display: flex;
  flex-direction: row;
`;

const PathLeft = styled.div`
  padding-right: 32px;
  padding-left: 16px;
`;

const PathRight = styled.div`
  padding-right: 16px;
  padding-left: 32px;
`;

const PathImg = styled.img``;

export default function(props) {
  return (
    <Cities>
      <div className="row center-xs">
        <div className="container">
          <Compass>
            <CompassImg src={compass} />
          </Compass>
          <Title>Популярные направления перелетов</Title>
          <Title>
            из города Москва <Pen src={pen} />
          </Title>

          <Navigation>
            <Nav img={anywhere} text="КУДА УГОДНО" />
            <Nav img={sea} text="СОЛНЦЕ И МОРЕ" />
            <Nav img={shoping} text="ШОПИНГ, ГОРОД" />
            <Nav img={culture} text="КУЛЬТУРА И ИСТОРИЯ" />
            <Nav img={nightlife} text="НОЧНАЯ ЖИЗНЬ" />
            <Nav img={rest} text="ОТДЫХ С ДЕТЬМИ" />
          </Navigation>

          <div className="row center-xs">
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
          </div>
          <CalendarImg src={calendar} />

          <TitleBestPrice>
            Лучшие цены на авиабилеты за последний месяц
          </TitleBestPrice>
          <div className="row center-xs">
            <div className="col-xl-3">
              <BestPrice
                img={russia}
                country="РОССИЯ"
                city="Симферополь (Крым)"
                city1="Москвы"
                price1="4 813"
                city2="Санкт-Петербурга"
                price2="7 857"
                city3="Новосибирска"
                price3="15 127"
                city4="Екатеринбурга"
                price4="9 275"
                city5="Челябинска"
                price5="9 148"
              />
            </div>
            <div className="col-xl-4">
              <BestPriceCenter>
                <PathLeft>
                  <PathImg src={path} />
                </PathLeft>
                <BestPrice
                  img={armenia}
                  country="АРМЕНИЯ"
                  city="Ереван"
                  city1="Москвы"
                  price1="6 758"
                  city2="Санкт-Петербурга"
                  price2="9 932"
                  city3="Сочи"
                  price3="11 951"
                  city4="Краснодара"
                  price4="11 741"
                  city5="Ростова-на-Дону"
                  price5="11 956"
                />
                <PathRight>
                  <PathImg src={path} />
                </PathRight>
              </BestPriceCenter>
            </div>
            <div className="col-xl-3">
              <BestPrice
                img={moldavia}
                country="МОЛДАВИЯ"
                city="Кишинёв"
                city1="Москвы"
                price1="8 319"
                city2="Санкт-Петербурга"
                price2="10 800"
                city3="Краснодара"
                price3="12 098"
                city4="Сургута"
                price4="16 277"
                city5="Нового Уренгоя"
                price5="15 987"
              />
            </div>
          </div>
        </div>
      </div>
    </Cities>
  );
}
