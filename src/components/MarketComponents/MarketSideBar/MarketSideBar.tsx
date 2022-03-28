import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { SideBarBtn, SideBarCloseWrap, SideBarFlex, SideBarIcon, SideBarLink, SideBarLinkActive, SideBarTitle, SideBarWrap } from '../../listingComponents/SideBar/SideBarSC'
import rIcon from '../../../assets/right.svg'
import icon from '../../../assets/close.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const MSSideBarWrap = styled(SideBarWrap)`
    border-right: 1px solid #DADADA;
    @media (max-width: 834px){
        border-right: none;
    }
`

const MSBWrap = styled(SideBarFlex)`
    @media (max-width: 834px){
        overflow-y: scroll;
        border-right: none;
        width: 215px;
    }
`

type Props = {
    changeLP?: any;
    activeLink: string;
}

const MarketSideBar:React.FC<Props> = (props) => {
    const [links, setLinks] = React.useState([
        {
            name: 'Фондовый рынок',
            links: ['Российский рынок', 'Американский рынок', 'Кыргызский рынок']
        },
        {
            name: 'Сектора',
            links: ['Горднодобывающий сектор','Промышленность','Финансовый сектор','Сельское хозяйство']
        },
        {
            name: 'Рынки',
            links: ['Рынок драгоценных металлов', 'Валютный рынок','Криптовалютный рынок','Товарный сектор','Рынок недвижимости']
        },
    ])
    const [sideBarClickIcon, setSideBarClickIcon] = React.useState(false)
    const navigate = useNavigate() 
    const location = useLocation()
    
    

    return (
    <MSSideBarWrap>
        <MSBWrap align='flex-start' direction='column' click={ sideBarClickIcon}>
            {links.map((el, index) => {
                return <>
                    <Flex justify='space-between' key={index}>
                        {index===0?
                            <>
                                <SideBarTitle style={{margin: '36px 0'}}>
                                    {el.name}
                                </SideBarTitle>
                                <SideBarBtn onClick={() => setSideBarClickIcon(val => !val)}>
                                    <img src={icon} alt="" />
                                </SideBarBtn>
                            </>
                            :<SideBarTitle style={{margin: '36px 0'}}>
                                {el.name}
                            </SideBarTitle>
                        }
                    </Flex>
    
                    {el.links.map((el2, i) => {
                        if(el2 === props.activeLink){
                            return <SideBarLinkActive key={i} onClick={() => {
                                setSideBarClickIcon(false)
                            }} style={{margin: '5px 0'}}>{el2}</SideBarLinkActive>
                        }
    
                        return <SideBarLink key={i} onClick={() => {
                            setSideBarClickIcon(false)
                            props.changeLP(el2)
                        }} style={{margin: '5px 0'}}>{el2}</SideBarLink>
                    })}
                        </>

            })}
        </MSBWrap>
            
    
    <SideBarIcon src={rIcon} 
    onClick={() => setSideBarClickIcon(val => !val)}/>

    <SideBarCloseWrap click={sideBarClickIcon} 
    onClick={() => setSideBarClickIcon(val => !val)}></SideBarCloseWrap>

</MSSideBarWrap>
  )
}

export default MarketSideBar