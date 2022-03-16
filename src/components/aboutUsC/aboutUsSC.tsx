import styled from "styled-components";
import { Flex } from "../../uikit/uikit";


export const AboutUsLink = styled.a`
    text-transform: capitalize;
    font-family: Exo 2;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #045599;
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    transition: .3s;
    margin: 10px 0;
    :hover{
      font-size: 18px;
    }
`


export const AboutUsTitle = styled.h2`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #045599;
    margin: 0 0 35px 0;
`

export const ContentSideAbout = styled(Flex)`
`

export const ContentSideBtn = styled.button`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #045599;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s;
    margin: 0 40px;
    :nth-child(1){
        margin: 0;
    }
    :hover{
        color: #F47F1F;
    }
`

export const ContentSideBtnActive = styled(ContentSideBtn)`
    color: #F47F1F;
`

export const DocIcon = styled.img`
    width: 12px;
    margin-right: 5px; 
`

export const TitleLink = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 17px;
    color: #4478BB;
    cursor: poiner;
    text-decoration: none;
    transition: .3s linear;
    :hover{
        font-size: 19px;
    }
`

export const ContentSideUl = styled.ul`
    list-style: none;
    padding-left: 32px;
` 

export const ContentSideLi = styled.li`
    margin: 8px 0 0 0;
    :before {
        content: "•"; 
        color: #4478BB;
        font-weight: bold; 
        display: inline-block; 
        width: 1em;
        /* font-size: 20px; */
        margin-left: -1em;
    }
`

export const ContentSideLink = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    line-height: 15px;
    color: #4478BB;
    transition: .3s;
    :hover{
        font-weight: 700;
    }
`