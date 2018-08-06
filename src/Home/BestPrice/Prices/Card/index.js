import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: flex-start;
`;

const CountryImg = styled.img``;

const TitleCity = styled.div`
  font-family: Roboto;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  color: #5b5b5c;
  text-align: left;
`;

const Country = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
  text-align: left;
`;

const DepartureCity = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const City = styled.div`
  font-family: Roboto;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
`;

const Price = styled.div`
  font-family: Roboto;
  line-height: 20px;
  font-size: 16px;
  color: #00bae8;
`;

export default props => {
  return (
    <div>
      <Title>
        <div>
          <CountryImg src={props.img} />
        </div>
        <div>
          <TitleCity>
            {props.city}
            <Country>{props.country}</Country>
          </TitleCity>
        </div>
      </Title>

      <DepartureCity>
        <City>Из {props.city1}</City>
        <Price>от {props.price1} ₽</Price>
      </DepartureCity>
      <DepartureCity>
        <City>Из {props.city2}</City>
        <Price>от {props.price2} ₽</Price>
      </DepartureCity>
      <DepartureCity>
        <City>Из {props.city3}</City>
        <Price>от {props.price3} ₽</Price>
      </DepartureCity>
      <DepartureCity>
        <City>Из {props.city4}</City>
        <Price>от {props.price4} ₽</Price>
      </DepartureCity>
      <DepartureCity>
        <City>Из {props.city5}</City>
        <Price>от {props.price5} ₽</Price>
      </DepartureCity>
    </div>
  );
};
