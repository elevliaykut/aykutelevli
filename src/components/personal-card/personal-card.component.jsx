import React from 'react'
import { TopTitle,Summary,SocialIcons} from './../collective-card/collective-card.styles'
import  CustomIcon  from './../customicon/custom-icon.component'

import  LinkedinLogo  from './../../images/social-icons/linkedin.png'
import  GithubLogo  from './../../images/social-icons/github.png'
import InstagramLogo from './../../images/social-icons/instagram.png'

const PersonalCard = () => {
    return (
        <>
            <TopTitle>Merhaba, Ben Aykut</TopTitle>
            <Summary>
                Kod yazmak ve bir uygulamayı hayata geçirene kadar geçen süre benim en büyük tutkum.Uygulama geliştirme yolculuğumda
                güncel teknolojileri araştırarak ve bunları geliştirdiğim uygulamalarda kullanarak ilerliyorum.
            </Summary>
            <SocialIcons>
                <CustomIcon
                    targetUrl='https://www.linkedin.com/in/aykut-elevli/'
					imageSource={LinkedinLogo}
					altDescription='linkedin' />
                <CustomIcon
                    targetUrl='https://github.com/elevliaykut'
					imageSource={GithubLogo}
					altDescription='github' />
            </SocialIcons>
        </>
    )
}

export default PersonalCard