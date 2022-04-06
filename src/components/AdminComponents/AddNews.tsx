import axios from 'axios'
import React, { useState } from 'react'
import { Container, Flex } from '../../uikit/uikit'
import { BannerBtn } from '../homeComponents/banner/BannerSC'
import { FromD, InputD, AddNewsImg, AddNewsInput, AddNewsInputDate } from './AdminSC'
import img from '../../assets/adminImg.jpg'
import firebase, {auth, storage} from '../../fireBaseConfig/Config'
import { getStorage, ref, uploadBytes } from "firebase/storage";

const AddNews:React.FC = () => {
    const [newsTitle, setNewsTitle] = React.useState('')
    const [newsText, setNewsText] = React.useState('')
    const [newsLink, setNewsLink] = React.useState('')
    const [newsDate, setNewsDate] = React.useState<any>('')
    
    const [progress, setProgress] = useState(0)

    const [newsImg, setNewsImg] = React.useState('')

    const [error, setError] = React.useState('')

    function addNews(e:React.FormEvent){
        e.preventDefault()
        if(newsTitle.replace(/ +/g, ' ').trim().length === 0) setError('Введите заголовок')
        if(newsText.replace(/ +/g, ' ').trim().length === 0) setError('Введите текст')
        if(newsDate.replace(/ +/g, ' ').trim().length === 0) setError('Введите дату')
        if(newsLink.replace(/ +/g, ' ').trim().length === 0) setError('Введите ссылку')      

        
        
        if(newsDate.length > 0 && newsText.length > 0 && newsTitle.length > 0){
            const newsPost = {
                title: newsTitle,
                text: newsText,
                link: newsLink,
                date: newsDate
            } 
            auth.onAuthStateChanged(user => {
                if(user){
                    const fileName = newsImg.name 
                    const storageRef = firebase.storage().ref('news/'+fileName)
                    const uploadTask = storageRef.put(newsImg)
                    uploadTask.on('state_changed', 
                    (snapshot) => {
                        const progress1 = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                        setProgress(progress1)
                    },() => {
                        uploadTask.snapshot.ref.getDownloadURL()
                        .then(fileUrl => console.log(fileUrl))
                    })
                    axios.post('https://envoys-vision-news-default-rtdb.firebaseio.com/news.json/', newsPost)
                        .then(res => {
                            alert('Новости загружены')
                            setNewsTitle('')
                            setNewsText('')
                            setNewsLink('')
                            setNewsDate('')
                            setNewsImg('')
                            setProgress(0)
                        }).catch(err => setError(err))
                }
            })

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
                    <InputD
                        type={'file'}
                        // value={newsText}
                        // placeholder='Выберите картинку'
                        onChange={e => setNewsImg(e.target.files[0])}
                        
                    />
                    <div style={{width: '100%'}}>
                        <div style={{width: progress+'%', height: '3px', background: '#F47F1F'}}></div>
                    </div>
                    <AddNewsInput
                        value={newsText}
                        placeholder='Введите текст'
                        onChange={e => setNewsText(e.target.value)}
                    />
                    <AddNewsInput
                        value={newsLink}
                        placeholder='Введите ссылку'
                        onChange={e => setNewsLink(e.target.value)}
                    />
                    <AddNewsInputDate
                        value={newsDate}
                        type={'date'}
                        onChange={e => setNewsDate(e.target.value)}
                    />
                    <BannerBtn onSubmit={e => addNews(e)}>Сохранить</BannerBtn>
                </FromD>
            </Flex>


            <AddNewsImg src={img}/>
        </Flex>
  )
}

export default AddNews