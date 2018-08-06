import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 293px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  margin-bottom: 31px;
`;

const CardImg = styled.img`
  height: 212px;
  margin-bottom: 12px;
  border-radius: 8px 8px 0 0;
  max-width: 100%;
`;

const FlagImg = styled.img`
  margin-left: 24px;
`;

const City = styled.div`
  font-family: Roboto;
  font-weight: bold;
  line-height: 32px;
  font-size: 20px;
  color: #5b5b5c;
  margin-left: 18px;
  text-align: left;
`;

const Price = styled.div`
  font-family: Roboto;
  line-height: 32px;
  font-size: 20px;
  text-align: right;
  color: #00bae8;
  padding-right: 24px;
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
    <div className="col-xs-5">
      <Card>
        <CardImg src={props.img} />
        <div className="row between-lg">
          <div className="row">
            <div>
              <FlagImg src={props.flag} />
            </div>
            <City>
              <div>{props.city}</div>
              <Country>{props.country}</Country>
            </City>
          </div>
          <Price>
            Найти от {props.price} ₽ <Date>{props.date}</Date>
          </Price>
        </div>
      </Card>
    </div>
  );
};
