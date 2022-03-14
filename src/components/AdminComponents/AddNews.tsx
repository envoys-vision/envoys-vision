import axios from 'axios'
import React from 'react'
import { Container, Flex } from '../../uikit/uikit'
import { BannerBtn } from '../homeComponents/banner/BannerSC'
import { FromD, InputD, TextAreaD, TextD } from './AdminSC'

const AddNews:React.FC = () => {
    const [newsTitle, setNewsTitle] = React.useState('')
    const [newsText, setNewsText] = React.useState('')
    const [newsDate, setNewsDate] = React.useState('')

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


  return (
    <Container>
            <Flex style={{height: '60vh'}} align='center' justify='center' direction='column'>
                {error.length>0?<h3 style={{color: 'red'}}>{error}</h3>:<></>}
                <FromD onSubmit={e => addNews(e)}>
                    <TextAreaD
                        value={newsTitle}
                        placeholder='введите заголовок'
                        onChange={e => setNewsTitle(e.target.value)}
                    />
                    <TextAreaD
                        value={newsText}
                        placeholder='введите текст'
                        onChange={e => setNewsText(e.target.value)}
                    ></TextAreaD>
                    <InputD
                        value={newsDate}
                        type={'date'}
                        onChange={e => setNewsDate(e.target.value)}
                    />
                    <BannerBtn onSubmit={e => addNews(e)}>Сохранить</BannerBtn>
                </FromD>
            </Flex>
        </Container>
  )
}

export default AddNews