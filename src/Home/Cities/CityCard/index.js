import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  width: 509px;
  height: 293px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 31px;
  flex-direction: column;
`;

const CardImg = styled.img`
  height: 212px;
  margin-bottom: 12px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Flag = styled.img`
  margin-left: 16px;
`;

const City = styled.div`
  display: flex;
  font-family: Roboto;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  color: #5b5b5c;
  margin-left: 18px;
  text-align: left;
  flex-direction: column;
  width: 100%;
`;

const FindFrom = styled.div`
  display: flex;
  font-family: Roboto;
  line-height: 32px;
  font-size: 22px;
  text-align: right;
  color: #00bae8;
  width: 100%;
  flex-direction: column;
  margin-right: 24px;
`;

const Country = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
`;

const Date = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

export function CardCity(props) {
  return (
    <Card>
      <CardImg src={props} />
      <CardInfo>
        <Flag src={props} />
        <City>
          Краснодар<Country>РОССИЯ</Country>
        </City>
        <FindFrom>
          Найти от 1 212 ₽ <Date>18 марта</Date>
        </FindFrom>
      </CardInfo>
    </Card>
  );
}
