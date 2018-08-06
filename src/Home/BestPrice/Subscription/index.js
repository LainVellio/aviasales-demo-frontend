import React from "react";
import styled from "styled-components";

import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import vk from "./vk.svg";
import rss from "./rss.svg";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Text1 = styled.div`
  font-family: Roboto;
  font-weight: bold;
  line-height: 20px;
  font-size: 14px;
  color: #5c5c5c;
  text-align: left;
`;

const Text2 = styled.div`
  font-family: Roboto;
  line-height: 22px;
  font-size: 14px;
  color: #5c5c5c;
  text-align: left;
`;

const Society = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocietyImg = styled.img`
  margin-right: 5px;
`;

const BorderEmail = styled.div`
  display: flex;
  border-color: #a0b0b9;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  flex-direction: row;
  height: 36px;
  margin-left: 16px;
`;

const Email = styled.input`
  width: 191px;
  height: 34px;
  font-family: Roboto;
  line-height: 20px;
  font-size: 16px;
  border: none;
  padding-left: 13px;
`;
const EmailButton = styled.button`
  width: 139px;
  background: #ff8e41;
  font-family: Roboto;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  border: none;
  border-radius: 1px;
`;

export default function() {
  return (
    <div className="row center-lg">
      <div className="col-lg-10">
        <Wrap>
          <div>
            <Text1>Хотите знать всё о скидках на авиабилеты?</Text1>
            <Text2>Вы можете подписаться на нашу рассылку</Text2>
            <Text2> через соцсети или по электронной почте.</Text2>
          </div>
          <Society>
            <div>
              <SocietyImg src={twitter} />
            </div>
            <div>
              <SocietyImg src={facebook} />
            </div>
            <div>
              <SocietyImg src={vk} />
            </div>
            <div>
              <SocietyImg src={rss} />
            </div>
            <BorderEmail>
              <Email type="email" placeholder="Ваш email" />
              <EmailButton>Подписаться</EmailButton>
            </BorderEmail>
          </Society>
        </Wrap>
      </div>
    </div>
  );
}
