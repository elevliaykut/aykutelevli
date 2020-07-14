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
                    Şuan için tamamen <TechOne style={{ borderBottom: '3px solid #f0db4f' }}>JavaScript</TechOne> - <BoldText>React</BoldText>, <TechThree style={{ borderBottom: '3px solid #474a8a' }}>GraphQl</TechThree> teknolojileri üzerinde
                    odaklanıyorum.
                </Item>
                <Item>
                    Genel olarak kullandığım teknolojiler <TechSix style={{ borderBottom: '3px solid #ff9900' }}>PHP</TechSix>, <TechFive style={{ borderBottom: '3px solid #83ba63' }}>MySql</TechFive>, <TechSeven style={{ borderBottom: '3px solid #d24939' }}>Html</TechSeven>, <TechEight style={{ borderBottom: '3px solid #fd9426' }}>Css</TechEight> şekklinde devam ediyor.
                </Item>
                <Item>
                    Cross Platform mobil uygulama geliştirmek için <TechOne style={{ borderBottom: '3px solid #306998' }}>React Native</TechOne> kullanıyorum.
                </Item>
                <Item>
                    <TechOne style={{ borderBottom: '3px solid #0db7ed' }}>Git</TechOne>, <TechTwo style={{ borderBottom: '3px solid #ff9900' }}>Git Terminal</TechTwo> 'i neredeyse hergün kullanıyorum.
                </Item>
                <Item>
                    Temel seviye de <TechOne style={{ borderBottom: '3px solid #0db7ed' }}>Linux</TechOne> - <BoldText>Sistem</BoldText> bilgim var.
                </Item>
                <Item>
                    Basit seviye de <TechThree style={{ borderBottom: '3px solid #306998' }}>Jenkins</TechThree> - <BoldText> CI/CD </BoldText> süreçleri hakkında bilgi sahibiyim.
                </Item>
            </StackList>
            <CurrentLearning>
                <BoldText>Şuan öğrenilenler: </BoldText>
                React.js - GraphQl
            </CurrentLearning>
        </>
    )
}
export default TechnologyCard