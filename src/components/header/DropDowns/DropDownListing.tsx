import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from '../../../uikit/uikit'
import { DropDownInside, DropDownLink, HeaderDropDown, HeaderDropDownS, HeaderDropDownWrap, HeaderNavText } from '../hedearStyledComponents'

const DropDownListing:React.FC = () => {
  const [listingList, setListingList] = React.useState([
    'Список компаний',
    'Облигации',
    'Раскрытие информации компаниями',
    'Правила листинга'
  ])
  const navigate = useNavigate()

  return (
    <HeaderDropDownWrap>
      <DropDownInside style={{  height: '200px'}}>
        <Flex direction='column'>
          {listingList.map((el, index) => {
            if(el === 'Правила листинга'){
              return <DropDownLink
                        key={index} 
                        onClick={() => navigate('disclosures', {state: 'Правила'})}>
                      {el}
                    </DropDownLink>
            }
            return <DropDownLink
                      key={index} 
                      onClick={() => navigate('listing', {state: el})}>
                    {el}
                  </DropDownLink>
          })}
        </Flex>
      </DropDownInside>
    </HeaderDropDownWrap>
  )
}

export default DropDownListing