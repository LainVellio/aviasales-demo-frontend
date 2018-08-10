import React from "react";
import styled from "styled-components";

import Card from "./Card";

import pobeda from "./pobeda.png";

const Background = styled.div`
  display: flex;
  background: linear-gradient(163.59deg, #00b0de 0%, #196ebd 100%);
  width: 100%;
`;

const Title = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 42px;
  font-size: 30px;
  color: #ffffff;
  text-align: left;
  padding-top: 24px;
  padding-bottom: 20px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 23px;
`;

const TextLeft = styled.div`
  font-family: Roboto;
  line-height: 20px;
  font-size: 16px;
  text-decoration-line: underline;
  color: #ffffff;
`;

const TextRight = styled.div`
  font-family: Roboto;
  line-height: 20px;
  font-size: 16px;
  text-align: right;
  color: #ffffff;
`;

export default function() {
  return (
    <Background>
      <div className="container">
        <div className="row">
          <div className="col-lg-offset-1">
            <Title>Спецпредложения на авиабилеты</Title>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="row end-lg">
              <div className="col-lg-9">
                <Card
                  title="Билеты от 499 рублей!"
                  img={pobeda}
                  price="499"
                  text="Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row center-lg">
              <div className="col-lg-9">
                <Card
                  title="Билеты от 499 рублей!"
                  img={pobeda}
                  price="499"
                  text="Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row start-lg">
              <div className="col-lg-9">
                <Card
                  title="Билеты от 499 рублей!"
                  img={pobeda}
                  price="499"
                  text="Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row center-lg">
          <div className="col-lg-10">
            <Text>
              <TextLeft>Смотреть все спецпредложения</TextLeft>
              <TextRight>*средняя цена по направлению</TextRight>
            </Text>
          </div>
        </div>
      </div>
    </Background>
  );
}
