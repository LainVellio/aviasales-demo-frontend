import React from "react";
import styled from "styled-components";
import Section from "./Section";

import anywhere from "./anywhere.svg";
import sea from "./sea.svg";
import shoping from "./shoping.svg";
import culture from "./culture.svg";
import nightlife from "./nightlife.svg";
import rest from "./rest.svg";

const Wrap = styled.div`
  display: flex;
  margin-top: 56px;
  margin-bottom: 58px;
  justify-content: center;
  width: 100%;
`;

export default function() {
  return (
    <Wrap>
      <Section img={anywhere} text="КУДА УГОДНО" />
      <Section img={sea} text="СОЛНЦЕ И МОРЕ" />
      <Section img={shoping} text="ШОПИНГ, ГОРОД" />
      <Section img={culture} text="КУЛЬТУРА И ИСТОРИЯ" />
      <Section img={nightlife} text="НОЧНАЯ ЖИЗНЬ" />
      <Section img={rest} text="ОТДЫХ С ДЕТЬМИ" />
    </Wrap>
  );
}
