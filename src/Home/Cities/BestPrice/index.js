import React from "react";
import styled from "styled-components";

const Title = styled.div``;
const CountryImg = styled.img``;

export default props => {
  return (
    <div className="col-xs-3">
      <Title>
        <CountryImg src={props.img} />
      </Title>)
    </div>
  );
};
