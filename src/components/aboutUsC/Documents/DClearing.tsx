import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { AboutUsLink } from '../aboutUsSC'

function DClearing() {
  return (
    <Flex direction='column' margin='0 0 30px 0'>
        <AboutUsLink href={require('../doc/О депозитарном обслуживании размещения новой эмиссии ценных бумаг.docx')} target="_blank">О депозитарном обслуживании размещения новой эмиссии ценных бумаг</AboutUsLink>  
        <AboutUsLink href={require('../doc/Правила ведения депозитарно-клиринговых операций.docx')} target="_blank">Правила ведения депозитарно-клиринговых операций</AboutUsLink>  
        <AboutUsLink href={require('../doc/Регламент по депозитарно-клиринговым операциям.docx')} target="_blank">Регламент по депозитарно-клиринговым операциям</AboutUsLink>  
    </Flex>
  )
}

export default DClearing