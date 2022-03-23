import React from 'react'
import { Flex } from '../../../../../uikit/uikit';
import upIcon from '../../../../../assets/rulesDDUp.svg'
import downIcon from '../../../../../assets/rulesDDDown.svg'
import doc from '../../../../../assets/document.svg'
import { DDropDownIcon, DDropDownItem, DDropDownTitle, DDropDownInfo, ContentSideLink, ContentSideUl, ContentSideLi, TitleLink, DocIcon } from '../../../aboutUsSC'


const DListing2:React.FC = () => {
    const [itemClick, setItemClick] = React.useState<boolean>(false)
  return (
    <DDropDownItem style={{padding: '35px 0', borderBottom: '1px solid rgb(218, 218, 218)'}}>
        <Flex justify='space-between' style={{maxWidth: '550px'}} onClick={() => setItemClick(val => !val)} margin={itemClick?'0 0 25px':'0'}>
            <DDropDownTitle>Листинговые требования</DDropDownTitle>
            <DDropDownIcon src={downIcon}/>
        </Flex>

    <DDropDownInfo click={itemClick} direction='column'>
            <Flex direction='column'>
                <Flex align='center' justify='space-between'>
                    <Flex align='center'>
                        <DocIcon src={doc}/>
                        <TitleLink href={require('../../docs/Listing2/Листинговые требования.pdf')} target="_blank">Листинговые требования</TitleLink>
                    </Flex>
                    <DDropDownIcon src={upIcon} onClick={() => setItemClick(false)}/>
                </Flex>
        
                <ContentSideUl>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/Listing2/Приложение №3. Перечень документов для листинга отечественных компаний.docx')} target="_blank">Приложение №3. Перечень документов для листинга отечественных компаний</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/Listing2/Приложение №4. Перечень документов, предоставляемых Оригинатором и Эмитентом для прохождения процедуры листинга.pdf')} target="_blank">Приложение №4. Перечень документов, предоставляемых Оригинатором и Эмитентом для прохождения процедуры листинга</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/Listing2/Приложение №6. Требования по информации относительно целей поддержания листинга.pdf')} target="_blank">Приложение №6. Требования по информации относительно целей поддержания листинга</ContentSideLink>
                    </ContentSideLi>
                    
                </ContentSideUl>
            </Flex>
        </DDropDownInfo>
    </DDropDownItem>
  )
}

export default DListing2