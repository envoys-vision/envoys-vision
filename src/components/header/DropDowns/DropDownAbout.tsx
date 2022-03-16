import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from '../../../uikit/uikit'
import { DropDownInside, DropDownLink, HeaderDropDown, HeaderDropDownS, HeaderDropDownWrap, HeaderNavText } from '../hedearStyledComponents'

const DropDownAbout:React.FC = () => {
const [aboutList, setAboutList] = React.useState([
    'Участники',
    'Правила',
    'Законодательство КР',
    'Раскрытия информации',
    ])
  const navigate = useNavigate()

  return (
    <HeaderDropDownWrap>
    <DropDownInside style={{  height: '190px'}}>
      <Flex direction='column'>
        {aboutList.map((el, index) => {
          return <DropDownLink
                    key={index} 
                    onClick={() => navigate('disclosures', {state: el})}>
                  {el}
                </DropDownLink>
        })}
      </Flex>
    </DropDownInside>
  </HeaderDropDownWrap>
  )
}

export default DropDownAbout