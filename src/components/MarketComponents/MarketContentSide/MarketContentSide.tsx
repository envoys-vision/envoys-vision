import React from 'react'
import styled from 'styled-components';
import { Flex } from '../../../uikit/uikit';
import MCSOther1 from '../MarketContentSideComponents/Other/MCSOther1';
import Sector1 from '../MarketContentSideComponents/Sectors/Sector1';
import StockMarket1 from '../MarketContentSideComponents/StockMarket/StockMarket1';

const MarketContentWrap = styled(Flex)`
    flex: 1;
    @media(max-width: 500px){
        margin: 0;
    }
`

type Props = {
    activeLink: string;
}

const MarketContentSide:React.FC<Props> = (props) => {
    
    function chekContent(){
        if(props.activeLink === 'Российский рынок' ||  props.activeLink === 'Американский рынок' || props.activeLink === 'Кыргызский рынок'){
            return <StockMarket1/>
        }
        if(props.activeLink === 'Горднодобывающий сектор' ||  props.activeLink === 'Промышленность' || props.activeLink === 'Финансовый сектор' || props.activeLink === 'Сельское хозяйство'){
            return <Sector1/>
        }
        if(props.activeLink === 'Рынок металлов' ||  props.activeLink === 'Валютный рынок' || props.activeLink === 'Рынки деривативов' ||  props.activeLink === 'Криптовалютный рынок' ||  props.activeLink === 'Товарный сектор' ||  props.activeLink === 'Рынок недвижимости'){
            return <MCSOther1/>
        }

    }

    return (
    <MarketContentWrap margin='36px 0 0 30px'>
        {chekContent()}
    </MarketContentWrap>
  )
}

export default MarketContentSide