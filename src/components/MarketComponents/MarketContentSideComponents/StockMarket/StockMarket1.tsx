import React from 'react'
import styled from 'styled-components' 
import { Flex } from '../../../../uikit/uikit';

const SMWrap = styled.div`
  /* width: 100%; */
  flex: 1;
  word-wrap: break-word;

`

type StyleProps = {
  margin?: string | '0';
}

const SMTitle = styled.h3<StyleProps>`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.02em;
  max-width: 460px;
  text-transform: uppercase;
  color: #045599;
  word-wrap: break-word;
  margin: ${props => props.margin};
`

const SMPreTtile = styled.h3<StyleProps>`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #3F3F3F;
  margin: ${props => props.margin};
  max-width: 460px;
  span{
    color: #F47F1F;
  }
`
const SMPreText = styled.p<StyleProps>`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #3F3F3F;
  max-width: 460px;
  margin: ${props => props.margin};
`

const SMText = styled.p<StyleProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #3F3F3F;
  max-width: 460px;
  margin: ${props => props.margin};
`

const SMHFlex = styled(Flex)`
  @media(max-width: 900px){
    flex-direction: column;
    align-items: flex-start;
    p:nth-child(2){
      margin: 10px 0;
    }
  }
`

const StockMarket1:React.FC = () => {
  return (
    <SMWrap>
        <SMTitle>токенизирован <br/> ные активы</SMTitle>
        <SMHFlex margin='20px 0 0 0' justify='space-between'>
          <Flex direction='column' style={{maxWidth: '350px'}} flexWrap='wrap'>
            <SMPreTtile>Местные и иностранные ЦБ Государственные ценные бумаги</SMPreTtile>
            <SMText margin='10px 0 0'>STO — это более быстрый и дешевый аналог IPO. Расходы на листинг уменьшаются за счет отсутствия необходимости вовлекать посредников наподобие инвестиционных банков. Процедуры аудита и андеррайтинга для блокчейн-проектов также проще. А участвовать в STO может практически любой частный инвестор</SMText>
          </Flex>
          <SMPreText style={{maxWidth: '350px'}} margin='0 0 0 20px'>Токенизация — создание записи, удостоверяющей объем прав на объект материального мира (в процессе которого выпускают токен). Токен регистрируют с помощью технологии распределенного реестра.
          </SMPreText>
        </SMHFlex>

        <Flex>
          
        </Flex>

    </SMWrap>
  )
}

export default StockMarket1