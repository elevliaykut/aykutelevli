import React from 'react'
import { CollectiveTitle } from './../collective-card/collective-card.styles'
import { StackList, Item, TechOne, TechTwo, TechThree, TechFour, TechFive, TechSix, TechSeven, TechEight, BoldText } from './../collective-card/collective-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
const TechnologyCard = () => {
    return (
        <>
            <CollectiveTitle><CustomEmoji label='tool' emoji='🛠'></CustomEmoji> Teknolojiler </CollectiveTitle>
            <StackList>
                <Item>
                    Şuan için tamamen <TechOne><BoldText>JavaScript</BoldText></TechOne> - <BoldText>React</BoldText>, <TechTwo><BoldText>Node.js</BoldText></TechTwo> - <BoldText>Express</BoldText>, Sanallaştırma için <TechThree><BoldText>Docker</BoldText></TechThree> teknolojileri üzerinde
                    odaklanıp, uygulamalar geliştiriyorum.
                </Item>
                <Item>
                    Genel olarak kullandığım teknolojiler <TechSix><BoldText>PHP</BoldText></TechSix>, <TechFive><BoldText>MySql</BoldText></TechFive>, <TechSeven><BoldText>Html</BoldText></TechSeven>, <TechEight><BoldText>Css</BoldText></TechEight> şekklinde devam ediyor.
                </Item>
                <Item>
                    Cross Platform mobil uygulama geliştirirken <TechOne><BoldText>React Native</BoldText></TechOne>, <TechTwo><BoldText>Firebase</BoldText></TechTwo> kullanıyorum.
                </Item>
                <Item>
                    <TechOne><BoldText>Git</BoldText></TechOne>, <TechTwo><BoldText>Git Terminal</BoldText></TechTwo> 'i neredeyse hergün kullanıyorum.
                </Item>
                <Item>
                    Temel seviye de <TechOne><BoldText>Linux</BoldText></TechOne> - <BoldText>Sistem</BoldText> bilgim var.
                </Item>
                <Item>
                    Basit seviye de temel olarak <TechThree><BoldText>Jenkins</BoldText></TechThree> ile <BoldText> CI/CD </BoldText> süreçleri hakkında bilgi sahibiyim.
                </Item>
            </StackList>
        </>

    )
}
export default TechnologyCard