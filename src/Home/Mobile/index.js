import React from "react";
import styled from "styled-components";

import mobile from "./mobile.png";
import star from "./star.svg";
import halfstar from "./halfstar.svg";
import iphon from "./iphon.svg";
import line from "./line.svg";
import android from "./android.svg";
import windows from "./windows.svg";

const Wrap = styled.div`
  display: flex;
  background: linear-gradient(168.96deg, #00b0de 0%, #196ebd 100%);
  border: 1px solid #ffffff;
  height: 281px;
  margin-top: 40px;
  align-items: flex-end;
  justify-content: center;
`;

const Img = styled.img``;

const Info = styled.div`
  margin-left: 79px;
  margin-top: 106px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 40px;
  font-size: 30px;
  color: #ffffff;
`;

const StarImg = styled.img`
  margin-right: 5px;
`;

const Rating = styled.div`
  font-family: Roboto;
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
  margin-top: 19px;
  margin-bottom: 43px;
`;

const Platform = styled.div`
  font-family: Roboto;
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  align-self: center;
`;

const PlatformImg = styled.img`
  margin-right: 8px;
`;

const Delimiter = styled.img`
  margin-left: 20px;
  margin-right: 20px;
`;

export default function() {
  return (
    <Wrap>
      <div className="container">
        <div className="row center-lg">
          <div className="col-lg-10">
            <div className="row">
              <Img src={mobile} />

              <Info>
                <div className="row">
                  Скачай мобильное приложение Aviasales.ru
                </div>
                <Rating>
                  <div className="row">
                    <StarImg src={star} />
                    <StarImg src={star} />
                    <StarImg src={star} />
                    <StarImg src={star} />
                    <StarImg src={halfstar} />
                    Более 103 000 оценок
                  </div>
                </Rating>

                <div className="row">
                  <PlatformImg src={iphon} />
                  <Platform>iPhone или iPad</Platform>
                  <Delimiter src={line} />
                  <PlatformImg src={android} />
                  <Platform>Android</Platform>
                  <Delimiter src={line} />
                  <PlatformImg src={windows} />
                  <Platform>Windows Phone</Platform>
                </div>
              </Info>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}
