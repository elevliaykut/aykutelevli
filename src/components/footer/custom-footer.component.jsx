import React from 'react'
import { FooterDiv } from './footer.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const Footer = () => {
    return(
        <>
            <FooterDiv>
                2020 - <strong>Aykut Elevli</strong>
                <br/>aykut@aykutelevli.me <CustomEmoji label='mail' emoji='📮'></CustomEmoji>
            </FooterDiv>
        </>
    )
}

export default Footer