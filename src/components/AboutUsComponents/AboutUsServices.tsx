import React from 'react'
import styled from 'styled-components'
import bg from '../../assets/AboutUs/servicesbg.jpg'
import icon1 from '../../assets/AboutUs/Frame1.svg'
import icon2 from '../../assets/AboutUs/Frame2.svg'
import icon3 from '../../assets/AboutUs/Frame3.svg'
import icon4 from '../../assets/AboutUs/Frame4.svg'
import icon5 from '../../assets/AboutUs/Frame5.svg'
import icon6 from '../../assets/AboutUs/Frame6.svg'
import { Container } from '../../uikit/uikit'



const ServiceWrap = styled.div`
  background: url(${bg}) 0 0 /cover;
  padding: 90px 0;
  margin: 0 0 100px 0;
`
const ServiceTitle = styled.h1`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  width: 100%;
  margin: 0 0 60px;
  @media(max-width: 420px){
      font-size: 24px;
    }
` 
const ServiceGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media(max-width: 820px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 618px){
    grid-template-columns: repeat(1, 1fr);
  }
`
const ServiceCard = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.28);
`

const ServiceCardTitle = styled.h3`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  @media(max-width: 420px){
      font-size: 18px;
    }
`
const ServiceIcon = styled.img`
  width: 40px;
`


const AboutUsServices:React.FC = () => {
  return (
    <ServiceWrap>
      <Container>
        <ServiceTitle>
          Универсальная фондовая биржа ЕВДЭ - это <br /> 
          Спектр услуг подходит как для юридических лиц, так и для физических лиц.
        </ServiceTitle>
        <ServiceGrid>
          <ServiceCard>
            <ServiceIcon src={icon1}/>
            <ServiceCardTitle>Токенизированные Активы</ServiceCardTitle>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={icon2}/>
            <ServiceCardTitle>Криптовалюты</ServiceCardTitle>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={icon3}/>
            <ServiceCardTitle>Недвижимость</ServiceCardTitle>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={icon4}/>
            <ServiceCardTitle>Валютный рынок</ServiceCardTitle>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={icon5}/>
            <ServiceCardTitle>Рынок Драгоценных Металлов</ServiceCardTitle>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={icon6}/>
            <ServiceCardTitle>Товарный Сектор</ServiceCardTitle>
          </ServiceCard>
        </ServiceGrid>
      </Container>
    </ServiceWrap>
  )
}

export default AboutUsServices