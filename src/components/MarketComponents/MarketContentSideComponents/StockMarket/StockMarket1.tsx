import React from 'react'
import styled from 'styled-components' 
import { Flex } from '../../../../uikit/uikit';
import market1 from '../../../../assets/market1.jpg' 
import market2 from '../../../../assets/market2.jpg' 
import marketB1 from '../../../../assets/marketBlock1.svg' 
import marketB2 from '../../../../assets/marketBlock2.svg' 
import marketB3 from '../../../../assets/marketBlock3.svg' 
import { SMHFlex, SMPreTtile, SMText, SMTitle, SMWrap, SMPreText, SMImg, SMTitle2, SMBlock, SMBlocks, SMExample } from '../MCSC';


const StockMarket1:React.FC = () => {
  return (
    <SMWrap>
        <SMTitle>токенизированные активы </SMTitle>

        <SMHFlex margin='20px 0 0 0' justify='space-between'>
          <Flex direction='column' style={{maxWidth: '350px'}} flexWrap='wrap'>
            <SMPreTtile>Местные и иностранные ЦБ Государственные ценные бумаги</SMPreTtile>
            <SMText margin='10px 0 0'>STO — это более быстрый и дешевый аналог IPO. Расходы на листинг уменьшаются за счет отсутствия необходимости вовлекать посредников наподобие инвестиционных банков. Процедуры аудита и андеррайтинга для блокчейн-проектов также проще. А участвовать в STO может практически любой частный инвестор</SMText>
          </Flex>
          <SMPreText style={{maxWidth: '350px'}} margin='0 0 0 20px'>Токенизация — создание записи, удостоверяющей объем прав на объект материального мира (в процессе которого выпускают токен). Токен регистрируют с помощью технологии распределенного реестра.
          </SMPreText>
        </SMHFlex>
        
        <SMHFlex justify='space-between' margin='100px 0 0 0'>
          <Flex direction='column' flex={1}>
            <SMTitle>местные и иностранные ЦБ</SMTitle>
            <SMPreTtile margin='30px 0 20px 0'><span>Секторы на ЦБ:</span></SMPreTtile>
            <ul style={{paddingLeft: '20px'}}>
              <li><SMText>Акции</SMText></li>
              <li><SMText>Блю чипс действующих компаний</SMText></li>
              <li><SMText>Горный сектор</SMText></li>
            </ul>
          </Flex>
          <SMImg src={market1}/>
        </SMHFlex>
        
        <SMHFlex justify='space-between' margin='50px 0 0 0'>
          <SMImg src={market2} style={{margin: '0 30px 0 0'}}/>
          <Flex direction='column' flex={1}>
            <SMTitle>местные и иностранные ЦБ</SMTitle>
            <SMPreTtile margin='30px 0 20px 0'><span>стартап сектор:</span></SMPreTtile>
            <ul style={{paddingLeft: '20px'}}>
              <li><SMText>Облигации</SMText></li>
              <li><SMText>Для компаний, которым нужен займ</SMText></li>
              <li><SMText>Для компаний, которым нужен займ</SMText></li>
            </ul>
          </Flex>
        </SMHFlex>

        <Flex direction='column' margin='100px 0'>
          <SMTitle2>токенизирование иностранных акций</SMTitle2>
          <SMText margin='20px 0' style={{maxWidth: '700px'}}>
            Токенизированные акции — это цифровые токены акций, которые торгуются на традиционных фондовых биржах. Стоимость токенизированных акций привязана к стоимости соответствующих базовых акций. Возьмем для примера акции Apple inc.
          </SMText>
          <SMText margin='20px 0' style={{maxWidth: '700px'}}>
            Если стоимость акции Apple вырастит, то соответствующим образом вырастет и стоимость токенизированных акций. При падении стоимости акций Apple, стоимость токенизированных акций также будет снижаться.
          </SMText>
          <SMText margin='20px 0' style={{maxWidth: '700px'}}>
            Токены созданны на базе залога акций, хранящегося в Депозитарии. Следовательно, каждая токенизированная акция представляет собой долю в соответствующей компании, прошедшей листинг.
          </SMText>
          <SMText margin='20px 0' style={{maxWidth: '700px'}}>
            Владение токенизированными акциями не передает вам никаких прав акционеров. Вы лишь участвуете в экономическом развитии базового актива, включая выплату дивидендов (если она предусмотрена).
          </SMText>
        </Flex>

        <Flex direction='column' margin='100px 0'>
          <SMTitle2 margin='0 0 60px'>токенизирование иностранных акций</SMTitle2>
            <SMBlocks>
              <Flex direction='column'>
                <SMBlock src={marketB1}/>
                <SMText margin='40px 0 0'>
                  Блокчейн выступает в роли регистратора
                </SMText>
                <SMText>
                  Юридическое и бенефициарное право собственности переносится в блокчейн
                </SMText>
              </Flex>
              <Flex direction='column'>
                <SMBlock src={marketB2}/>
                <SMText margin='40px 0 0'>
                  Смарт контракты заменяют платежных агентов
                </SMText>
                <SMText>
                  Кастодиан поддерживает связь между блокчейн и реальным миром
                </SMText>
              </Flex>
              <Flex direction='column'>
                <SMBlock src={marketB3}/>
                <SMText margin='40px 0 0'>
                  Запись операций в распределенном реестре
                </SMText>
                <SMText>
                  Рассчеты и клиринг в сети блокчейн
                </SMText>
              </Flex>
            </SMBlocks>
        </Flex>

        <SMExample direction='column' margin='0 0 100px 0'>
          <SMTitle2 margin='0 0 30px'>Возьмем для примера золотодобывающую компанию ОАО “Майнинг”</SMTitle2>
          <SMPreTtile margin='30px 0 20px'><span>Для выпуска токенизированных акций, и последующего привлечения инвесторов путем STO:</span></SMPreTtile>

          <SMText margin='10px 0'>1. Акционеры ОАО принимают соответствующее решение   на ГОСА;</SMText>
          <SMText margin='10px 0'>2. Передают в Депозитарий какую-то часть акций ОАО по договору о залоге для последующей их оцифровки (могут быть переданы акции дополнительной эмиссии, либо часть акций уже принадлежащих акционерам).</SMText>
          <SMText margin='10px 0'>3. Вместо замороженных акций, в оборот выпускаются цифровые токены, которые будут подтверждать ее держателю те же права, что и акция.</SMText>
          <SMText margin='10px 0'>4. Выпущенные токены размещаются среди инвесторов в торговую системе цифровой биржи.</SMText>
        </SMExample>

    </SMWrap>
  )
}

export default StockMarket1