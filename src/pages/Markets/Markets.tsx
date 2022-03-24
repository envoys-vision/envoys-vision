import React from 'react'
import styled from 'styled-components'
import MarketContentSide from '../../components/MarketComponents/MarketContentSide/MarketContentSide'
import MarketSideBar from '../../components/MarketComponents/MarketSideBar/MarketSideBar'
import { Container, Flex } from '../../uikit/uikit'
import { useLocation } from 'react-router-dom'

const MarketWrap = styled.div`
  border-top: 1px solid #DADADA;
  margin: 50px 0 0 0;
  width: 100%;
` 

const Markets = () => {
  const [listingPath, setListingPath] = React.useState<string>('Российский рынок')
  const location = useLocation()

  function changeListingPath(el:string){
    setListingPath(el)
  }

  React.useEffect(() => {
    if(location.state){
      setListingPath(String(location.state))
    }
  }, [])
  

  return (
    <MarketWrap>
      <Container>
        <Flex>
          <MarketSideBar changeLP={changeListingPath} activeLink={listingPath}/>
          <MarketContentSide activeLink={listingPath}/>
        </Flex>
    </Container>
    </MarketWrap>
  )
}

export default Markets