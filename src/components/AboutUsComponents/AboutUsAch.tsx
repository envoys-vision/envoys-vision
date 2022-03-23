import React from 'react'
import { Container, Flex } from '../../uikit/uikit'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { Autoplay} from "swiper";



const AchSlideLine = styled.div`
  width: 100%;
  background: #4478BB;
  height: 2px;
  position: absolute;
  top: 100px;
  left: 0;
`

const AchSlideItem = styled.div`
  background: #fff;
  width: 200px;
  left: -25px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #4478BB;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 45px;
    letter-spacing: 0.02em;
    color: #F47F1F;
  }
`

const AchSlideInfo = styled.p`
  margin: 40px 0 0 0;
  max-width:  260px;
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #045599;
`

const AboutUsAch = () => {
  return (
    <Flex margin='100px 0'>
      <Swiper
        spaceBetween={0}
        // slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false
      }}
      // speed={1000}
      loop
      modules={[Autoplay ]}
      breakpoints= {{
        320: {
            slidesPerView: 1,
        },
        670: {
            slidesPerView: 2,
        },
        940: {
            slidesPerView: 3,
        }
      }}
      >
        <SwiperSlide>
          <Flex align='center' direction='column'>
            <AchSlideLine></AchSlideLine>
            <AchSlideItem><span>Апрель 2021 г. </span></AchSlideItem>
            <AchSlideInfo>Государственная регистрация</AchSlideInfo>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex align='center' direction='column'>
            <AchSlideLine></AchSlideLine>
            <AchSlideItem><span>Август 2021 г. </span></AchSlideItem>
            <AchSlideInfo>Получение лицензий на депозитарную деятельность и организатора торгов на рынке ценных бумаг</AchSlideInfo>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex align='center' direction='column'>
            <AchSlideLine></AchSlideLine>
            <AchSlideItem><span>Сентябрь 2021 г. </span></AchSlideItem>
            <AchSlideInfo>Сентябрь 2021 г. - запуск и проведение тестирования биржевой платформы</AchSlideInfo>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}

export default AboutUsAch