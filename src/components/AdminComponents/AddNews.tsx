import axios from 'axios'
import React from 'react'
import { Container, Flex } from '../../uikit/uikit'
import { BannerBtn } from '../homeComponents/banner/BannerSC'
import { FromD, InputD, AddNewsImg, AddNewsInput, AddNewsInputDate } from './AdminSC'
import img from '../../assets/adminImg.jpg'

const AddNews:React.FC = () => {
    const [newsTitle, setNewsTitle] = React.useState('')
    const [newsText, setNewsText] = React.useState('')
    const [newsDate, setNewsDate] = React.useState<any>()

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
                    alert('Новости загружены')
                    setNewsTitle('')
                    setNewsText('')
                    setNewsDate('')
                }).catch(err => setError(err))
        }
        
    }


  return (
        <Flex justify='space-between' align='center'>
            <Flex margin='0 30px' align='center' justify='center' direction='column' flex={1}>
                {error.length>0?<h3 style={{color: 'red'}}>{error}</h3>:<></>}
                <FromD onSubmit={e => addNews(e)} style={{width: '100%'}}>
                    <AddNewsInput
                        value={newsTitle}
                        placeholder='Введите заголовок'
                        onChange={e => setNewsTitle(e.target.value)}
                    />
                    <AddNewsInput
                        value={newsText}
                        placeholder='Введите текст'
                        onChange={e => setNewsText(e.target.value)}
                    ></AddNewsInput>
                    <AddNewsInputDate
                        value={newsDate}
                        type={'date'}
                        onChange={e => setNewsDate(e.target.value)}
                    />
                    {/* <BannerBtn onSubmit={e => addNews(e)}>Сохранить</BannerBtn> */}
                </FromD>
            </Flex>


            <AddNewsImg src={img}/>
        </Flex>
  )
}

export default AddNews