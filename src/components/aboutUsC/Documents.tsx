import React from 'react'
import { Flex } from '../../uikit/uikit' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DocViewer from "react-doc-viewer";
import ContentHeader from './ContentHeader/ContentHeader';
import { AboutUsTitle } from './aboutUsSC';
import DListing from './Documents/DListing';
import DClearing from './Documents/DClearing';
import DCorporate from './Documents/DCorporate';
import MarketRules from './Documents/MarketRules';

const DWrap = styled(Flex)`
    @media(max-width: 760px){
      margin: 30px 0 0 0;
    }
`


const Documents:React.FC =() => {
  const [headerBtns, setHeaderBtns] = React.useState([
    'Листинг',
    'Депозитарий и Клиринг',
    'Внутренние документы',
    'Торги (Фондовая биржа)',
  ])

  const [active, setActive] = React.useState('Листинг')


  function checkBtn(){
    if(active == 'Листинг'){
      return <DListing/>
    }
    if(active == 'Депозитарий и Клиринг'){
      return <DClearing/>
    }
    if(active == 'Внутренние документы'){
      return <DCorporate/>
    }
    if(active == 'Торги (Фондовая биржа)'){
      return <MarketRules/>
    }
  }

  return (
    <DWrap direction='column'  flex={1} margin='60px 0 0 60px'>

    <AboutUsTitle>Правила</AboutUsTitle>

    <ContentHeader clickBtn={setActive} active={active} headerBtns={headerBtns}/>

    {checkBtn()}


      {/* <DocViewer documents={docs}/> */}
        {/* <AboutUsLink href={'./doc/Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами.docx'} target="_blank" download>Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами</AboutUsLink>
        <AboutUsLink href={'./doc/О депозитарном обслуживании размещения новой эмиссии ценных бумаг.docx'} target="_blank" download>О депозитарном обслуживании размещения новой эмиссии ценных бумаг</AboutUsLink> */}
        {/* <AboutUsLink href={require('./doc/Положение о противодействии манипулированию на рынке ценных бумаг.docx')} target="_blank" download>Положение о противодействии манипулированию на рынке ценных бумаг</AboutUsLink>
        <AboutUsLink href={require('./doc/Положение о раскрытии информации.docx')} target="_blank" download>Положение о раскрытии информации</AboutUsLink>
        <AboutUsLink href={require('./doc/Правила биржевой торговли.docx')} target="_blank" download>Правила биржевой торговли</AboutUsLink>
        <AboutUsLink href={require('./doc/Правила ведения депозитарно-клиринговых операций.docx')} target="_blank" download>Правила ведения депозитарно-клиринговых операций</AboutUsLink> */}
        {/* <AboutUsLink href={'./doc/Правила листингаценных бумаг и иных финансовых инструментов.docx'} target="_blank" download>Правила листингаценных бумаг и иных финансовых инструментов</AboutUsLink>
        <AboutUsLink href={'./doc/Регламент по депозитарно-клиринговым операциям.docx'} target="_blank" download>Регламент по депозитарно-клиринговым операциям</AboutUsLink> */}

      </DWrap>
  )
}

export default Documents