import React from 'react'
import styled from 'styled-components'
import Almaz from '../../../assets/Almaz.jpg'
import { Flex } from '../../../uikit/uikit'
import lin from '../../../assets/LinkedIn.svg'
import tw from '../../../assets/twitter.svg'
import git from '../../../assets/git.svg'

const AdminSideWrap = styled.div`
    flex: 1;
    background: #fff;
    border-radius: 10px;
    max-width: 500px;
    margin: 50px 0 30px 30px;
    text-align: center;
    max-height: 660px;
    @media(max-width: 760px){
        margin: 50px 0;
    }
`

const AdminSideImg = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0;
`

const AdminTitle = styled.h3`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #222222;
    margin: 42px 0 10px 0;
    padding: 0 10px;
`

const AdminText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #222222;
    padding: 0 10px;
`

const AdminIcon = styled.img`
    width: 30px;
    margin: 0 20px 0 0;
    @media(max-width: 760px){
        padding: 0 0 20px;
    }
    ::first-child{
        margin: 0;
    }
` 


const  AdminSide:React.FC = () => {
  return (
    <AdminSideWrap>
        <Flex direction='column' align='center'>
            <AdminSideImg src={Almaz}/>
            <AdminTitle>Алмазбек Шабданов</AdminTitle>
            <AdminText>Председатель правления универсальной цифровой биржи</AdminText>
            <Flex align='center' margin='30px 0 0'>
                <AdminIcon src={lin}/>
                <AdminIcon src={tw}/>
                <AdminIcon src={git}/>
            </Flex>
        </Flex>
    </AdminSideWrap>
  )
}

export default AdminSide