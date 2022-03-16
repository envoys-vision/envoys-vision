import React from 'react'
import { Flex } from '../../uikit/uikit' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DocViewer from "react-doc-viewer";

const AboutUsLink = styled.a`
    text-transform: none;
    font-family: Exo 2;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #045599;
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    transition: .3s;
    margin: 10px 0;
    :hover{
      font-size: 18px;
    }
`
const Documents:React.FC =() => {
  const docs = [
    { uri: require("./doc/Положение о противодействии манипулированию на рынке ценных бумаг.docx") },
    { uri: require("./doc/Положение о раскрытии информации.docx") }, 
    { uri: require("./doc/Правила биржевой торговли.docx") },
    { uri: require("./doc/Регламент по депозитарно-клиринговым операциям.docx") }, 

  ];
  return (
    <Flex direction='column'  flex={1} margin='20px'>
      {/* <DocViewer documents={docs}/> */}
        {/* <AboutUsLink href={'./doc/Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами.docx'} target="_blank" download>Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами</AboutUsLink>
        <AboutUsLink href={'./doc/О депозитарном обслуживании размещения новой эмиссии ценных бумаг.docx'} target="_blank" download>О депозитарном обслуживании размещения новой эмиссии ценных бумаг</AboutUsLink> */}
        <AboutUsLink href={require('./doc/Положение о противодействии манипулированию на рынке ценных бумаг.docx')} target="_blank" download>Положение о противодействии манипулированию на рынке ценных бумаг</AboutUsLink>
        <AboutUsLink href={require('./doc/Положение о раскрытии информации.docx')} target="_blank" download>Положение о раскрытии информации</AboutUsLink>
        <AboutUsLink href={require('./doc/Правила биржевой торговли.docx')} target="_blank" download>Правила биржевой торговли</AboutUsLink>
        <AboutUsLink href={require('./doc/Правила ведения депозитарно-клиринговых операций.docx')} target="_blank" download>Правила ведения депозитарно-клиринговых операций</AboutUsLink>
        {/* <AboutUsLink href={'./doc/Правила листингаценных бумаг и иных финансовых инструментов.docx'} target="_blank" download>Правила листингаценных бумаг и иных финансовых инструментов</AboutUsLink>
        <AboutUsLink href={'./doc/Регламент по депозитарно-клиринговым операциям.docx'} target="_blank" download>Регламент по депозитарно-клиринговым операциям</AboutUsLink> */}

      </Flex>
  )
}

export default Documents