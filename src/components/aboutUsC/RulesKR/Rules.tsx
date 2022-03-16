import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { ContentSideUl, DocIcon, TitleLink, ContentSideLink, ContentSideLi } from '../aboutUsSC'
import doc from '../../../assets/document.svg'

function Rules() {
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
    </Flex>
  )
}

export default Rules