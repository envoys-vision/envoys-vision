import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'

const AboutUsLink = styled.a`
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

const Statement = () => {
  return (
    <Flex direction='column'  flex={1} margin='20px'>
        <AboutUsLink href={require('./statement/Договор листинга на бирже.docx')} target="_blank">Договор листинга на бирже</AboutUsLink>  
        <AboutUsLink href={require('./statement/Заявление на листинг компании Эмитента.docx')} target="_blank">Заявление на листинг компании Эмитента</AboutUsLink>  
        <AboutUsLink href={require('./statement/Перечень документов для прохождения листинга эмитентов.docx')} target="_blank">Перечень документов для прохождения листинга эмитентов</AboutUsLink>  
        <AboutUsLink href={require('./statement/Перечень документов, предоставляемых Оригинатором и Эмитентом для прохождения процедуры листинга.docx')} target="_blank">Перечень документов, предоставляемых Оригинатором и Эмитентом для прохождения процедуры листинга</AboutUsLink>  
        <AboutUsLink href={require('./statement/Требования к Эмитенту для целей поддержания листинга.docx')} target="_blank">Требования к Эмитенту для целей поддержания листинга</AboutUsLink>  

    </Flex>
  )
}

export default Statement