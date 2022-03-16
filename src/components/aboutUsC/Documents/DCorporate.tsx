import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { AboutUsLink } from '../aboutUsSC'

function DCorporate() {
  return (
    <Flex direction='column' margin='0 0 30px 0'>
        <AboutUsLink href={require('../doc/Положение о раскрытии информации.docx')} target="_blank">Положение о раскрытии информации</AboutUsLink>  
        <AboutUsLink href={require('../doc/Кодекс корпоративного управления.docx')} target="_blank">Кодекс корпоративного управления</AboutUsLink>  
        <AboutUsLink href={require('../doc/Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами.docx')} target="_blank">Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами</AboutUsLink>  

    </Flex>
  )
}

export default DCorporate