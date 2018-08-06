import React from "react";
import styled from "styled-components";
import logo from "./Logo.svg";

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img``;

const Text = styled.div`
  padding-left: 12px;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;

export default function() {
  return (
    <Wrap>
      <Img src={logo} />
      <Text>aviasales</Text>
    </Wrap>
  );
}
