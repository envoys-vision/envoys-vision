import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderNavText } from '../../components/header/hedearStyledComponents'
import NewsSideBar from '../../components/newComponents/NewsSideBar'
import { Container, Flex } from '../../uikit/uikit'

import styled from 'styled-components'
import NewsPage from '../../components/newComponents/NewsPage'
import axios from 'axios'

const StyledWrap = styled.div`
  width: 100%;
  margin: 2rem 0; 
  border-top: 1px solid #DADADA;
`

const News:React.FC = () => {
  const [info, setInfo] = React.useState([])
  const [activeNews, setActiveNews] = React.useState()

  useEffect(() => {
    axios.get('https://envoys-vision-news-default-rtdb.firebaseio.com/news.json')
    .then(res => {
      let newsData = res.data 
      // for (let i in newsData){
        // let newsArr = []
        // newsArr.push(newsData[i])
        // setInfo(newsArr)
      //   setActiveNews
      // }
      
    })
  }, [])
  

  const navigate = useNavigate()
  return (
        <>
          <Container>
            <Flex direction='column' margin='20px 0'>
                <HeaderNavText 
                  style={{margin: '10px 0'}} 
                  onClick={() => navigate('/dividendcalendar')}>
                    Dividend Calendar
                </HeaderNavText>
                <HeaderNavText
                  style={{margin: '10px 0'}}
                  onClick={() => navigate('/earningcalendar')}>
                    Earning Calendar
                </HeaderNavText>
            </Flex> 
          </Container>
          <StyledWrap>
              <Container>
          
                <Flex>
                  <NewsSideBar info={info} newsClick={setActiveNews}/>
                  <NewsPage info={info} name={activeNews}/>
                </Flex> 
              </Container>
        </StyledWrap>
  </>
  )
}

export default News