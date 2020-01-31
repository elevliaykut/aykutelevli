import React from 'react'
import { CollectiveTitle } from './../collective-card/collective-card.styles'
import { StackList, Item, TechOne, TechTwo, TechThree, TechFour, TechFive, TechSix, TechSeven, TechEight, BoldText } from './../collective-card/collective-card.styles'
const TechnologyCard = () => {
    return (
        <>
            <CollectiveTitle>Teknolojiler</CollectiveTitle>
            <StackList>
                <Item>
                    Şuanda aktif olarak <TechOne>React</TechOne>, <TechTwo>React Native</TechTwo>, <TechThree>Firebase</TechThree> ve <TechFive>Docker sanallaştırma</TechFive> teknolojileri üzerinde
                    çalışmalar yapıp, uygulamalar geliştirmekteyim.
                </Item>
                <Item>
                    Genel olarak kullandığım teknolojiler <TechSix>PHP</TechSix>, <TechSeven>Html</TechSeven>, <TechEight>Css</TechEight> şekklinde devam ediyor.
                </Item>
                <Item>
                    <TechOne>Git</TechOne>, <TechTwo>Git Terminal </TechTwo> 'i neredeyse hergün kullanıyorum. 
                </Item>
            </StackList>
        </>

    )
}
export default TechnologyCard