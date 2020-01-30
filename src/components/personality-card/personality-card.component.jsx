import React from 'react'

import { CollectiveTitle, PersonalityInfo, PersonalList, Item, BoldText } from './../collective-card/collective-card.styles'


const PersonalityCard = () => {
    return (
        <>
            <CollectiveTitle>Kişisel</CollectiveTitle>
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
                </Item>
            </PersonalList>
        </>
    )
}

export default PersonalityCard