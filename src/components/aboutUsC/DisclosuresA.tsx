import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'

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
    max-width: 800px; 
    margin: 10px 0;
    :hover{
      font-size: 18px;
    }
    @media(max-width: 600px){
      max-width: 400px; 
      word-wrap: break-word;
    }
    @media(max-width: 440px){
      max-width: 250px; 
    }
`

const DisclosuresA:React.FC = () => {
  return (
    <Flex direction='column' margin='20px' style={{flex: 1}}>
        <AboutUsLink href={require('./DisclosuresDoc/277 500 000.pdf')} target="_blank">Отчет за 3 квартал открытого общества ОАО "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>
        <AboutUsLink href={require('./DisclosuresDoc/5 277 500 000.pdf')} target="_blank">Отчет за 4 квартал открытого акционерного общества ОАО "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>

        <AboutUsLink href={require('./DisclosuresDoc/Scan.pdf')} target="_blank">Регламент департамента по депозитарно-клиринговым операциям ОФО "Энвойс Вижион Диджитал Эксчейндж" по взаимодействию с профессиональными участниками рынка ценных бумаг, при совершении сделок через торговую систему открытого акционного общества "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>
        <AboutUsLink href={require('./DisclosuresDoc/Scan 2.pdf')} target="_blank">Правила ведения депозитарно-клиринговых операций открытого акционерного общества "Енвойс Вижион Диджитал Эксчейндж"</AboutUsLink>
        <AboutUsLink href={require('./DisclosuresDoc/Scan 3.pdf')} target="_blank">Инструкция о депозитарном обслуживании резмещения новой эмессии ценных бумаг открытого акционного общества "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>
        <AboutUsLink href={require('./DisclosuresDoc/Scan 4.pdf')} target="_blank">Положение о противодействии манипулированию на рынке ценных бумаг открытого акционерного общества «Енвойс Вижион Диджитал Эксчейндж» </AboutUsLink>
        <AboutUsLink href={require('./DisclosuresDoc/Scan 5.pdf')} target="_blank">Инструкция о порядке осуществления взаиморасчетов по операциям с корпоративными ценными бумагами открытого акционерного общества ОАО "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>
        <AboutUsLink href={require('./DisclosuresDoc/Scan 6.pdf')} target="_blank">Правила биржевой торговли ( Биржевой устав ) открытого акционерного общества ОАО "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>

        <AboutUsLink href={require('./DisclosuresDoc/Листинговые требования.pdf')} target="_blank">Листинговые требования</AboutUsLink>


        <AboutUsLink href={require('./DisclosuresDoc/Правила листинга ценных бумаг.pdf')} target="_blank">Правила листинга ценных бумаг и/или иных финансовых инструментов открытого акционерного общества ОАО "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>
        
        <AboutUsLink href={require('./DisclosuresDoc/Scan 9.pdf')} target="_blank">Бюллетень для голосования на заседании листингового комитета открытого акционерного общества "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>
        <AboutUsLink href={require('./DisclosuresDoc/Scan 10.pdf')} target="_blank">Положение о раскрытии информации открытого акционерного общества "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>



    </Flex>
  )
}

export default DisclosuresA