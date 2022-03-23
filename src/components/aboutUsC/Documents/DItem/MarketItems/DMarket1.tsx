import React from 'react'
import { Flex } from '../../../../../uikit/uikit';
import upIcon from '../../../../../assets/rulesDDUp.svg'
import downIcon from '../../../../../assets/rulesDDDown.svg'
import doc from '../../../../../assets/document.svg'
import { DDropDownIcon, DDropDownItem, DDropDownTitle, DDropDownInfo, ContentSideLink, ContentSideUl, ContentSideLi, TitleLink, DocIcon } from '../../../aboutUsSC'

const DMarket1:React.FC = () => {
    const [itemClick, setItemClick] = React.useState<boolean>(false)
  return (
    <DDropDownItem style={{padding: '35px 0', borderBottom: '1px solid rgb(218, 218, 218)'}}>
        <Flex justify='space-between' style={{maxWidth: '550px'}} onClick={() => setItemClick(val => !val)} margin={itemClick?'0 0 25px':'0'}>
            <DDropDownTitle>Корпоративные ценные бумаги</DDropDownTitle>
            <DDropDownIcon src={downIcon}/>
        </Flex>

    <DDropDownInfo click={itemClick} direction='column'>
            <Flex direction='column'>
                <Flex align='center' justify='space-between'>
                    <Flex align='center'>
                        <DocIcon src={doc}/>
                        <TitleLink href={require('../../../doc/Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами.pdf')} target='_blank'>Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами</TitleLink>
                    </Flex>
                    <DDropDownIcon src={upIcon} onClick={() => setItemClick(false)}/>
                </Flex>
            </Flex>
        </DDropDownInfo>
    </DDropDownItem>
  )
}

export default DMarket1