import React from "react";
import { Container, Flex } from "../../../uikit/uikit";
import BannerInfo from "../bannerInfo/BannerInfo";
import HeaderSwiper from "../headerSwiper/HeaderSwiper";
import { BannerBtn, BannerFlex, BannerInfoTexts, BannerText, BannerWrap } from "./BannerSC";
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {
    swiperValues: any
}

const Banner:React.FC<Props> = (props) => {
    const {t} = useTranslation()

    const nav = useNavigate()
    return (
        <BannerWrap>

            <HeaderSwiper swiperValues={props.swiperValues}/>

            <Container>
                <BannerFlex align="center" justify="space-around" margin='50px 0 0 0'>
                    <BannerInfoTexts align="flex-start" direction="column">
                        <BannerText>{t("home.homeTitle")}</BannerText>
                        <BannerBtn onClick={() => nav('/newspage')}>{t("home.button")}</BannerBtn>
                    </BannerInfoTexts>

                    <BannerInfo/>
                </BannerFlex>
            </Container>
        </BannerWrap>
    )
}

export default Banner