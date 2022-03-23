import React from 'react'
import { Flex } from '../../../../../uikit/uikit';
import upIcon from '../../../../../assets/rulesDDUp.svg'
import downIcon from '../../../../../assets/rulesDDDown.svg'
import doc from '../../../../../assets/document.svg'
import { DDropDownIcon, DDropDownItem, DDropDownTitle, DDropDownInfo, ContentSideLink, ContentSideUl, ContentSideLi, TitleLink, DocIcon } from '../../../aboutUsSC'

const DMarket2:React.FC = () => {
    const [itemClick, setItemClick] = React.useState<boolean>(false)
  return (
    <DDropDownItem style={{padding: '35px 0', borderBottom: '1px solid rgb(218, 218, 218)'}}>
        <Flex justify='space-between' style={{maxWidth: '550px'}} onClick={() => setItemClick(val => !val)} margin={itemClick?'0 0 25px':'0'}>
            <DDropDownTitle>Правила биржевой торговли</DDropDownTitle>
            <DDropDownIcon src={downIcon}/>
        </Flex>

    <DDropDownInfo click={itemClick} direction='column'>
    <Flex direction='column'>
                <Flex align='center' justify='space-between'>
                    <Flex align='center'>
                        <DocIcon src={doc}/>
                        <TitleLink href={require('../../docs/market2/Правила биржевой торговли.pdf')} target="_blank">Правила биржевой торговли</TitleLink>
                    </Flex>
                    <DDropDownIcon src={upIcon} onClick={() => setItemClick(false)}/>
                </Flex>
        
                <ContentSideUl>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/market2/Приложение №1. Доверенность.docx')} target="_blank">Приложение №1. Доверенность</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/market2/Приложение №2. Порядок присвоения персонального кода.pdf')} target="_blank">Приложение №2. Порядок присвоения персонального кода</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/market2/Приложение №3. Заявление на допуск ЦБ к торговой площадке.docx')} target="_blank">Приложение №3. Заявление на допуск ЦБ к торговой площадке</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/market2/Приложение №4. Биржевой контракт.pdf')} target="_blank">Приложение №4. Биржевой контракт</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/market2/Приложение №5. Биржевое свидетельство.pdf')} target="_blank">Приложение №5. Биржевое свидетельство</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/market2/Приложение №6. Перечень документов для регистрации.pdf')} target="_blank">Приложение №6. Перечень документов для регистрации</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/market2/Приложение №7. Заявление на регистрацию.docx')} target="_blank">Приложение №7. Заявление на регистрацию</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/market2/Приложение №8. Анкета участника торгов.docx')} target="_blank">Приложение №8. Анкета участника торгов</ContentSideLink>
                    </ContentSideLi>
                    <ContentSideLi>
                        <ContentSideLink href={require('../../docs/market2/Приложение №9. Договор об участии в торгах.docx')} target="_blank">Приложение №9. Договор об участии в торгах</ContentSideLink>
                    </ContentSideLi>
                </ContentSideUl>
            </Flex>
        </DDropDownInfo>
    </DDropDownItem>
  )
}

export default DMarket2