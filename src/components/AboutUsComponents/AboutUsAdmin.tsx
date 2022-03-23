import React from 'react'
import styled from 'styled-components'
import bg from '../../assets/AboutUSBg.jpg'
import { Container, Flex } from '../../uikit/uikit'
import AdminSide from './AboutUsAdmin/AdminSide'

const AdminWrap = styled.div`
    background: url(${bg}) 0 0 / cover;
`

const AdminTitle = styled.h3`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 35px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 0 0 30px;
    `

type PropsText = {
    showMarker?: boolean;
}

const AdminText = styled.p<PropsText>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    span{
        color: #F47F1F;
    }
    @media(max-width: 420px){
      font-size: 16px;
    }
    ${props => props.showMarker?
    `
    margin: 10px 0;
    :before {
        content: "•"; 
        color: #fff;
        font-weight: bold; 
        display: inline-block; 
        width: 1em;
        /* font-size: 20px; */
        margin-left: -1em;
    }`:''
}
` 

const AdminPreTitle = styled.h5`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 40px 0 50px;
`


const AdminPreText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    @media(max-width: 420px){
      font-size: 14px;
    }
`

type PropsAdminWrap = {
    padding?: string | 0; 
}

const AdminWrapBlure = styled.div<PropsAdminWrap>`
    padding: ${props => props.padding};
    background: rgba(4, 85, 153, 0.2);
    backdrop-filter: blur(20px);
    height: auto;
    flex: 1;

    @media(max-width: 760px){
        :nth-child(2){
            padding: 20px;
        }
    }
`

const AdminTop = styled(Flex)`
    @media(max-width: 760px){
        flex-direction: column;
        align-items: center;
    }
`

const AboutUsAdmin:React.FC = () => {
  return (
    <AdminWrap>
        <Container>
            <AdminTop>
                <AdminWrapBlure padding='195px 20px'>
                    <AdminTitle>Алмазбек Шабданов</AdminTitle>
                    <AdminText>Председатель правления универсальной цифровой биржи Envoys Vision Digital Exchange имеет богатый опыт работы на рынке ценных бумаг.</AdminText>
                    <AdminPreTitle>Образование:</AdminPreTitle>
                    <AdminPreText>
                        Основное направление «Факультет экономики», Дополнительное направление «Финансы и кредит».
                    </AdminPreText>
                </AdminWrapBlure>
    
                <AdminSide/>
            </AdminTop>

            <AdminWrapBlure padding='50px 80px'>
                <AdminText showMarker>
                    <span>2011 год</span> - Сертификат аудитора Госфиннадзора КР
                </AdminText>
                <AdminText showMarker>
                    <span>2008 - 2012 годы</span> - работал в Госфиннадзоре КР, в отделе развития ценных бумаг.
                </AdminText>
                <AdminText showMarker>
                    <span>2012 - 2014 годы</span> - брокер Кыргызской фондовой биржи.
                </AdminText>
                <AdminText showMarker>
                    <span> 2018 год </span> - Сертификат на ведение деятельности брокера и дилера управления инвестиционными активами государственной службы регулирования и надзора за финансовым рынком при правительстве Кыргызской Республики.
                </AdminText>
                <AdminText showMarker>
                    <span>2015 - 2019 годы</span> - член совета директоров <span>КФБ</span>.
                </AdminText>
                <AdminText showMarker>
                    <span>2020 год</span> - президент <span>ЗАО «КФБ».</span>
                </AdminText>
                <AdminText showMarker>
                    <span>2021 год  </span> - Председатель правления <span>ОАО "ЕВДЭ"</span>
                </AdminText>
            </AdminWrapBlure>
        </Container>
    </AdminWrap>
  )
}

export default AboutUsAdmin