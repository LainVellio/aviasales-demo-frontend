import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

import vk from "./vk.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import viber from "./viber.svg";
import appstore from "./appstore.svg";
import googleplay from "./googleplay.svg";
import windowsphone from "./windowsphone.svg";

const Bottom = styled.div`
  border-top-width: 1px;
  border-top-color: #e0e6e8;
  border-top-style: solid;
  padding-top: 40px;
`;

const Text = styled.div`
  font-family: Roboto;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin-right: 15px;
`;

const Social = styled.div`
  font-family: Roboto;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin-top: 17px;
  margin-bottom: 32px;
`;

const Contact = styled.div`
  font-family: Roboto;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin-right: 25px;
`;

const ContactImg = styled.img`
  margin-right: 4px;
`;

const StoreImg = styled.img`
  margin-right: 10px;
`;

const Copyrighted = styled.div`
  font-family: Roboto;
  line-height: 16px;
  font-size: 12px;
  text-align: right;
  color: #5b5b5c;
  margin-top: 34px;
  margin-bottom: 50px;
`;

export default function() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Navigation
            title="СТРАНЫ"
            name1="Россия"
            name2="Таиланд"
            name3="Черногория"
            name4="Кипр"
            name5="Болгария"
            name6="Грузия"
            all="Все страны →"
          />
          <Navigation
            title="ГОРОДА"
            name1="Москва"
            name2="Санкт-Петербург"
            name3="Симферополь"
            name4="Адлер"
            name5="Екатеринбург"
            name6="Лондон"
            all="Все города →"
          />
          <Navigation
            title="АВИАКОМПАНИИ"
            name1="Air Berlin"
            name2="Air France"
            name3="Alitalia"
            name4="Air Baltic"
            name5="Emirates"
            name6="KLM"
            all="Все авиакомпании →"
          />
          <Navigation
            title="АЭРОПОРТЫ"
            name1="Шереметьево"
            name2="Курумоч"
            name3="Домодедово"
            name4="Толмачево"
            name5="Владивосток"
            name6="Гамбург"
            all="Все аэропорты →"
          />
          <Navigation
            title="НАПРАВЛЕНИЯ"
            name1="MOW - SIP"
            name2="MOW - AER"
            name3="MOW - TIV"
            name4="MOW - MRV"
            name5="LED - MOW"
            name6="MOW - BKK"
          />
          <Navigation
            title="СЕРВИСЫ"
            name1="Горящие авиабилеты"
            name2="Календарь низких цен"
            name3="Карта низких цен"
            name4="Спецпредложения"
            name5="Таблица цен"
            name6="Блог"
            name7="Помощь"
          />
        </div>
      </div>
      <Bottom>
        <div className="container">
          <div className="row between-lg">
            <div>
              <div className="row">
                <Text>О компании</Text>
                <Text>Партнёрская программа</Text>
                <Text>Реклама</Text>
                <Text>Вакансии</Text>
                <Text>Помощь</Text>
                <Text>Правила</Text>
                <Text>White Label авиабилеты</Text>
              </div>
              <Social>
                <div className="row">
                  <Contact>
                    <ContactImg src={vk} />
                    Вконтакте
                  </Contact>
                  <Contact>
                    <ContactImg src={facebook} />
                    Фейсбук
                  </Contact>
                  <Contact>
                    <ContactImg src={instagram} />
                    Инстаграм
                  </Contact>
                  <Contact>
                    <ContactImg src={twitter} />
                    Твиттер
                  </Contact>
                  <Contact>
                    <ContactImg src={viber} />
                    Вайбер
                  </Contact>
                </div>
              </Social>
              <div className="row">
                <Text>Поиск и бронирование отелей</Text>
              </div>
            </div>
            <div>
              <div className="row">
                <div>
                  <StoreImg src={appstore} />
                </div>
                <div>
                  <StoreImg src={googleplay} />
                </div>
                <div>
                  <StoreImg src={windowsphone} />
                </div>
              </div>
              <Copyrighted>
                © 2007–2018, Aviasales — дешевые авиабилеты
              </Copyrighted>
            </div>
          </div>
        </div>
      </Bottom>
    </div>
  );
}
