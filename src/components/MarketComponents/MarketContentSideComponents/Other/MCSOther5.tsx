import React from 'react'
import { SMText, SMTitle2, SMWrap, MarketVB } from '../MCSC'




const MCSOther5:React.FC = () => {
  return (
    <SMWrap>
        <SMTitle2 margin='0 0 50px 0'>Товарный сектор</SMTitle2>
        <SMTitle2 margin='0 0 20px 0'>Участники</SMTitle2>
        <ul style={{paddingLeft: '20px'}}>
            <li><SMText margin='10px 0'>Закупки итендеры (в том числе Государственные) на блокчейн технологии</SMText></li>
            <li><SMText margin='10px 0'>Выбор поставщика по рейтингу</SMText></li>
            <li><SMText margin='10px 0'>Прозрачные правила аукциона</SMText></li> 
            <li><SMText margin='10px 0'>Бесплатная публикация тендера</SMText></li> 
            <li><SMText margin='10px 0'>Чат между участниками сделки</SMText></li> 
            <li><SMText margin='10px 0'>Возможность для всех участвовать вторгах</SMText></li> 
            <li><SMText margin='10px 0'>Специализированная онлайн - площадка для закупок товаров</SMText></li> 
            <li><SMText margin='10px 0'>Все проведенные аукционы записываются в блокчейн</SMText></li> 
            <li><SMText margin='10px 0'>Уникальный параметризированный каталог товаров</SMText></li> 
            <li><SMText margin='10px 0'>Реальные рейтинги и отзывы участников</SMText></li> 
        </ul>

        <SMTitle2 margin='100px 0 20px 0'>преимущества</SMTitle2>
        <ul style={{paddingLeft: '20px'}}>
            <li><SMText margin='10px 0'>Кросс</SMText></li>
            <li><SMText margin='10px 0'>Безопасность</SMText></li> 
            <li><SMText margin='10px 0'>Площадка открывает доступ к проверенным поставщикам для проведения оптовых закупок продуктов питания по всему миру.</SMText></li> 
            <li><SMText margin='10px 0'>Аукцион</SMText></li>
            <li><SMText margin='10px 0'>После публикации предложения на закупку товара, поставщик сможет предложить свою ставку и в случае победы, оставить отзыв о проведенной сделке.</SMText></li> 
            <li><SMText margin='10px 0'>Рейтинг</SMText></li>
            <li><SMText margin='10px 0'>Участникам успешно завершенных сделок начисляются баллы, которые повышают ваш рейтинг в системе.</SMText></li> 
        </ul>

        <MarketVB style={{marginBottom: '40px'}} chois={false}>
            <h3>преимущества для государсва</h3>
            <ul style={{paddingLeft: '20px', listStyle: 'none'}}>
                <li><p>Прозрачность коммерческих операций в тендерах и закупках на блокчейн технологии</p></li> 
                <li><p>Расширение рынка сбыта продукции для фермеров и производителей</p></li> 
                <li><p>Выход на международные рынки</p></li> 
                <li><p>Создание конкурентной среды</p></li>
                <li><p>Аналитика цен в режиме реального времени</p></li> 
                <li><p>Развитие предпринимательства в аграрном секторе</p></li>
                <li><p>Контроль налоговых поступлений в бюджет</p></li> 
            </ul>

        </MarketVB>
 
        
    </SMWrap>
  )
}

export default MCSOther5