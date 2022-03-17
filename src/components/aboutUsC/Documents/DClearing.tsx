import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { AboutUsLink } from '../aboutUsSC'
import DClearing1 from './DItem/ClearingItems/DClearing1'
import DClearing2 from './DItem/ClearingItems/DClearing2'

function DClearing() {
  return (
    <Flex direction='column' margin='0 0 30px 0'>

        {/* <DClearing1/>
        <DClearing2/> */}

          <AboutUsLink href={require('../doc/О депозитарном обслуживании размещения новой эмиссии ценных бумаг.pdf')} target="_blank">О депозитарном обслуживании размещения новой эмиссии ценных бумаг</AboutUsLink>  
        <AboutUsLink href={require('../doc/Правила ведения депозитарно-клиринговых операций.pdf')} target="_blank">Правила ведения депозитарно-клиринговых операций</AboutUsLink>  
        <AboutUsLink href={require('../doc/Регламент по депозитарно-клиринговым операциям.pdf')} target="_blank">Регламент по депозитарно-клиринговым операциям</AboutUsLink>  
    </Flex>
  )
}

export default DClearing