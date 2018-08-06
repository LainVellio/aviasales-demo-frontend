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

export default function() {
  return (
    <Background>
      <div className="container">
        <div className="col-lg-offset-1">
          <Title>Спецпредложения на авиабилеты</Title>
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
      </div>
    </Background>
  );
}
