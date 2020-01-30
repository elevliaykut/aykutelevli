import React from 'react'
import { CollectiveTitle } from './../collective-card/collective-card.styles'
import { SubTitle } from './../collective-card/collective-card.styles'
import { ItemList } from './../collective-card/collective-card.styles'
import { Item } from './../collective-card/collective-card.styles'
import { BoldText } from './../collective-card/collective-card.styles'
import { Date } from './../collective-card/collective-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
const JourneyCard = () => {
    return (
        <>
            <CollectiveTitle>Geçmişten Gelen</CollectiveTitle>
            <SubTitle>Yakında</SubTitle>
            <ItemList>
                <Item>
                    Uygulama Geliştiricisi olarak Ithinka Bilgi Teknolojilerin' de çalışmaktayım.
                </Item>
            </ItemList>
            <SubTitle>Geçmişte</SubTitle>
            <ItemList>
                <Item>
                    <CustomEmoji label='graduate' emoji='🎓' /> <BoldText>Fırat Universitesi</BoldText> Mühendisliği mezunuyum. <Date>(2020)</Date>
                </Item>
                <Item>
                    <CustomEmoji label='lublin' emoji='🇪🇪' /> <BoldText>Lublin University Of Technology</BoldText> Bilgisayar Mühendisliği. <Date>(2014-2018)</Date>
                </Item>
                <Item>
                    <CustomEmoji label='highschool'emoji='🎓'/> <BoldText>Anadolu Teknik Lisesi</BoldText> web programlama. <Date>(2012)</Date>
                </Item>
                <Item>
                    <CustomEmoji label="born" emoji='🐣'/> Yazılıma olan merakım lise yıllarımın kapısını çalıyor. O zamanlar bir sürü web sitesi yapıp beğenmeyip tekrar yenisine başlıyordum.
                    <CustomEmoji label="smile" emoji='😀'/>
                </Item>
            </ItemList>
        </>
    )
}
export default JourneyCard