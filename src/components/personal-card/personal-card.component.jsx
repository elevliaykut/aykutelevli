import React from 'react'
import {
    MainContainer,
    TopTitle,
    ImageContainer,
    Summary,
    SocialIcons,
    Snippet
} from './../collective-card/collective-card.styles'
import CustomIcon from './../customicon/custom-icon.component'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import LinkedinLogo from './../../images/social-icons/linkedin.png'
import GithubLogo from './../../images/social-icons/github.png'
import MediumLogo from './../../images/social-icons/medium.png'
import ProfilePicture from './../../images/profile.png'

const PersonalCard = () => {
    return (
        <>
            <MainContainer>
                <div>
                    <TopTitle>Merhaba, Ben Aykut.</TopTitle>
                    <Snippet>Full Stack Developer @ Kamion <CustomEmoji label='computer' emoji='💻' /></Snippet>
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
                        <CustomIcon
                            targetUrl='https://medium.com/@elevli.aykut.28'
                            imageSource={MediumLogo}
                            altDescription='medium' />

                    </SocialIcons>
                </div>
                <ImageContainer>
                    <img src={ProfilePicture} alt='profile' className={styles.profilepicture}/>
                </ImageContainer>
            </MainContainer>
        </>
    )
}

export default PersonalCard