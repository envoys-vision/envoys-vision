import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'
import {Link} from 'react-router-dom'
import SideBarAbout from '../../components/aboutUsC/SideBarAbout'
import Documents from '../../components/aboutUsC/Documents'
import RulesKR from '../../components/aboutUsC/RulesKR'
import AboutParters from '../../components/aboutUsC/AboutParters'
import DisclosuresA from '../../components/aboutUsC/DisclosuresA'


const AboutUs:React.FC = () => {
  const [listingPath, setListingPath] = React.useState('Участники')
  
  const loc = useLocation()

  function changeListingPath(el:string){
    setListingPath(el)
  }

  React.useEffect(() => {
    setListingPath(loc.state)
  }, [loc])
  

  function getSideChoose(){
    if(listingPath === 'Внутренние документы биржи' ) {
      return <Documents/>
    }
    if(listingPath === 'Законодательство КР') {
      return <RulesKR/>
    }
    if(listingPath === 'Участники') {
      return <AboutParters/>
    }
    if(listingPath === 'Раскрытия информации') {
      return <DisclosuresA/>
    }
  }

  return (
    <Container>
      <Flex margin='30px 0'>
        <SideBarAbout changeLP={changeListingPath} activeText={listingPath}/>
        {getSideChoose()}
      </Flex>
    </Container>
  )
}

export default AboutUs