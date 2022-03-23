import React from 'react'
import styled from 'styled-components'
import { Container } from '../../uikit/uikit'


const HeaderTitle = styled.h3`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #4478BB;
    margin: 100px 0 40px;
`

const HedaderText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.02em;
    max-width: 740px;
    color: #3F3F3F;
    margin: 0  0 100px;
    @media(max-width: 420px){
      font-size: 16px;
    }
`


const AboutUsValues:React.FC = () => {
  return (
    <Container>
        <HeaderTitle>Компания ОАО "Енвойс Вижион Диджитал Эксчейндж"</HeaderTitle>
        <HedaderText>Универсальная фондовая биржа ЕВДЭ - это команда специалистов с более чем восьмилетним опытом работы в сфере рынка ценных бумаг. Компания была основана в 2021 году и за короткий промежуток времени стала известна на рынке ценных бумаг Кыргызской Республики.</HedaderText>
    </Container>
  )
}

export default AboutUsValues