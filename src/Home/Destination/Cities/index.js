import React from "react";
import styled from "styled-components";
import Card from "./Card";

import krasnodar from "./krasnodar.jpg";
import sochi from "./sochi.jpg";
import petersburg from "./petersburg.jpg";
import mineral from "./mineral.jpg";
import simferopol from "./simferopol.jpg";
import barcelona from "./barcelona.jpg";

import russia from "./russia.png";
import spain from "./spain.png";

export default function() {
  return (
    <div className="row center-lg">
      <Card
        img={krasnodar}
        flag={russia}
        city="Краснодар"
        country="РОССИЯ"
        price="1 212"
        date="18 марта"
      />

      <Card
        img={sochi}
        flag={russia}
        city="Сочи (Адлер)"
        country="РОССИЯ"
        price="1 334"
        date="27 марта"
      />
      <Card
        img={petersburg}
        flag={russia}
        city="Санкт-Петербург"
        country="РОССИЯ"
        price="1 508"
        date="19 февраля"
      />
      <Card
        img={mineral}
        flag={russia}
        city="Минеральные воды"
        country="РОССИЯ"
        price="2 074"
        date="13 марта"
      />
      <Card
        img={simferopol}
        flag={russia}
        city="Симферополь (Крым)"
        country="РОССИЯ"
        price="2 407"
        date="24 марта"
      />
      <Card
        img={barcelona}
        flag={spain}
        city="Барселона"
        country="ИСПАНИЯ"
        price="4 247"
        date="24 марта"
      />
    </div>
  );
}
