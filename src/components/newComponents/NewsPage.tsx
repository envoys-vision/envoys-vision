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
    margin: 0 0 50px  0;

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
    React.useEffect(() => {
      console.log(props.name)
    }, [])
    
  return (
    <Flex direction='column' margin='60px' flex={1}>
        <NewsTitle>{props.name}</NewsTitle>
        {props.info.map((el:any, index:number) => {
            if(el.name === props.name){
                return <NewsText key={index}>{el.text}</NewsText>
            }
        })}
    </Flex>
  )
}

export default NewsPage