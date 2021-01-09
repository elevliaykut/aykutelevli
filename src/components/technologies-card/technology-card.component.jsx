import React from 'react'
import { CollectiveTitle } from './../collective-card/collective-card.styles'
import {
    StackList,
    Item,
    TechOne,
    TechTwo,
    TechThree,
    TechFour,
    TechFive,
    TechSix,
    TechSeven,
    TechEight,
    BoldText,
    CurrentLearning,
} from './../collective-card/collective-card.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const TechnologyCard = () => {
    return (
        <>
            <CollectiveTitle><CustomEmoji label='tool' emoji='🛠'></CustomEmoji> Teknolojiler </CollectiveTitle>
            <StackList>
                <Item>
                    Şuan, front end geliştirirken <TechOne>JavaScript</TechOne> - <BoldText>React</BoldText>, back end geliştirirken <TechTwo>PHP</TechTwo> - <BoldText>Laravel</BoldText>,  api tarafında <TechThree>REST</TechThree>teknolojilerini
                    kullanıyorum.
                </Item>
                <Item>
                    Genel olarak kullandığım teknolojiler <TechSix>PHP</TechSix> - <BoldText>Laravel</BoldText>, <TechFive>MySQL</TechFive>, <TechSeven>HTML</TechSeven>, <TechEight>CSS</TechEight> şeklinde devam ediyor.
                </Item>
                <Item>
                    Version kontrol sistemi olarak <TechOne>Github</TechOne>, <TechTwo>Gitlab</TechTwo>'ı neredeyse her gün kullanıyorum.
                </Item>
                <Item>
                    <TechSix>JavaScript</TechSix> - <BoldText> React Native </BoldText> kullanarak geliştirdiğim basit uygulamalar var.
                </Item>
                <Item>
                    <TechFour>Agile Metodolojileri</TechFour> - <BoldText>Scrum</BoldText>, <BoldText>Kanban</BoldText> süreçleri hakkında bilgi sahibiyim.
                </Item>
                <Item>
                    Temel seviye de <TechOne>Linux</TechOne> - <BoldText>Sistem</BoldText> bilgim var.
                </Item>
            </StackList>
            <CurrentLearning>
                <BoldText>Şuan öğrenilenler: </BoldText>
                React Native
            </CurrentLearning>
        </>
    )
}
export default TechnologyCard