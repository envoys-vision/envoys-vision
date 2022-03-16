import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { ContentSideBtn, ContentSideBtnActive } from '../aboutUsSC';

type Props = {
    headerBtns: string[];
    active: string;
    clickBtn: any;
}

const ContentHeader:React.FC<Props> = (props) => {
  return (
    <Flex justify={props.headerBtns.length>2?'space-between':'flex-start'} margin='0 0 70px 0' style={{borderBottom: '1px solid #DADADA'}}>
        {props.headerBtns.map((el, index) => {
            if(props.active === el){
                return <ContentSideBtnActive 
                    key={index} 
                    style={{color: 'red'}}
                    onClick={() => props.clickBtn(el)}>
                        {el}
                    </ContentSideBtnActive>
            }
            return <ContentSideBtn key={index} onClick={() => props.clickBtn(el)}>{el}</ContentSideBtn>
        })}
    </Flex>
  )
}

export default ContentHeader