import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
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
  border-radius: 8px 8px 0 0;
`;

const FlagAndCity = styled.div`
  display: flex;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FlagImg = styled.img`
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
`;

const Price = styled.div`
  display: flex;
  font-family: Roboto;
  line-height: 32px;
  font-size: 22px;
  text-align: right;
  color: #00bae8;
  flex-direction: column;
  margin-right: 22px;
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

export default props => {
  return (
    <div className="col-5">
      <Card>
        <CardImg src={props.img} />
        <CardInfo>
          <FlagAndCity className="col-3">
            <div>
              <FlagImg src={props.flag} />
            </div>
            <City>
              {props.city}
              <Country>{props.country}</Country>
            </City>
          </FlagAndCity>
          <Price className="col-2">
            Найти от {props.price} ₽ <Date>{props.date}</Date>
          </Price>
        </CardInfo>
      </Card>
    </div>
  );
};
