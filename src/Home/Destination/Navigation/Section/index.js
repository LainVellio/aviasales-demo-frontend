import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  font-family: Roboto;
  line-height: 20px;
  font-size: 12px;
  color: #00ace2;
`;
const Background = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;
const Img = styled.img``;

export default props => {
  return (
    <div className="col-lg-1">
      <Wrap>
        <Background>
          <Img src={props.img} />
        </Background>
        <div>{props.text}</div>
      </Wrap>
    </div>
  );
};
