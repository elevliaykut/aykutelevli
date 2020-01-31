import React from 'react'
import { CollectiveTitle, SubTitle, ItemList, Item, BoldText } from './../collective-card/collective-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from './../custom-link/custom-link.component'

const ProjectsCard = () => {
    return (
        <>
            <CollectiveTitle><CustomEmoji label='Projects' emoji='👩🏻‍💻'></CustomEmoji> Projeler </CollectiveTitle>
            <SubTitle>Mevcut</SubTitle>
            <ItemList>
                <Item>
                    <CustomEmoji label='present' emoji='🎧'></CustomEmoji> Şuan da <CustomLink targetUrl='https://github.com/elevliaykut/WhoIsNext'>Win</CustomLink>,
                    mobil uygulamam üzerinde geliştirme yaparken <BoldText>React Native</BoldText>, <BoldText>Node.js</BoldText>, <BoldText> Javascirpt </BoldText> yeteneklerimi geliştirmiş oluyorum.
                </Item>
            </ItemList>
            <SubTitle>Geçmiş</SubTitle>
        </>
    )
}
export default ProjectsCard