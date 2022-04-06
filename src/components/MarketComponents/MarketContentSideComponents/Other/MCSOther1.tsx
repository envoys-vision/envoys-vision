import React from 'react'
import IMG from '../../../../assets/marketMetalImg.svg'
import Icon1 from '../../../../assets/marketMetalIcon1.svg'
import Icon2 from '../../../../assets/marketMetalIcon2.svg'
import Icon3 from '../../../../assets/marketMetalIcon3.svg'
import Icon4 from '../../../../assets/marketMetalIcon4.svg'
import Icon5 from '../../../../assets/marketMetalIcon5.svg'
import Icon6 from '../../../../assets/marketMetalIcon.svg'
import styled from 'styled-components'
import { Flex } from '../../../../uikit/uikit'
import { SMTitle2, SMWrap, SMPreTtile, OtherPB, OtherPMBWrap, OtherPMB, OtherGrid, OtherGridItem, OtherGridImg, OtherGridText } from '../MCSC'


const MCSOther1:React.FC = () => {
  return (
    <SMWrap>
      <SMTitle2 margin='20px 0'>Рынок цветных металлов и алмазов</SMTitle2>
      <ul style={{paddingLeft: '20px'}}>
        <li><SMPreTtile>Рынок цветных металлов</SMPreTtile></li>
        <li><SMPreTtile margin='15px 0'>Рынок КРЕДИТОВАНИЯ драгоценных металлов</SMPreTtile></li>
        <li><SMPreTtile>Рынок алмаза и драгоценных камней</SMPreTtile></li>
      </ul>

      <Flex direction='column' margin='32px 0 0'>
        <OtherPB><h3>Инфраструктурные партнеры, биржи</h3></OtherPB>
        <OtherPMBWrap>
          <OtherPMB><span>Депозитарий, клиринговый центр</span></OtherPMB>
          <OtherPMB><span>Банк</span></OtherPMB>
          <OtherPMB><span>Аффинажное предприятие</span></OtherPMB>
          <OtherPMB><span>Лаборатория</span></OtherPMB>
        </OtherPMBWrap>
      </Flex>

      <OtherGrid>
        <OtherGridItem>
          <Flex direction='column' align='center'>
            <OtherGridImg src={Icon1}/>
            <OtherGridText>АРБИТРАЖ</OtherGridText>
          </Flex>
        </OtherGridItem>
        <OtherGridItem>
          <Flex direction='column' align='center'>
            <OtherGridImg src={Icon2}/>
            <OtherGridText>покупатель</OtherGridText>
          </Flex>
        </OtherGridItem>
        <OtherGridItem>
          <Flex direction='column' align='center'>
            <OtherGridImg src={Icon3}/>
            <OtherGridText>ювелирные компании</OtherGridText>
          </Flex>
        </OtherGridItem>
        <OtherGridItem>
          <Flex direction='column' align='center'>
            <OtherGridImg src={Icon4}/>
            <OtherGridText>золотодобывающие компании</OtherGridText>
          </Flex>
        </OtherGridItem>
        <OtherGridItem>
          <Flex direction='column' align='center'>
            <OtherGridImg src={Icon5}/>
            <OtherGridText>брокеры</OtherGridText>
          </Flex>
        </OtherGridItem>
        <OtherGridItem>
          <Flex direction='column' align='center'>
            <OtherGridImg src={Icon6}/>
            <OtherGridText>частные предприниматели</OtherGridText>
          </Flex>
        </OtherGridItem>

      </OtherGrid>

    </SMWrap>
  )
}

export default MCSOther1