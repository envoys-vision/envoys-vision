import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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

const NewsContentWrap = styled(Flex)`
  @media(max-width: 830px){
    flex-direction: column;
  }
` 


const News:React.FC = () => {
  const [info, setInfo] = React.useState<any>([])
  const [activeNews, setActiveNews] = React.useState<any>()
  const location = useLocation()

  useEffect(() => {
    axios.get('https://envoys-vision-news-default-rtdb.firebaseio.com/news.json')
      .then(res => {
        let newsData = res.data       
        let newsArr = []
        for (let i in newsData){
          newsArr.push(newsData[i])
          setInfo(newsArr)
        }
        if(location.state){
          setActiveNews(location.state)
        }else{
          setActiveNews(newsArr[newsArr.length-1].title)
        }
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
                    Дивидендный календарь
                </HeaderNavText>
                <HeaderNavText
                  style={{margin: '10px 0'}}
                  onClick={() => navigate('/earningcalendar')}>
                    Календарь заработка
                </HeaderNavText>
            </Flex> 
          </Container>
          <StyledWrap>
              <Container>
          
                <NewsContentWrap>
                  <NewsSideBar info={info} newsClick={setActiveNews}/>
                  <NewsPage info={info} name={activeNews}/>
                </NewsContentWrap> 
              </Container>
        </StyledWrap>
  </>
  )
}

export default News