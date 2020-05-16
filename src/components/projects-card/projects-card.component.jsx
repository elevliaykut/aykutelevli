import React from 'react'
import { CollectiveTitle, SubTitle, ItemList, Item, BoldText, Date } from './../collective-card/collective-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from './../custom-link/custom-link.component'

const ProjectsCard = () => {
    return (
        <>
            <CollectiveTitle><CustomEmoji label='Projects' emoji='👩🏻‍💻'></CustomEmoji> Projeler </CollectiveTitle>
            <SubTitle>Yakında</SubTitle>
            <ItemList>
                <Item>
                    <CustomEmoji label='present' emoji='🎵'></CustomEmoji> React, Node.js becerilerimi geliştirmek için, Spotify'ın sunduğu api'leri kullanarak kullanıcıların çalma listelerini görebileceği <CustomLink targetUrl='https://github.com/elevliaykut/FlylList'>Flylist</CustomLink>' i
                    geliştirdim. <Date> (2020) </Date>
                </Item>
                <Item>
                    <CustomEmoji label='past' emoji='🔷'></CustomEmoji> Nöbetçi takip sistemini oldukça kolaylaştıracak cross platform mobil uygulamam <BoldText> Win </BoldText>' i geliştirdim. <Date> (2020) </Date>
                </Item>
            </ItemList>
            <SubTitle>Geçmiş</SubTitle>
            <ItemList>
                <Item>
                    <CustomEmoji label='past' emoji='🚀'></CustomEmoji> İzmir lokasyonunda bulunan <CustomLink targetUrl="https://bro35.com/"> Bro35 </CustomLink> şirketin de <CustomLink targetUrl="https://emlaksitem.com/"> Emlaksitem </CustomLink> projesinde FrontEnd Developer olarak görev aldım. <Date> (2019) </Date>
                </Item>
                <Item>
                    <CustomEmoji label='past' emoji='🌈'></CustomEmoji><BoldText> Kariyer Planlama Platformu </BoldText>' nu 2 yakın arkadaşım ile
                    beraber geliştirdik. Diğer Kariyer Planlama platformlarından farklı olarak sınav modülü entegre ettik. Böylece Insan Kaynaklarında görev alan
                    kişiler daha az efor harcayarak ilgili pozisyonlara uygun adayları bulabiliyorlar. <Date> (2019) </Date>
                </Item>

            </ItemList>
        </>
    )
}
export default ProjectsCard