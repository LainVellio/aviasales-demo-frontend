import React from "react";
import styled from "styled-components";

import Filters from "./Filters";

const Wrap = styled.div`
  margin-top: 254px;
`;

const TitleTop = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;
const TitleBottom = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
`;

export default function() {
  return (
    <Wrap>
      <TitleTop>Поиск дешевых авиабилетов</TitleTop>
      <TitleBottom>Лучший способ купить авиaбилеты дешево</TitleBottom>
      <Filters />
    </Wrap>
  );
}
