import React, {FC} from 'react';
import styled from "styled-components";
import {Title} from "./NoNameBlock";
import ArrouWhite from '../../assets/white-arrou.svg'
import investBG from '../../assets/investingBG.svg'
import readmore from '../../assets/readmore.svg'
import stonks from '../../assets/stonksBG.svg'
import { Container, Flex } from '../../uikit/uikit';
import {useTranslation} from "react-i18next";
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  border-top: 1px solid #DADADA;
  border-bottom: 1px solid #DADADA;
  &:last-child{
    border-bottom: none;  
    margin-top: 122px;
  }
`

const Container1 = styled(Container)`
padding: 0;
  border: 1px solid #DADADA;
`

const Desc = styled.div`
  width: 100%;
  display: flex;
  @media(max-width: 769px){
    display: flex;
    flex-direction: column;
  }
`

const DescText = styled.p`
  max-width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  padding: 20px 30px;
  color: #101010;
  @media(max-width: 770px){
    width: 100%;
  }
`

const DescLink = styled.button`
  max-width: 370px;
  background: #F47F1F;
  padding: 20px 79px 18px 78px;
  border-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  @media(max-width: 769px){
    max-width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 79px 10px 78px;
  }
`

const LinkText2 = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
`

const LinkText1 = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    background: url(${ArrouWhite});
    height: 16px;
    width: 15px;
    top: 19%;
    left: 107%;
  }
`
const HowInvest = styled.div`
  padding: 30px 30px 107px 30px;
  position: relative;
  @media(max-width: 1180px){
    padding: 0;
    max-width: 100vw;
  }
`

const InvestBG = styled.img`
  padding: 10px 0; 
  width: 100%;
  /* height: 281px; */
  @media(max-width: 760px){
    display: none;
  }
`

type Props = {
    left?: string | '0';
    top?: string | '0';
    right?: string | '0';
    bottom?: string | '0';
    fontSize?: string | '0';

};

const TextBlock = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  top: 22%;
  left: 100px;
  @media(max-width: 760px){
    position: relative;
    top: 0;
    left: 0;
    margin: 20px 0;
  }

`

const HowInvestBtn = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 100%;
  color: #4478BB;
  background: #FFFFFF;
  border-radius: 4px;
  padding: 6px 14px 8px;
  max-width: 161px;
  border-style: none;
  @media(max-width: 760px){
    color: #fff;
    background: #4478BB;
  }
`

const HowInvestDesc = styled.h3<Props>`
  max-width: 357px;
  font-style: normal;
  font-weight: normal;
  font-size: ${props => props.fontSize};
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin: 20px 0;
  word-wrap: break-word;
  @media(max-width: 999px){
    max-width: 400px;
    line-height: 30px;
    font-size: 26px;
  }
  @media(max-width: 537px){
    margin: 10px 0;
    line-height: 26px;
    font-size: 24px;
  }
  @media(max-width: 760px){
    color: #045599;
  }
`

const ReadMoreBtn = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  border-style: none;
  background: transparent;
  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    content: '';
    background: url(${readmore});
    width: 8px;
    height: 13px;
    top: 27%;
    left: 124px;
    @media(max-width: 760px){
      left: 120px;
      top: 12%;
      content: '...';
    }
  }
  @media(max-width: 760px){
    color: #3F3F3F;
  }
`

const Stonks = styled.div`
  position: relative;
  padding: 30px 30px 0 30px;
`
const FlexBlock = styled.div``



const Investing: FC = () => {
    const {t} = useTranslation()
    const nav = useNavigate()
    return (
        <Wrapper>
            <Container1>
                <Title lineHeight={'36px'} fontSize={'30px'} padding={'10px 0 10px 30px'}>{t("investing.title")}</Title>
            </Container1>
            <Wrapper>
                <Container1 style={{borderBottom: 'none'}}>
                    <Desc>
                        <DescText>{t("investing.subtitle")}</DescText>
                        {/* <DescLink><LinkText1>{t("investing.goBlock")}</LinkText1><LinkText2>{t("investing.moreInvest")}</LinkText2></DescLink> */}
                    </Desc>
                </Container1>
            </Wrapper>
            <Container1 style={{padding: '0 10px'}}>
                <FlexBlock>
                    <HowInvest>
                      <InvestBG src={investBG} alt=""/>

                        <TextBlock>
                            <HowInvestBtn>{t("investing.howInvest")}</HowInvestBtn>
                            <HowInvestDesc fontSize={'30px'}>{t("investing.info")}</HowInvestDesc>
                            <ReadMoreBtn onClick={() => nav('/newspage')}>{t("investing.readMore")}</ReadMoreBtn>
                        </TextBlock>
                    </HowInvest>
                    {/* <Stonks>
                        <img src={stonks} alt=""/>
                        <TextBlock left={'60px'} top={'60px'}>
                            <HowInvestBtn>{t("investing.stock")}</HowInvestBtn>
                            <HowInvestDesc fontSize={'24px'} style={{maxWidth: '250px'}}>{t("investing.bayStock")}</HowInvestDesc>
                            <ReadMoreBtn>{t("investing.readMore")}</ReadMoreBtn>
                        </TextBlock>
                    </Stonks> */}
                </FlexBlock>

            </Container1>


        </Wrapper>
    );
};

export default Investing;