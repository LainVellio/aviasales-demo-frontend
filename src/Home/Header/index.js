import React from "react";
import styled from "styled-components";
import logo from "./Logo.svg";

const Header = styled.header`
  background: linear-gradient(
    151.09deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );
  height: 801px;
  padding-top: 12px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img``;

const LogoText = styled.div`
  padding-left: 12px;
  font-family: Arial;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;
`;

export default function(props) {
  return (
    <Header>
      <div className="container">
        <Logo>
          <LogoImg src={logo} />
          <LogoText>aviasales</LogoText>
        </Logo>
      </div>
    </Header>
  );
}
