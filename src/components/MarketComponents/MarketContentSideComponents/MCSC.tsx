import styled from 'styled-components'
import { Flex } from '../../../uikit/uikit';
import bg1 from '../../../assets/marketBg.jpg'
import bg2 from '../../../assets/marketBg2.jpg'

export const SMWrap = styled.div`
  flex: 1;
  word-wrap: break-word;
`

type StyleProps = {
  margin?: string | '0';
}

export const SMTitle = styled.h3<StyleProps>`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.02em;
  max-width: 460px;
  text-transform: uppercase;
  color: #045599;
  word-wrap: break-word;
  margin: ${props => props.margin};
  @media(max-width: 400px){
    max-width: 275px !important;
  }
`

export const SMPreTtile = styled.h3<StyleProps>`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #3F3F3F;
  margin: ${props => props.margin};
  max-width: 460px;
  span{
    color: #F47F1F;
  }
`


export const SMPreText = styled.p<StyleProps>`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #3F3F3F;
  max-width: 460px;
  margin: ${props => props.margin};
`

export const SMText = styled.p<StyleProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #3F3F3F;
  max-width: 460px;
  margin: ${props => props.margin};
`

export const SMHFlex = styled(Flex)`
  @media(max-width: 1100px){
    flex-direction: column;
    align-items: flex-start;
    p:nth-child(2){
      margin: 10px 0;
    }
  }
`

export const SMImg = styled.img`
  width: 100%;  
  margin: 0 0 0 30px;
  flex: 1;
  @media(max-width: 1100px){
    margin: 20px 0;
  }
`

export const SMBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  p{
    max-width: 350px;
  }
  @media(max-width: 1322px){
    justify-content: flex-start;
    img{
      margin: 30px 0 0;
    }
  }
  @media(max-width: 400px){
    p{
      max-width: 260px;
    }
  }
`

export const SMBlock = styled.img`
  margin: 0 20px;
  max-width: 250px;
`

export const SMTitle2 = styled(SMTitle)`
  max-width: 700px;
`

export const SMExample = styled(Flex)`
  h3:nth-child(2){
    max-width: 700px;
  }
  p{
    max-width: 700px;
  }
`







export const OtherGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0 0 50px;
  @media(max-width: 644px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 400px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const OtherGridItem = styled.li`
  max-width: 270px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #333; */
  `

export const OtherGridImg = styled.img`
  width: 24px;
  `
export const OtherGridText = styled.p`
  margin: 5px 0 0;
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #045599;
  max-width: 125px;
  text-align: center;
  `

export const OtherPB = styled.div`
  background: #3F3F3F;
  border-radius: 10px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding: 0 15px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`

export const OtherPMBWrap = styled.ul`
  list-style: none;
  display: grid;
  padding: 10px 0 0;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 20px;
  /* display: flex;
  justify-content: space-between; */
  @media(max-width: 650px){
    grid-template-columns: repeat(2, 1fr);
    li{
      margin: 0 !important;
    }
  }
`

export const OtherPMB = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    max-width: 150px;
    height: 80px;
    margin: 0 10px;
    background: #4478BB;
    border-radius: 10px;
    flex: 1;
    margin: 10px 8px 0;
    :nth-child(1){
    margin: 10px 9px 0 0;
    }
    :nth-child(4){
    margin: 10px 0 0 8px;
    }
    :nth-child(odd){
    background: #F47F1F;
    }
    span{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    padding: 0 10px;
    }
`




type BgProps = {
    chois: boolean;
}
export const MarketVB = styled.div<BgProps>`
    margin: 70px 0 0;
    background: url(${props => props.chois?bg1:bg2}) 0 0 / cover;
    padding: 40px;
    h3{
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 40px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #FFFFFF;
        margin: 0 0 20px;
        @media(max-width: 400px){
            font-size: 24px;
        }
    }

    li{
        margin: 10px 0;
        display: flex;
        align-items: center;
        :before{
            content: "•";
            color: #fff;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
    }

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        @media(max-width: 400px){
            font-size: 16px;
        }
    }
`

