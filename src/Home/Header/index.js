import React from "react";
import styled from "styled-components";
import logo from "./Logo.svg";
import plane from "./Plane.svg";

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
  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;

const Title = styled.div`
  display: flex;
  margin-top: 254px;
  flex-direction: column;
  align-items: center;
`;

const TitleTop = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
`;
const TitleBottom = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
`;

const Input = styled.div`
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 48px;
`;

const InputDeparture = styled.input`
  border-radius: 4px 0 0 4px;
  border: none;
  size: 224px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  align-self: baseline;
`;

const InputArrival = styled.input`
  border: none;
  size: 224px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  align-self: baseline;
`;

const InputDepartureDate = styled.input`
  border: none;
  size: 224px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  align-self: baseline;
`;

const InputArrivalDate = styled.input`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  margin-right: 2px;
  align-self: baseline;
`;

const TitleSelect = styled.select`
  border: none;
  padding-top: 17px;
  padding-bottom: 18px;
  padding-left: 16px;
  padding-right: 45px;
  border-radius: 0 4px 4px 0;
`;
const Button = styled.button`
  background: #ff9241;
  border: none;
  padding-top: 15px;
  padding-bottom: 16px;
  padding-left: 45px;
  border-radius: 4px;
  font-family: Roboto, sans-serif;
  color: white;
  font-weight: 900;
  font-size: 28px;
`;

const ButtonImg = styled.img`
  margin-left: 24px;
  margin-right: 24px;
`;

export default function(props) {
  return (
    <Header>
      <div className="container">
        <Logo>
          <LogoImg src={logo} />
          <LogoText>aviasales</LogoText>
        </Logo>
        <Title>
          <TitleTop>Поиск дешевых авиабилетов</TitleTop>
          <TitleBottom>Лучший способ купить авиaбилеты дешево</TitleBottom>
          <Input>
            <InputDeparture />
            <InputArrival />
            <InputDepartureDate />
            <InputArrivalDate />
            <TitleSelect>
              <option>1 пассажир</option>
            </TitleSelect>
          </Input>
          <Button>
            Найти билеты
            <ButtonImg src={plane} />
          </Button>
        </Title>
      </div>
    </Header>
  );
}
