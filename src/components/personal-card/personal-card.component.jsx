import React from 'react'
import { TopTitle,Summary,SocialIcons } from './../collective-card/collective-card.styles'
import { CustomIcon } from './../customicon/custom-icon.component'

import { LinkedinLogo } from './../../images/social-icons/linkedin.png'
import { GithubLogo } from './../../images/social-icons/github.png'

const PersonalCard = () => {
    return (
        <>
            <TopTitle>Merhaba</TopTitle>
            <Summary>
                Kod yazmak ve bir uygulamayı hayata geçirene kadar geçen süre benim en büyük tutkum.Uygulama geliştirlme yolculuğumda
                güncel teknolojileri araştırmak ve bunları geliştirdiğim uygulamalarda kullanarak ilerliyorum.
            </Summary>
        </>
    )
}

export default PersonalCard