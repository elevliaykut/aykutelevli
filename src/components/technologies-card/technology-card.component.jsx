import React from 'react'
import { CollectiveTitle } from './../collective-card/collective-card.styles'
import { StackList, Item, TechOne, TechTwo, TechThree, TechFour, TechFive, TechSix, TechSeven, TechEight, BoldText } from './../collective-card/collective-card.styles'
const TechnologyCard = () => {
    return (
        <>
            <CollectiveTitle>Teknolojiler</CollectiveTitle>
            <StackList>
                <Item>
                    Şuanda aktif olarak <TechOne><BoldText>React</BoldText></TechOne>, <TechTwo><BoldText>React Native</BoldText></TechTwo>, <TechThree><BoldText>Firebase</BoldText></TechThree> teknolojileri üzerinde
                    çalışmalar yapıp, uygulamalar geliştirmekteyim.
                </Item>
                <Item>
                    Genel olarak kullandığım teknolojiler <TechSix><BoldText>Git</BoldText></TechSix>, <TechFive><BoldText>MySql</BoldText></TechFive>, <TechSeven><BoldText>Html</BoldText></TechSeven>, <TechEight><BoldText>Css</BoldText></TechEight> şekklinde devam ediyor.
                </Item>
                <Item>
                    Sanallaştırma ve Uygulamaların daha kolay deploy süreçleri için <TechFour><BoldText>Docker</BoldText></TechFour> teknolojisini kullanıyorum.
                </Item>
                <Item>
                    <TechOne><BoldText>Git</BoldText></TechOne>, <TechTwo><BoldText>Git Terminal</BoldText></TechTwo> 'i neredeyse hergün kullanıyorum. 
                </Item>
                <Item>
                    Geliştirdiğim Projeler de <TechEight><BoldText>Unit Test</BoldText></TechEight>' leri gerçekleştiriyorum.
                </Item>
            </StackList>
        </>

    )
}
export default TechnologyCard