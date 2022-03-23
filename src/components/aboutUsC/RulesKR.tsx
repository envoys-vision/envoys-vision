import React from 'react'
import { Flex } from '../../uikit/uikit'
import { AboutUsLink, AboutUsTitle, ContentSideAbout } from './aboutUsSC'
import ContentHeader from './ContentHeader/ContentHeader'
import Position from './RulesKR/Position'
import Rules from './RulesKR/Rules'

const RulesKR:React.FC = () => {
  const [headerBtns, setHeaderBtns] = React.useState([
    'Положения',
    'Законы'
  ])

  const [active, setActive] = React.useState('Положения')

  function checkBtn(){
    if(active === 'Положения'){
      return <Position/>
    }
    if(active === 'Законы'){
      return <Rules/>
    }
  }

  return (
    <ContentSideAbout direction='column'  flex={1} margin='60px 0 0 60px'>

        <AboutUsTitle>Правила</AboutUsTitle>

        <ContentHeader clickBtn={setActive} active={active} headerBtns={headerBtns}/>

        {checkBtn()}
        {/* <AboutUsLink target={"_blank"} href='http://cbd.minjust.gov.kg/act/view/ru-ru/1188'> Закон об акционерных обществах</AboutUsLink>   
        <AboutUsLink target={"_blank"} href='http://cbd.minjust.gov.kg/act/view/ru-ru/202677'>Закон о рынке ценных бумаг</AboutUsLink>    
        <AboutUsLink target={"_blank"} href='http://cbd.minjust.gov.kg/act/view/ru-ru/12634'>Положение о предоставлении отчетности</AboutUsLink>     */}

    </ContentSideAbout>
  )
}

export default RulesKR