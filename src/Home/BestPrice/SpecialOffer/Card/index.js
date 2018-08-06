import React from "react";
import styled from "styled-components";

const Title = styled.div`
  background: #cd2027;
  font-family: Roboto;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  padding-left: 16px;
  padding-top: 22px;
  padding-bottom: 21px;
  text-align: left;
`;

const Main = styled.div`
  display: flex;
  background: #ffffff;
  height: 207px;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.img`
  margin-left: 12px;
  margin-top: 22px;
`;

const Info = styled.div`
  margin-top: 18px;
  margin-right: 12px;
`;

const Between = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const From = styled.div`
  font-family: Roboto;
  line-height: 16px;
  font-size: 12px;
  color: #5c5c5c;
  margin-right: 4px;
  margin-top: 1px;
`;

const Price = styled.div`
  font-family: Roboto;
  line-height: 16px;
  font-size: 20px;
  text-align: right;
  color: #5c5c5c;
`;

const Days = styled.div`
  font-family: Roboto;
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
`;
const Text = styled.div`
  font-family: Roboto;
  line-height: 16px;
  font-size: 12px;
  color: #242424;
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
`;

const Button = styled.button`
  height: 40px;
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  font-family: Roboto;
  line-height: 20px;
  font-size: 16px;
  color: #d93533;
  align-self: center;
  margin-bottom: 20px;
  padding-left: 45px;
  padding-right: 45px;
`;

export default props => {
  return (
    <div>
      <Title>{props.title}</Title>
      <Main>
        <div>
          <Between>
            <div>
              <Img src={props.img} />
            </div>
            <Info>
              <Row>
                <From>от</From>
                <Price>{props.price} ₽</Price>
              </Row>
              <Days>Осталось {props.days} дней</Days>
            </Info>
          </Between>
          <Text>{props.text}</Text>
        </div>
        <Button>Узнать подробности</Button>
      </Main>
    </div>
  );
};
