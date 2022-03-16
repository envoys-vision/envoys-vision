import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from '../../../uikit/uikit'
import { DropDownInside, DropDownLink, HeaderDropDown, HeaderDropDownS, HeaderDropDownWrap, HeaderNavText } from '../hedearStyledComponents'

const DropDownAbout:React.FC = () => {
const [aboutList, setAboutList] = React.useState([
    'Участники',
    'Внутренние документы биржи',
    'Законодательство КР',
    'Раскрытия информации',
    'Приложения к листингу'
    ])
  const navigate = useNavigate()

  return (
    <HeaderDropDownWrap>
    <DropDownInside style={{  height: '220px'}}>
      <Flex direction='column'>
        {aboutList.map((el, index) => {
          return <DropDownLink
                    key={index} 
                    onClick={() => navigate('aboutus', {state: el})}>
                  {el}
                </DropDownLink>
        })}
      </Flex>
    </DropDownInside>
  </HeaderDropDownWrap>
  )
}

export default DropDownAbout