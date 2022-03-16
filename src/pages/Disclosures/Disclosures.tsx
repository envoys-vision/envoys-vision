import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'
import SideBarAbout from '../../components/aboutUsC/SideBarAbout'
import Documents from '../../components/aboutUsC/Documents'
import RulesKR from '../../components/aboutUsC/RulesKR'
import AboutParters from '../../components/aboutUsC/AboutParters'
import DisclosuresA from '../../components/aboutUsC/DisclosuresA'
import Statement from '../../components/aboutUsC/Statement'


const Disclosures:React.FC = () => {
  const [listingPath, setListingPath] = React.useState<any>('Участники')
  
  const loc = useLocation()

  function changeListingPath(el:string){
    setListingPath(el)
  }

  React.useEffect(() => {
    if(loc.state){
      setListingPath(loc.state)
    }
  }, [loc])
  

  

  function getSideChoose(){
    if(listingPath === 'Законодательство КР') {
        return <RulesKR/>
    }
    if(listingPath === 'Правила' ) {
        return <Documents/>
    }
    if(listingPath === 'Участники') {
        return <AboutParters/>
    }
    if(listingPath === 'Раскрытия информации') {
        return <DisclosuresA/>
    }
  }

  return (
    <div style={{margin: '50px 0 0 0', borderTop: '1px solid #DADADA'}}>
      <Container>
        <Flex>
          <SideBarAbout changeLP={changeListingPath} activeText={listingPath}/>
          {getSideChoose()}
        </Flex>
      </Container>
    </div>
  )
}

export default Disclosures