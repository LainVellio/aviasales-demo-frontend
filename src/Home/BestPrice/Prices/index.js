import React from "react";
import styled from "styled-components";

import Card from "./Card";

import russia from "./russia.png";
import armenia from "./armenia.png";
import moldavia from "./moldavia.png";

import dottedline from "./dottedline.svg";

const DottedLineLeft = styled.div`
  margin-right: 25px;
`;

const DottedLineRight = styled.div`
  margin-left: 25px;
`;

const DottedLine = styled.img``;

export default function() {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="row end-xl">
          <div className="col-lg-9">
            <Card
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
        </div>
      </div>
      <div className="col-lg-4">
        <div className="row center-lg">
          <DottedLineLeft>
            <DottedLine src={dottedline} />
          </DottedLineLeft>
          <div className="col-lg-9">
            <Card
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
          </div>
          <DottedLineRight>
            <DottedLine src={dottedline} />
          </DottedLineRight>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="row start-lg">
          <div className="col-lg-9">
            <Card
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
  );
}
