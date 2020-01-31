import React from 'react'
import { CollectiveTitle } from './../collective-card/collective-card.styles'
import { StackList, Item,TechOne, TechTwo,TechThree,TechFour, TechFive,TechSix, TechSeven,TechEight} from './../collective-card/collective-card.styles'
const TechnologyCard = () => {
    return (
        <>
            <CollectiveTitle>Teknolojiler</CollectiveTitle>
            <StackList>
                <Item>
                    Şuanda aktif olarak <TechOne>React</TechOne>, <TechTwo>React Native</TechTwo>, <TechThree>Firebase</TechThree> ve <TechFive>Docker sanallaştırma</TechFive> teknolojileri üzerinde 
                    çalışmalar yapıp, uygulamalar geliştirmekteyim.                
                    </Item>
            </StackList>
        </>

    )
}
export default TechnologyCard