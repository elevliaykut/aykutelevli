import React from 'react'
import { FooterDiv } from './footer.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const Footer = () => {
    return(
        <>
            <FooterDiv>
                2021 - <strong>Aykut ELEVLİ</strong>
                <br/>hi@aykutelevli.me <CustomEmoji label='mail' emoji='📮'></CustomEmoji>
            </FooterDiv>
        </>
    )
}

export default Footer