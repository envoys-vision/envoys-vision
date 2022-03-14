import React from 'react'
import styled from 'styled-components';
import { Flex } from '../../uikit/uikit';

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

type Props = {
    name: string;
    info: any;
}

const NewsPage:React.FC<Props> = (props) => {
    
  return (
    <Flex direction='column' margin='0 60px' flex={1} style={{overflowY: 'scroll', height: '80vh'}}>
        <NewsTitle>{props.name}</NewsTitle>
        {props.info.map((el:any, index:number) => {
            if(el.title === props.name){
                return <NewsText key={index}>{el.text}</NewsText>
            }
        })}
    </Flex>
  )
}

export default NewsPage