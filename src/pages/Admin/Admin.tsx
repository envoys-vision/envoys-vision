import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'

import Firebase from '../../fireBaseConfig/Config'
import axios from 'axios'
import { BannerBtn } from '../../components/homeComponents/banner/BannerSC'

const InputD = styled.input`
    margin: 10px 0;
    padding: 15px 0;
    width: 450px;
    text-align: center;
    outline: none; 
    border: none;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #ccc;
    font-size: 18px;

    ::placeholder{
        font-family: 'Exo 2';
        font-size: 18px;
    }
    :hover{
        box
    }
`

const FromD = styled.form`
    display: flex;
    flex-direction: column;
`

const TextD = styled(InputD)`
    padding: 10px 20px;
    outline: none;
    height: 350px;
`


const Admin:React.FC = () => {
    const [adminEmail, setAdminEmail] = React.useState('')
    const [adminPas, setAdminPas] = React.useState('')

    const [newsTitle, setNewsTitle] = React.useState('')
    const [newsText, setNewsText] = React.useState('')
    const [newsDate, setNewsDate] = React.useState('')


    const [signIn, setSignIn] = React.useState(false)
    const [error, setError] = React.useState('')
    

    function addNews(e:React.FormEvent){
        e.preventDefault()
        if(newsTitle.length <= 0) setError('Введите заголовок')
        if(newsText.length <= 0) setError('Введите текст')
        if(newsDate.length <= 0) setError('Введите дату')
        
        if(newsDate.length > 0 && newsText.length > 0 && newsTitle.length > 0){
            const newsPost = {
                title: newsTitle,
                text: newsText,
                date: newsDate
            }
            axios.post('https://envoys-vision-news-default-rtdb.firebaseio.com/news.json/', newsPost)
                .then(res => {
                    setNewsTitle('')
                    setNewsText('')
                    setNewsDate('')
                }).catch(err => setError(err))
        }
        
    }

    function signInHandler(e:React.FormEvent){
        e.preventDefault()
        
        const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZW52b3lzLXZpc2lvbi1uZXdzIiwiYXVkIjoiZW52b3lzLXZpc2lvbi1uZXdzIiwiYXV0aF90aW1lIjoxNjQ2OTk2Nzc4LCJ1c2VyX2lkIjoiMmwwZlk0R2dybVNSdmlTV1VXZE9xWFZUSkdyMiIsInN1YiI6IjJsMGZZNEdncm1TUnZpU1dVV2RPcVhWVEpHcjIiLCJpYXQiOjE2NDY5OTY3NzgsImV4cCI6MTY0NzAwMDM3OCwiZW1haWwiOiJiYWt5dHV1bHViZWtzdWx0YW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImJha3l0dXVsdWJla3N1bHRhbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OF1NwmUMXtxSFsfRk3o_ZbjxY-9lPIBVlRArUwC5H1smU0XRMLw9LxyrTL5A0vl9Gl29GORLsnxvIOZzozkdEd8b0yTGCwyhtgsVsD_4iHSfoyQi6xBDdw5VufexOxfRtvbjwDJZ0Qb9G2evvILr9f0G94IJI6hN-IBxqNF0ZHbs2VekXDylePi19pfvH_WGBW-3zsVvg5b9t1c_XaS5ly8Kz6cdDZfAU2T6V1jcpLZVaR2eBUCPiJywFey9RlCLZ9j1Drgdx6G_Eywz4AvImIDOKyY-WwsgY6D-o1KzhUOeQlvGhtRkJA14wwQUqjF0eEl8Updh1fATUQCvkOfTKw'
        Firebase.auth()
        .signInWithEmailAndPassword(adminEmail, adminPas)
            .then((res:any) => {
                console.log(res.user);
                setSignIn(true)    

                // if(res.user.user.accessToken === token){
                //     setSignIn(true)    
                //     setAdminEmail('')
                //     setAdminPas('')
                // }
            }).catch(err => {
                setError(String(err))
                console.log(String(err));
            }).finally(() => {
                setAdminPas('')
            })

    }


    if(signIn){
        return <Container>
            <Flex style={{height: '60vh'}} align='center' justify='center' direction='column'>
                {error.length>0?<h3 style={{color: 'red'}}>{error}</h3>:<></>}
                <FromD onSubmit={e => addNews(e)}>
                    <InputD
                        placeholder='введите заголовок'
                        type={'text'}
                        onChange={e => setNewsTitle(e.target.value)}
                    />
                    <TextD
                        placeholder='введите текст'
                        onChange={e => setNewsText(e.target.value)}
                    ></TextD>
                    <InputD
                        type={'date'}
                        onChange={e => setNewsDate(e.target.value)}
                    />
                    <BannerBtn onSubmit={e => addNews(e)}>Сохранить</BannerBtn>
                </FromD>
            </Flex>
        </Container>
    }

  return (
    <Container>
        <Flex style={{height: '60vh'}} align='center' justify='center' direction='column'>
            {error.length>0?<h3 style={{color: 'red'}}>{error}</h3>:<></>}
            <FromD action="#" onSubmit={e => signInHandler(e)}>
                <InputD type={'email'} placeholder={'Введите email'} onChange={e => setAdminEmail(e.target.value)}/>
                <InputD type={'password'} placeholder={'Введите пароль'}  onChange={e => setAdminPas(e.target.value)}/>
                <BannerBtn style={{marginTop: '20px', borderRadius: '5px', fontSize: '18px'}} onSubmit={(e) => signInHandler(e)}>Войти</BannerBtn>
            </FromD>
        </Flex>
    </Container>
  )
}

export default Admin