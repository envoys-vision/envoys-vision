import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'
import Icon from '../../assets/siteIcon.svg'

const AboutP = styled(Flex)`
    padding: 25px 0;
    max-width: 100%;
`

const AboutPText = styled.p`
    flex: 1;
    font-family: Exo 2;
    font-weight: 400;
    font-size: 18px;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #101010;
    text-transform: capitalize;
    margin: 0 10;
`

const AboutPLinks = styled.a`
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #045599;
    text-decoration: none;
    transition: .3s linear;
    :hover{
        font-weight: 500;
    }
`

const AboutPLinkIacon = styled.img`
    width: 20px;
    margin: 0 12px 0 0;
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
    <Flex direction='column' margin='20px' flex={1}  style={{maxWidth: '100%'}}>
        <AboutP justify='space-between' align='center'> 
            <AboutPText >название</AboutPText>
            <AboutPText style={{textAlign: 'end'}}>сайт</AboutPText>
        </AboutP>
        
        <Flex direction='column'>
            {partners.map((el, index) => {
                return <Flex key={index} margin='20px 0'>
                    <AboutPText style={{textTransform: 'none'}}>{el.name}</AboutPText>
                    {el.site.length>0
                        ?<Flex style={{textAlign: 'end'}} align='center'>
                            <AboutPLinkIacon src={Icon} alt="" />
                            <AboutPLinks target='_blank' href={el.site}>сайт</AboutPLinks>
                        </Flex>
                    :<></>}
                </Flex>
            })}
        </Flex>
    </Flex>
  )
}

export default AboutParters