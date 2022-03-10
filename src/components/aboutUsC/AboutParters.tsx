import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'


const AboutP = styled(Flex)`
    padding: 25px 0;
    border-top: 1px solid #101010;
    border-bottom: 1px solid #101010;
    max-width: 100%;
`

const AboutPText = styled.p`
    flex: 1;
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #101010;
    text-transform: capitalize;
    margin: 0 10;
    a{
        font-family: Exo 2;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #045599;
        text-decoration: none;
        transition: .3s;
        :hover{
            font-size: 16px;
        }
    }
`



const AboutParters = () => {
    const [partners, setPartners] = React.useState([
        {name: 'Общество с ограниченной ответственностью "Роял Пюр Голд"', site: 'https://rpg.kg/'},
        {name: 'Общество с ограниченной ответственностью "Омега Капитал" ', site: 'https://omegacapital.kg'},
        {name: 'Общество с ограниченной ответственностью "Аскоинвест"', site: ''},
        {name: 'Общество с ограниченной ответственностью Финансово-Консалтинговая компания "АТО-финанс"', site: ''},
        {name: 'Общество с ограниченной ответственностью финансово-инвестиционная компания "Си Эй Кэпитал"', site: ''},
    ])

  return (
    <Flex direction='column' style={{maxWidth: '100%'}}>
        <AboutP justify='space-between' align='center'> 
            <AboutPText >название</AboutPText>
            <AboutPText style={{textAlign: 'end'}}>сайт</AboutPText>
        </AboutP>
        <Flex direction='column'>
            {partners.map((el, index) => {
                return <Flex key={index} margin='20px 0'>
                    <AboutPText style={{textTransform: 'none'}}>{el.name}</AboutPText>
                    <AboutPText style={{textAlign: 'end'}}><a target='_blank' href={el.site}>{el.site.length>0?'сайт':''}</a></AboutPText>
                </Flex>
            })}
        </Flex>
    </Flex>
  )
}

export default AboutParters