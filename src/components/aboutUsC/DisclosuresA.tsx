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
    margin: 10px 0;
    :hover{
      font-size: 18px;
    }
`

const DisclosuresA:React.FC = () => {
  return (
    <Flex direction='column'>
        <AboutUsLink href={require('./DisclosuresDoc/277 500 000.pdf')} target="_blank">Отчет за 3 квартал открытого общества ОАО "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>
        <AboutUsLink href={require('./DisclosuresDoc/5 277 500 000.pdf')} target="_blank">Отчет за 4 квартал открытого акционерного общества ОАО "Энвойс Вижион Диджитал Эксчейндж"</AboutUsLink>

    </Flex>
  )
}

export default DisclosuresA