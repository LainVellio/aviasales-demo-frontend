import React from "react";
import styled from "styled-components";

import arrowleft from "./arrowleft.svg";
import aeroflot from "./aeroflot.png";
import s7 from "./s7.png";
import onetwotrip from "./onetwotrip.png";
import koreanair from "./koreanair.png";
import elal from "./elal.png";
import arrowright from "./arrowright.svg";

import dot from "./dot.svg";
import emptydot from "./emptydot.svg";

const Title = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 40px;
  font-size: 30px;
  color: #5c5c5c;
  padding-bottom: 15px;
`;

const Airlines = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowImg = styled.img``;

const DotArea = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 28px;
`;
const Dot = styled.img``;

const AirlineImg = styled.img``;

export default function() {
  return (
    <div className="row center-lg">
      <div className="col-lg-10">
        <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
        <Airlines>
          <div>
            <ArrowImg src={arrowleft} />
          </div>
          <AirlineImg src={aeroflot} />
          <AirlineImg src={s7} />
          <AirlineImg src={onetwotrip} />
          <AirlineImg src={koreanair} />
          <AirlineImg src={elal} />
          <div>
            <ArrowImg src={arrowright} />
          </div>
        </Airlines>
        <DotArea>
          <Dot src={dot} />
          <Dot src={emptydot} />
          <Dot src={emptydot} />
        </DotArea>
      </div>
    </div>
  );
}
