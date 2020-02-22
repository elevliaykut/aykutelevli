import React from 'react'
import { CollectiveTitle, PersonalityInfo, PersonalList, Item, BoldText } from './../collective-card/collective-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomIcon from './../customicon/custom-icon.component'
import SpotifyLogo from './../../images/social-icons/spotify.png'

const PersonalityCard = () => {
    return (
        <>
            <CollectiveTitle><CustomEmoji label='nature' emoji='💫'></CustomEmoji> Kişisel </CollectiveTitle>
            <PersonalityInfo>
                "İnsanlar tutkulu oldukları şeyin peşinden gitmeli. Bu onları dünyadaki her
                şeyden daha fazla mutlu eder."    --Elun Musk
            </PersonalityInfo>
            <PersonalList>
                <Item>
                    <BoldText>
                        Hobiler:
                    </BoldText>
                    Podcast dinelemek,spor yapmak,yeni yerler keşfetmek...
                <CustomIcon 
                    targetUrl='https://open.spotify.com/user/3cv5rjgfbz1n87og5bnahdva3'
                    imageSource={SpotifyLogo}
                    altDescription='spotify'
                    style={{ width:'27px', verticalAlign: 'middle', marginleft: '5px' }}
                />
                </Item>
            </PersonalList>
        </>
    )
}

export default PersonalityCard