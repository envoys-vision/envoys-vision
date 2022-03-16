import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { AboutUsLink } from '../aboutUsSC'

function MarketRules() {
  return (
    <Flex direction='column' margin='0 0 30px 0'>
        <AboutUsLink href={require('../doc/Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами.docx')} target="_blank">Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами</AboutUsLink>  
        <AboutUsLink href={require('../doc/Положение о противодействии манипулированию на рынке ценных бумаг.docx')} target="_blank">Положение о противодействии манипулированию на рынке ценных бумаг</AboutUsLink>  
        <AboutUsLink href={require('../doc/Правила биржевой торговли.docx')} target="_blank">Правила биржевой торговли</AboutUsLink>  

    </Flex>
  )
}

export default MarketRules