import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { BannerDate, BannerInfoIncrease, BannerInfoLink, BannerInfoS, BannerInfoText, BannerInfoWrap, BannerSearch, BannerSearchBtn, BannerSearchBtnIcon } from './bannerInfoSC'
import Icon from '../../../assets/search.svg';
import Rechart from './Rechart';
import {useTranslation} from "react-i18next";

const BannerInfo:React.FC = () => {
    const [inputValue, setInputValue] = React.useState('')
    const {t} = useTranslation()
    const data = [{
          name: '1',
          uv: 12,
        },{
          name: '2',
          uv: 20,
        },{
          name: '3',
          uv: 19,
        },{
          name: '4',
          uv: 25,
        },{
          name: '5',
          uv: 37,
        },{
          name: '6',
          uv: 50,
        },{
          name: '7',
          uv: 46,
        },{
          name: '8',
          uv: 37,
        },{
          name: '9',
          uv: 64,
        },{
          name: '10',
          uv: 29,
        },{
          name: '11',
          uv: 65,
        },{
          name: '12am',
          uv: 70,
        },];

  return (
    <BannerInfoS>
        <BannerInfoWrap>
            <Flex align='center'>
                <BannerSearch placeholder='Введите название' onChange={(e) => setInputValue(e.target.value)}/>
                <BannerSearchBtn><BannerSearchBtnIcon src={Icon}/></BannerSearchBtn>
            </Flex>

            <BannerDate>22 Января 2022</BannerDate>

            <BannerInfoText margin={false}>Envoys {t("home.index")}</BannerInfoText>
            <Flex margin='15px 0 15px 0'>
                <BannerInfoText margin={false}>0 </BannerInfoText>
                <BannerInfoIncrease margin={true}>0</BannerInfoIncrease> 
                <BannerInfoIncrease  margin={true}>0</BannerInfoIncrease> 
            </Flex>
            <Flex margin='15px 0 25px 0'>
                <BannerInfoText margin={false}>Volume:</BannerInfoText>
                <BannerInfoText margin={true}>0</BannerInfoText>
            </Flex>
            <Flex margin='0 0 20px 0'><BannerInfoText margin={false}>В связи с отсутствием листинговых компаний, расчёт индексов не возможен</BannerInfoText></Flex>

            <Rechart data={data} color="#53FFD9"/>

            <Flex justify='space-between' margin='25px 0 25px 0'>
                <Flex direction='column' >
                    <BannerInfoText margin={false} mnTop={true}>Envoys-100</BannerInfoText>
                    <BannerInfoText margin={false} mnTop={true}>0</BannerInfoText>
                    <Flex margin='15px 0 15px 0'>
                        <BannerInfoIncrease  margin={false}>0</BannerInfoIncrease> 
                        <BannerInfoIncrease  margin={true}>0</BannerInfoIncrease> 
                    </Flex>
                </Flex>
    
                {/* <Flex direction='column'>
                    <BannerInfoText margin={false} mnTop={true}>Dow Industrials</BannerInfoText>
                    <BannerInfoText margin={false} mnTop={true}>0</BannerInfoText>
                    <Flex margin='15px 0 15px 0'>
                        <BannerInfoIncrease  margin={false}>0</BannerInfoIncrease> 
                        <BannerInfoIncrease  margin={true}>0</BannerInfoIncrease> 
                    </Flex>
                </Flex> */}
            </Flex>

            <BannerInfoLink to='/market'>Посмотреть всю рыночную активность</BannerInfoLink>
        </BannerInfoWrap>
    </BannerInfoS>
  )
}

export default BannerInfo