import React from "react";
import styled from "styled-components";

import Logo from "../../Home/Header/Logo";
import Filters from "./Filters";

const Wrap = styled.div`
  height: 100%;
  background: linear-gradient(
    173.39deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 12px;
`;

export default function() {
  return (
    <Wrap>
      <div className="container">
        <div className="row between-lg middle-lg">
          <Logo />
          <Button>RUB</Button>
        </div>
        <div className="row">
          <Filters />
        </div>
      </div>
    </Wrap>
  );
}
