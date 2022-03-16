import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { DocIcon, TitleLink, ContentSideUl, ContentSideLink, ContentSideLi } from '../aboutUsSC'
import doc from '../../../assets/document.svg'


function Position() {
  return (
    <Flex direction='column'>
        <Flex direction='column'>
            <Flex align='center'>
                <DocIcon src={doc}/>
                <TitleLink href='#'>Methodology</TitleLink>
            </Flex>
    
            <ContentSideUl>
                <ContentSideLi>
                    <ContentSideLink href='#'>sadas</ContentSideLink>
                </ContentSideLi>
                <ContentSideLi>
                    <ContentSideLink href='#'>sadas</ContentSideLink>
                </ContentSideLi>
                <ContentSideLi>
                    <ContentSideLink href='#'>sadas</ContentSideLink>
               </ContentSideLi>
                <ContentSideLi>
                    <ContentSideLink href='#'>sadas</ContentSideLink>
               </ContentSideLi>
            </ContentSideUl>
        </Flex>
        <Flex direction='column' margin='20px 0'>
            <Flex align='center'>
                <DocIcon src={doc}/>
                <TitleLink href='#'>Methodology</TitleLink>
            </Flex>
    
            <ContentSideUl>
                <ContentSideLi>
                    <ContentSideLink href='#'>sadas</ContentSideLink>
                </ContentSideLi>
                <ContentSideLi>
                    <ContentSideLink href='#'>sadas</ContentSideLink>
                </ContentSideLi>
                <ContentSideLi>
                    <ContentSideLink href='#'>sadas</ContentSideLink>
               </ContentSideLi>
                <ContentSideLi>
                    <ContentSideLink href='#'>sadas</ContentSideLink>
               </ContentSideLi>
            </ContentSideUl>
        </Flex>
    </Flex>
  )
}

export default Position