import React from 'react'
import { Flex } from '../../../../uikit/uikit'
import { SMHFlex, SMText, SMTitle2, SMWrap, SMPreTtile, SMPreText, MarketVB } from '../MCSC'

const MCSOther2:React.FC = () => {
  return (
    <SMWrap>
        <SMTitle2 margin='0 0 50px 0'>Валютные сделки</SMTitle2>

        <SMHFlex margin='20px 0 0 0' justify='space-between'>
            <Flex direction='column' style={{maxWidth: '350px'}}>
                <SMPreTtile><span>Сделки «спот»</span></SMPreTtile>
                <ul style={{paddingLeft: '20px', margin: '20px 0'}}>
                    <li><SMText>Валюта – Американские доллары</SMText></li>
                    <li><SMText>Кросс-курсы</SMText></li> 
                </ul>
                <SMPreTtile><span>Форварды «аутрайт»</span></SMPreTtile>
            </Flex>
            <Flex direction='column' style={{maxWidth: '350px'}}>
                <SMPreTtile><span>Деривативы</span></SMPreTtile>
                <SMPreTtile margin='20px 0'><span style={{color: '#045599'}}>Синтетические соглашения по валютному обмену (SAFE8)</span></SMPreTtile>
                <ul style={{paddingLeft: '20px'}}>
                    <li><SMText>Валютные фьючерс 5</SMText></li>
                    <li><SMText>Валютно-процентные своп 5</SMText></li> 
                    <li><SMText>Валютные опционы</SMText></li> 
                </ul>
            </Flex>
        </SMHFlex>

        <Flex direction='column' margin='50px 0 0'> 
            <SMTitle2 margin='0 0 20px 0'>Участники</SMTitle2>
            <ul style={{paddingLeft: '20px'}}>
                <li><SMPreText>Обменки-прозрачность и реальные объем</SMPreText></li>
                <li><SMPreText>Юридические лица - выгода и хеджирование</SMPreText></li> 
                <li><SMPreText>Банки</SMPreText></li>
                <li><SMPreText>Международные единые стаканы</SMPreText></li> 
            </ul>
        </Flex>

        <MarketVB chois={true}>
            <h3>участники валютного рынка</h3>
            <ul style={{paddingLeft: '20px', listStyle: 'none'}}>
                <li><p>Валютные биржи</p></li> 
                <li><p>Центральные банки</p></li> 
                <li><p>Финансовые организации</p></li>
                <li><p>Брокеры</p></li> 
                <li><p>Физические лица</p></li>
                <li><p>Международные валютно-кредитные и финансовые организации</p></li> 
            </ul>
        </MarketVB>

        <Flex direction='column' margin='50px 0 0'>
            <SMTitle2 margin='0 0 20px 0' style={{maxWidth: '100%'}}>Учасвыгоды для корпораций на валютном рынкетники</SMTitle2>
            <ul style={{paddingLeft: '20px'}}>
                <li><SMPreText>Более выгодные ценовые условия по валютному курсу по сравнению с сегментом БанкКорпорат (экономия банковской маржи, возможность получения дополнительного спреда биржевого стакана): Для конверсионных сделок ТOD, TOM, SPOT  </SMPreText></li> 
                <li><SMPreText>Для валютных свопов (своп-разницы) транспарентность и рыночность ценообразования (отсутствие проскальзывания)</SMPreText></li> 
                <li><SMPreText>Снятие кредитных рисков на контрагентов (банки и др. корпораты) за счет расчетов через Центрального Контрагента (ЦК) </SMPreText></li>
                <li><SMPreText>Возможность заключать сделки </SMPreText></li> 
                <li>
                    <SMPreText>Максимальная операционная эффективность и надежность: </SMPreText>
                    <ul style={{paddingLeft: '20px'}}>
                        <li><SMText>Online торговля, заключение сделки «в один клик»</SMText></li>
                        <li><SMText>Удобный электронный документооборот при расчетах </SMText></li>
                        <li><SMText>Стандартно обрабатываемые отчеты </SMText></li> 
                        <li><SMText>Использование мультивалютного обеспечения в расчетах, единое обеспечение и неттинг по всем инструментам валютного рынка</SMText></li>  
                    </ul>
                </li>
                <li><SMPreText>Возможность проведения валютных конверсий в нерабочие дни</SMPreText></li> 
            </ul>
        </Flex>

    </SMWrap>
  )
}

export default MCSOther2