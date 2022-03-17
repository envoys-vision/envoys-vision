import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { AboutUsLink } from '../aboutUsSC'
import DListing1 from './DItem/ListingItems/DListing1'
import DListing2 from './DItem/ListingItems/DListing2'
import DListing3 from './DItem/ListingItems/DListing3'



function DListing() {
  return (
    <Flex direction='column' margin='0 0 30px 0'>

        {/* <DListing1 />
        <DListing3/>
        <DListing2/> */}

        
        <AboutUsLink href={require('../statement/Договор листинга на бирже.docx')} target="_blank">Договор листинга на бирже</AboutUsLink>  
        <AboutUsLink href={require('../statement/Заявление на листинг компании Эмитента.docx')} target="_blank">Заявление на листинг компании Эмитента</AboutUsLink>  
        <AboutUsLink href={require('../statement/Перечень документов для прохождения листинга эмитентов.pdf')} target="_blank">Перечень документов для прохождения листинга эмитентов</AboutUsLink>  
        <AboutUsLink href={require('../statement/Перечень документов, предоставляемых Оригинатором и Эмитентом для прохождения процедуры листинга.pdf')} target="_blank">Перечень документов, предоставляемых Оригинатором и Эмитентом для прохождения процедуры листинга</AboutUsLink>  
        <AboutUsLink href={require('../statement/Требования к Эмитенту для целей поддержания листинга.pdf')} target="_blank">Требования к Эмитенту для целей поддержания листинга</AboutUsLink>
        <AboutUsLink href={require('../doc/Правила листингаценных бумаг и иных финансовых инструментов.pdf')} target="_blank">Правила листингаценных бумаг и иных финансовых инструментов</AboutUsLink>

    </Flex>
  )
}

export default DListing