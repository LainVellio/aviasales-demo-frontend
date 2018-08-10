import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Title from "./Title";

const Header = styled.div`
  background: linear-gradient(
    151.09deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );
  height: 801px;
  padding-top: 12px;
`;

export default props => {
  return (
    <Header>
      <div className="container">
        <Logo />
        <Title />
      </div>
    </Header>
  );
};
