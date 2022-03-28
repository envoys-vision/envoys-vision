import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { AboutUsLink } from '../aboutUsSC'
import DCorporate1 from './DItem/CorporateItems/DCorporate1'
import DCorporate2 from './DItem/CorporateItems/DCorporate2'
import DCorporate3 from './DItem/CorporateItems/DCorporate3'

function DCorporate() {
  return (
    <Flex direction='column' margin='0 0 30px 0'>
        
        {/* <DCorporate1/> */}
        <DCorporate2/>
        <DCorporate3/>

        
        {/* <AboutUsLink href={require('../doc/Положение о раскрытии информации.pdf')} target="_blank">Положение о раскрытии информации</AboutUsLink>  
        <AboutUsLink href={require('../doc/Кодекс корпоративного управления.pdf')} target="_blank">Кодекс корпоративного управления</AboutUsLink>  
        <AboutUsLink href={require('../doc/Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами.pdf')} target="_blank">Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами</AboutUsLink>   */}

    </Flex>
  )
}

export default DCorporate