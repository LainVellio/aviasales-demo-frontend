import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-family: Roboto;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c
  margin-bottom: 12px;
`;

const All = styled.div`
  font-family: Roboto;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin-left: 8px;
  margin-top: 5px;
  margin-bottom: 29px;
`;

export default props => {
  return (
    <div className="col-lg-2">
      <Title>{props.title}</Title>
      <Name>{props.name1}</Name>
      <Name>{props.name2}</Name>
      <Name>{props.name3}</Name>
      <Name>{props.name4}</Name>
      <Name>{props.name5}</Name>
      <Name>{props.name6}</Name>
      <div className="row">
        <All>{props.all}</All>
        <Name>{props.name7}</Name>
      </div>
    </div>
  );
};
