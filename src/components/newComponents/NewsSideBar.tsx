import React from 'react'
import styled from 'styled-components'
import Vector from '../../assets/Vector.png'


const NewsBox = styled.div`
  position: relative;
  padding: 24px 0 30px 0;
  border-bottom: 1px solid #DADADA;
`

const NewsText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  max-width: 370px;
  color: #000000;
  @media(max-width: 400px){
    font-size: 18px;
  }
`

const ViewMoreAndData = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #045599;
  margin-top: 14px;
  &:last-child{
    margin-right: 10px;
  }
`

export const ViewMore = styled.button`
    border-style: none;
    color: #045599;
    background: transparent ;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    img{
    margin: 0 0 0 5px;
    }
`

const NewsSideBarWrap = styled.div`
    flex: .5;
    border-right: 1px solid #DADADA;
    height: 80vh;
    overflow-y: scroll;
`

type Props = {
    info: any;
    newsClick: any;
}


const NewsSideBar:React.FC<Props> = (props) => {

  return (
    <NewsSideBarWrap >
        {props.info.map((el:any, index:number) => {
            return <NewsBox key={index}>
                    <NewsText>
                        {el.name}
                    </NewsText>
                    <ViewMoreAndData>
                        <span>{el.date}</span>
                        <ViewMore onClick={() => props.newsClick(el.name)}>Подробнее <img src={Vector} alt=""/></ViewMore>
                    </ViewMoreAndData>
                </NewsBox>
        })}
    </NewsSideBarWrap>
  )
}

export default NewsSideBar