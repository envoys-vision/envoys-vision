import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'

const ValueTitle = styled.h1`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  color: #000000;
  margin: 0 0 40px;
`

const ValueWrap = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media(max-width: 1020px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 526px){
    padding: 0 10px;
    grid-template-columns: repeat(1, 1fr);
  }
  `

const ValueItem = styled.li`
  padding: 52px 0 90px;
  border-radius: 10px;
  border: 3px solid #045599;
`

const ValueNum = styled.h1`
  font-family: 'NEXT ART';
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 109px;
  text-align: center;
  color: #F47F1F;
  margin: 0 15px 0 26px;
`

const ValueNumTitle = styled.h3`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 146.83%;
  text-transform: uppercase;
  color: #045599;
  padding: 0 5px 0 0;
`

const ValueItemUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`

const ValueItemItem = styled.li`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #3F3F3F;
  margin: 10px 0;
` 

const AboutUsValues:React.FC = () => {
  return (
    <Container style={{padding: '0 0 30px'}}>
        <ValueTitle>Наши ценности</ValueTitle>
        

        <ValueWrap>
          <ValueItem>
            <Flex align='center'>
              <ValueNum>1</ValueNum>
              <ValueNumTitle>Добросовестное отношение</ValueNumTitle>
            </Flex>
            <ValueItemUl>
              <ValueItemItem>Проявления уважения ко всем</ValueItemItem>
              <ValueItemItem>Открытое общение</ValueItemItem>
              <ValueItemItem>Образцовая честность и этика</ValueItemItem>
            </ValueItemUl>
          </ValueItem>
          <ValueItem>
            <Flex align='center'>
              <ValueNum>2</ValueNum>
              <ValueNumTitle>Расширение опыта</ValueNumTitle>
            </Flex>
            <ValueItemUl>
              <ValueItemItem>Быть экспертом своего дела</ValueItemItem>
              <ValueItemItem>Проявлять любопытство,  задавать вопросы и постоянно учиться</ValueItemItem>
              <ValueItemItem>Прикладывать все усилия для того, чтобы преуспеть</ValueItemItem>
            </ValueItemUl>
          </ValueItem>
          <ValueItem>
            <Flex align='center'>
              <ValueNum>3</ValueNum>
              <ValueNumTitle>Быть командным игроком</ValueNumTitle>
            </Flex>
            <ValueItemUl>
              <ValueItemItem>Доверять коллегам</ValueItemItem>
              <ValueItemItem>Сотрудничество, невзирая на границы</ValueItemItem>
              <ValueItemItem>Поиск разных мыслей и идей</ValueItemItem>
            </ValueItemUl>
          </ValueItem>
          <ValueItem>
            <Flex align='center'>
              <ValueNum>4</ValueNum>
              <ValueNumTitle>Стимулировать инновации</ValueNumTitle>
            </Flex>
            <ValueItemUl>
              <ValueItemItem>Идти на разумный риск; учиться на ошибках</ValueItemItem>
              <ValueItemItem>Проявлять находчивость и креативность</ValueItemItem>
              <ValueItemItem>Проявлять инициативу</ValueItemItem>
            </ValueItemUl>
          </ValueItem>


        </ValueWrap>

    </Container>
  )
}

export default AboutUsValues