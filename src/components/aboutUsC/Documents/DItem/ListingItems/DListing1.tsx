import React from 'react'
import { Flex } from '../../../../../uikit/uikit';
import upIcon from '../../../../../assets/rulesDDUp.svg'
import downIcon from '../../../../../assets/rulesDDDown.svg'
import doc from '../../../../../assets/document.svg'
import { DDropDownIcon, DDropDownItem, DDropDownTitle, DDropDownInfo, ContentSideLink, ContentSideUl, ContentSideLi, TitleLink, DocIcon } from '../../../aboutUsSC'


const DListing1:React.FC = () => {
    const [itemClick, setItemClick] = React.useState<boolean>(false)
  return (
    <DDropDownItem style={{padding: '35px 0', borderBottom: '1px solid rgb(218, 218, 218)'}}>
        <Flex justify='space-between' style={{maxWidth: '550px'}} onClick={() => setItemClick(val => !val)} margin={itemClick?'0 0 25px':'0'}>
            <DDropDownTitle>Процедура листинга</DDropDownTitle>
            <DDropDownIcon src={downIcon}/>
        </Flex>

    <DDropDownInfo click={itemClick} direction='column'>
            <Flex direction='column'>
                <Flex align='center' justify='space-between'>
                    <Flex align='center'>
                        <DocIcon src={doc}/>
                        <TitleLink href={require('../../docs/Listing2/Правила листинга ценных бумаг.pdf')} target="_blank">Правила листинга ценных бумаг</TitleLink>
                    </Flex>
                    <DDropDownIcon src={upIcon} onClick={() => setItemClick(false)}/>
                </Flex>
        
                <ContentSideUl>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/Listing2/Приложение №1. Договор листинга.docx')} target="_blank">Приложение №1. Договор листинга</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/Listing2/Приложение №2. Заявка на листинг.docx')} target="_blank">Приложение №2. Заявка на листинг</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/Listing2/Приложение №5. Заключение Листингового комитета Биржи.docx')} target="_blank">Приложение №5. Заключение Листингового комитета Биржи</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/Listing2/Приложение №7. Листинговый проспект.docx')} target="_blank">Приложение №7. Листинговый проспект</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/Listing2/Приложение №8. Перечень иностранных фондовых бирж.docx')} target="_blank">Приложение №8. Перечень иностранных фондовых бирж</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/Listing2/Приложение №9. Бюллетень для голосования.docx')} target="_blank">Приложение №9. Бюллетень для голосования</ContentSideLink>
                    </ContentSideLi>

                </ContentSideUl>
            </Flex>
        </DDropDownInfo>
    </DDropDownItem>
  )
}

export default DListing1