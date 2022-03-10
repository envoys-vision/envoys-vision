import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'

import Firebase from '../../fireBaseConfig/Config'
import axios from 'axios'

const InputD = styled.input`
    margin: 10px 0;
    padding: 10px 20px;
    outline: none; 
`

const FromD = styled.form`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
`

const BtnD = styled.button`
    padding: 10px 20px;
    outline: none;
    /* width: 100%; */

`


const Admin:React.FC = () => {
    const [adminEmail, setAdminEmail] = React.useState('')
    const [adminPas, setAdminPas] = React.useState('')

    const [newsTitle, setNewsTitle] = React.useState('')
    const [newsText, setNewsText] = React.useState('')
    const [newsDate, setNewsDate] = React.useState('')


    const [signIn, setSignIn] = React.useState(false)

    const [error, setError] = React.useState('')

    React.useEffect(() => {
        // Firebase.auth()
        // .signInWithEmailAndPassword('bakytuulubeksultan@gmail.com', 'envoysb12')
        //     .then(res => {
        //         console.log(res); 
        //         setSignIn(true)     
        //     }).catch(err => {
        //         setError(err)
        //     })
    }, [])
    

    function addNews(e:React.FormEvent){
        // e.preventDefault()
        // if(newsTitle.length <= 0) setError('Введите заголовок')
        // if(newsText.length <= 0) setError('Введите текст')
        // if(newsDate.length <= 0) setError('Введите дату')
        // console.log('clicked');
        
        // if(newsDate.length > 0 && newsText.length > 0 && newsTitle.length > 0){
        //     let newsPost = {
        //         title: newsTitle,
        //         text: newsText,
        //         date: newsDate
        //     }
        //     // axios.get()
            
        //     console.log(newsPost);
        //     axios.post('https://envoys-vision-news-default-rtdb.firebaseio.com/news', newsPost)
        //         .then(res => {
        //             console.log(res);  
        //         }).catch(err => {
        //             console.log(err);
        //         })

        //     console.log(newsDate);
        // }
        
    }


    if(signIn){
        return <Container>
            <Flex style={{height: '60vh'}} align='center' justify='center' direction='column'>
                {error.length>0?<h3>{error}</h3>:<></>}

                <FromD onSubmit={e => addNews(e)}>
                    <InputD
                        placeholder='введите заголовок'
                        type={'text'}
                        onChange={e => setNewsTitle(e.target.value)}
                    />
                    <textarea
                        cols="30" rows="10"
                        placeholder='введите текст'
                        onChange={e => setNewsText(e.target.value)}
                    ></textarea>
                    <InputD
                        type={'date'}
                        onChange={e => setNewsDate(e.target.value)}
                    />
                    <BtnD onSubmit={e => addNews(e)}>Сохранить</BtnD>
                </FromD>
            </Flex>
        </Container>
    }

  return (
    <Container>
        <Flex style={{height: '60vh'}} align='center' justify='center' direction='column'>
            {error.length>0?<h3>{error}</h3>:<></>}
            <FromD action="#" onSubmit={e => e.preventDefault()}>
                <InputD type={'email'} placeholder={'Введите email'} onChange={e => setAdminEmail(e.target.value)}/>
                <InputD type={'password'} placeholder={'Введите пароль'}  onChange={e => setAdminPas(e.target.value)}/>
                <BtnD>Войти</BtnD>
            </FromD>
        </Flex>
    </Container>
  )
}

export default Admin