import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'
import Icon from '../../assets/siteIcon.svg'
import { AboutPLinksPartner } from './aboutUsSC'

const AboutWrap = styled(Flex)`
    @media(max-width: 760px){
      margin: 30px 0 0 0;
    }
    maxWidth: 100%;
`

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
        {name: 'Общество с ограниченной ответственностью "Роял Пюр Голд"', site: 'rpg.kg'},
        {name: 'Общество с ограниченной ответственностью "Омега Капитал" ', site: 'omegacapital.kg'},
        {name: 'Общество с ограниченной ответственностью "Аскоинвест"', site: ''},
        {name: 'Общество с ограниченной ответственностью Финансово-Консалтинговая компания "АТО-финанс"', site: ''},
        {name: 'Общество с ограниченной ответственностью финансово-инвестиционная компания "Си Эй Кэпитал"', site: ''},
    ])

  return (
    <AboutWrap direction='column' margin='20px' flex={1}>
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
                            <AboutPLinksPartner target='_blank' href={'https://' + el.site}>
                            <AboutPLinkIacon src={Icon} alt="" />
                                <span>{el.site}</span>
                            </AboutPLinksPartner>
                        </Flex>
                    :<></>}
                </Flex>
            })}
        </Flex>
    </AboutWrap>
  )
}

export default AboutParters