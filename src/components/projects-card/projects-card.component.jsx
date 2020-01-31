import React from 'react'
import { CollectiveTitle, SubTitle, ItemList, Item, BoldText, Date } from './../collective-card/collective-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from './../custom-link/custom-link.component'

const ProjectsCard = () => {
    return (
        <>
            <CollectiveTitle><CustomEmoji label='Projects' emoji='👩🏻‍💻'></CustomEmoji> Projeler </CollectiveTitle>
            <SubTitle>Mevcut</SubTitle>
            <ItemList>
                <Item>
                    <CustomEmoji label='present' emoji='🎧'></CustomEmoji> Şuan da <CustomLink targetUrl='https://github.com/elevliaykut/Whoisnext'>Win</CustomLink>,
                    mobil uygulamam üzerinde geliştirme yaparken <BoldText>React Native</BoldText>, <BoldText>Node.js</BoldText>, <BoldText> Javascirpt </BoldText> yeteneklerimi geliştirmiş oluyorum.<Date> (2020) </Date>
                </Item>
            </ItemList>
            <SubTitle>Geçmiş</SubTitle>
            <ItemList>
                <Item>
                    <CustomEmoji label='present' emoji='✔️'></CustomEmoji>Bitirme Projesi olarak geliştirdiğimiz <CustomLink targetUrl="https://github.com/elevliaykut/CareerProjectFrontEnd">Kariyer Planlama Platformu</CustomLink> 3 yakın arkadaşım ile
                    beraber geliştirdik. Diğer Kariyer Planlama platformlarından farklı olarak sınav modülü entegre ettik. Böylece Insan Kaynaklarında görev alan
                    kişiler daha az efor harcayarak ilgili pozisyona uygun adayı bulabiliyorlar. <Date> (2019) </Date>
                </Item>
            </ItemList>
        </>
    )
}
export default ProjectsCard