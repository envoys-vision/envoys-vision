import React, {FC} from 'react';
import styled from 'styled-components'
import {LineChart, Line} from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Vector from '../../assets/Vector.png'
import Rechart from '../../components/homeComponents/bannerInfo/Rechart';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #DADADA;
  display: flex;
  margin-top: 100px ;
  justify-content: center;
  @media(max-width: 765px){
    flex-wrap: wrap;
  }
`

const PreMarket = styled.div`
    max-width: 798px;
    border-left: 1px solid #DADADA;
`

const PreMarketHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;   
  border-bottom: 1px solid #DADADA;
`
// PRM = это сокращение от PreMarket
const PrmHeaderBlock = styled.div`
  padding: 16px 0 16px 29px;
  display: flex;
  align-items: center;
`

const PrmHeaderTitle = styled.h3`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 100%;
  margin-right: 10px;
  letter-spacing: 0.02em;
  @media(max-width: 370px){
    font-size: 24px;
  }
`
const PrmHeaderPreTitle = styled.h3`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  padding: 0 5px;
  @media(max-width: 370px){
    font-size: 12px;
  }
`

const HeaderBtns = styled.div`
 display: flex;
`

const HeaderBtn = styled.button`
  padding: 0 37px;
  background: #E6E6E6;
  border-style: none;
  color: #898989;
  &:first-child{
    background: #4478BB;
    color: white;
    font-weight: bold;
  }
  @media(max-width: 462px){
    padding: 0 10px;
  }
`

const CompositeIndexBlock = styled.div`
    display: flex;
    margin-top: 22px;
    padding-left: 29px;
   justify-content: space-between;
`

const CompositeIndexBox = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
    &:last-child{
    }
`
const IndexText = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 20px;
  letter-spacing: 0.02em;
  color: #101010;
  &:last-child{
    margin-bottom: 30px;
  }
  
`

const ChartBlock = styled.div`
display: flex;
  justify-content: space-between;
  padding-left: 29px;
`

const Chart = styled.div`
  width: 299px;
  height: 85px;
  display: flex;
`

const ChartValues = styled.div`
 display: flex;
  justify-content: space-between;
  margin-top: 41px;
  padding: 29px 29px 118px 29px;
  
`

const ChartValue = styled.div`
 display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 35px;
  /* identical to box height, or 112% */

  letter-spacing: 0.02em;

  color: #101010;
  margin-right: 20px;
  &:last-child{
    margin-right: 0;
  }
`

const PositiveNumber = styled.span`
    color: #4CFFD7;
`

const NegativeNumber = styled.span`
    color: #EA9A9B;
`

const LastNewsBlock = styled.div`
 max-width: 396px;
  border-left: 1px solid #DADADA;
  @media(max-width: 765px){
    width: 100%;
    margin-right: auto;
  }
`

const NewsBox = styled.div`
  padding: 30px 0 30px 30px;
  width: 100%;
  position: relative;
  &:after{
    position: absolute;
    content: '';  
    width: 205%;
    background: #DADADA;
    height: 1px;
    top: 0;
    left: -1px;
    &:first-child{
      height: 0;
    }
  }
  @media(max-width: 765px){
    width: 100vw;
  }
`

const NewsText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  max-width: 370px;
  color: #000000;
  @media(max-width: 400px){
    font-size: 18px;
  }
`

//кнока подробнее и дата новости в одном блоке
const ViewMoreAndData = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #045599;
  margin-top: 13px;
  &:last-child{
    margin-right: 10px;
  }
`

 export const ViewMore = styled.a`
  border-style: none;
  color: #045599;
  background: transparent ;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  img{
    margin: 0 0 0 5px;
  }
`

const Premarket : FC = () => {
    const month = new Date().getMonth()
    const date = new Date().toLocaleDateString().split('.')
    const {t} = useTranslation()

    const data = [{
        name: '1',
        uv: 12,
      },{
        name: '2',
        uv: 20,
      },{
        name: '3',
        uv: 19,
      },{
        name: '4',
        uv: 25,
      },{
        name: '5',
        uv: 37,
      },{
        name: '6',
        uv: 50,
      },{
        name: '7',
        uv: 46,
      },{
        name: '8',
        uv: 37,
      },{
        name: '9',
        uv: 64,
      },{
        name: '10',
        uv: 29,
      },{
        name: '11',
        uv: 65,
      },{
        name: '12am',
        uv: 70,
      },];

    return (
        <Wrapper>
        <PreMarket>
            <PreMarketHeader>
                <PrmHeaderBlock>
                  <PrmHeaderTitle> U.S</PrmHeaderTitle>
                    <PrmHeaderPreTitle style={{width: 'auto'}} className='title'>{t("premarket.title")}</PrmHeaderPreTitle>
                </PrmHeaderBlock>
                <HeaderBtns>
                    <HeaderBtn>U.S</HeaderBtn>
                    <HeaderBtn >{t("premarket.majorIndex")}</HeaderBtn>
                </HeaderBtns>
            </PreMarketHeader>
            <CompositeIndexBlock>
                <CompositeIndexBox>
                    <IndexText>Envoys {t("home.index")}</IndexText>
                    <IndexText>0
                      {/* <NegativeNumber>0</NegativeNumber> 0 */}
                      </IndexText>
                    <IndexText>{t("premarket.volume")}:0</IndexText>
                </CompositeIndexBox>
            </CompositeIndexBlock>
      <ChartBlock>
          
          <Chart>
              <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                      width={500}
                      height={400}
                      data={data}>
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EB9FA0" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#EB9FA0" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                      <CartesianGrid horizontal vertical={false}/>
                      <XAxis hide/>
                      <YAxis orientation='right'/>
                      <Area type="monotone" dataKey="uv" stroke="#EB9FA0" fill="#EB9FA0" />
                  </AreaChart>
              </ResponsiveContainer>
          </Chart>

      </ChartBlock>
            <ChartValues>
                <ChartValue>
                    <span>Envoys-100</span>
                    <span style={{margin: '15px 0'}}>0</span>
                    <NegativeNumber>0</NegativeNumber>
                </ChartValue>
                {/* <ChartValue>
                    <span>Envoys-100</span>
                    <span style={{margin: '15px 0'}}>0</span>
                    <NegativeNumber>0</NegativeNumber>
                </ChartValue> */}

            </ChartValues>
        </PreMarket>
        <LastNewsBlock>
            <NewsBox>
                <NewsText>
                    США запретили операции с Центробанком, ФНБ и Минфином России
                </NewsText>
                <ViewMoreAndData>
                 <span>28 Апреля</span>
                    <ViewMore target='_blank' href={'https://www.tazabek.kg/news:1765705/?from=tazabek&place=search&sth=a008ba60d08545cfa2488de0beec7cb1'}>Подробнее <img src={Vector} alt=""/></ViewMore>
                </ViewMoreAndData>
            </NewsBox>
            <NewsBox>
                <NewsText>
                    Объемы торгов на криптобирже резко увеличились из-за нестабильности рубля
                </NewsText>
                <ViewMoreAndData>
                    <span>1 Марта</span>
                    <ViewMore target='_blank' href='https://www.tazabek.kg/news:1765895/?from=tazabek&place=search&sth=f8e96f8c6271d71db3772d05c96bdab5'>Подробнее <img src={Vector} alt=""/></ViewMore>
                </ViewMoreAndData>
            </NewsBox>
            <NewsBox>
                <NewsText>
                    «Интерфакс»: Обменные пункты в Нур-Султане и Алма-Ате приостановили продажу иностранной валюты
                </NewsText>
                <ViewMoreAndData>
                    <span>28 Апреля</span>
                    <ViewMore target={"_blank"} href='https://www.tazabek.kg/news:1765552/?from=tazabek&place=search&sth=9522f392056bb7785fd13f1038c2ffde'>Подробнее <img src={Vector} alt=""/></ViewMore>
                </ViewMoreAndData>
            </NewsBox>
        </LastNewsBlock>
        </Wrapper>
    );
};

export default Premarket;

