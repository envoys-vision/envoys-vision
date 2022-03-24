import React from 'react'
import styled from 'styled-components';
import { Flex } from '../../uikit/uikit';

const NewsPageWrap = styled(Flex)`
    overflow-y: scroll; 
    overflow-x: hidden; 
    height: 80vh;
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      transition: .3s;
      background: #555;
    }
    @media(max-width: 830px){
      height: 100%;
      overflow-y: hidden;
      margin: 0; 
    }
`


const NewsTitle = styled.h1`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #045599;
    max-width: 750px;
    margin: 60px 0;

`

const NewsText = styled.p`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #3F3F3F;
    max-width: 750px;
`

const NewsLink = styled.a`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #045599;
    margin-top: 20px;
    max-width: 750px;

`

type Props = {
    name: string;
    info: any;
}

const NewsPage:React.FC<Props> = (props) => {
    
  return (
    <NewsPageWrap direction='column' margin='0 60px' flex={1}>
        <NewsTitle>{props.name}</NewsTitle>
        {props.info.map((el:any, index:number) => {
            if(el.title === props.name){
                return <Flex direction='column' key={index}>
                  <NewsText>{el.text}</NewsText>
                  <NewsLink href={el.link} target='_blank'>Источник: {el.link}</NewsLink>
                </Flex>
            }
        })}
    </NewsPageWrap>
  )
}

export default NewsPage