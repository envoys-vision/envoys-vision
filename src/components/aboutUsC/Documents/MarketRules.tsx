import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { AboutUsLink } from '../aboutUsSC'
import DMarket1 from './DItem/MarketItems/DMarket1'
import DMarket2 from './DItem/MarketItems/DMarket2'

function MarketRules() {
  return (
    <Flex direction='column' margin='0 0 30px 0'>
        <DMarket1/>
        <DMarket2/>
      
        {/* <AboutUsLink href={require('../doc/Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами.pdf')} target="_blank">Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами</AboutUsLink>  
        <AboutUsLink href={require('../doc/Положение о противодействии манипулированию на рынке ценных бумаг.pdf')} target="_blank">Положение о противодействии манипулированию на рынке ценных бумаг</AboutUsLink>  
        <AboutUsLink href={require('../doc/Правила биржевой торговли.pdf')} target="_blank">Правила биржевой торговли</AboutUsLink>   */}

    </Flex>
  )
}

export default MarketRules