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
                    mobil uygulamam üzerinde geliştirme yaparken <BoldText>React Native</BoldText>, <BoldText>Node.js</BoldText>, <BoldText> JavaScript </BoldText> yeteneklerimi geliştirmiş oluyorum.<Date> (2020) </Date>
                </Item>
            </ItemList>
            <SubTitle>Geçmiş</SubTitle>
            <ItemList>
                <Item>
                    <CustomEmoji label='past' emoji='✔️'></CustomEmoji> RESTFUL Api mimarisini kullanarak Node.js ile <CustomLink targetUrl="https://github.com/elevliaykut/web-service"> Web Servis </CustomLink> geliştirdim. <Date> (2020) </Date>
                </Item>
                <Item>
                    <CustomEmoji label='past' emoji='✔️'></CustomEmoji> Bir film sitesinin dışarıya verdiği API' yı kullanarak güncel filmleri gösterdiğim basit bir <CustomLink targetUrl="https://github.com/elevliaykut/movie-list"> Film Uygulaması </CustomLink> yaptım. <Date> (2020) </Date>
                </Item>
                <Item>
                    <CustomEmoji label='past' emoji='✔️'></CustomEmoji> İzmir lokasyonunda bulunan <CustomLink targetUrl="https://bro35.com/"> Bro35 </CustomLink> şirketinde <CustomLink targetUrl="https://emlaksitem.com/"> Emlaksitem </CustomLink> projesinde FrontEnd Developer olarak görev aldım. <Date> (2019) </Date>
                </Item>
                <Item>
                    <CustomEmoji label='past' emoji='✔️'></CustomEmoji><CustomLink targetUrl="https://github.com/elevliaykut/CareerProjectFrontEnd"> Kariyer Planlama Platformu</CustomLink>' nu 2 yakın arkadaşım ile
                    beraber geliştirdik. Diğer Kariyer Planlama platformlarından farklı olarak sınav modülü entegre ettik. Böylece Insan Kaynaklarında görev alan
                    kişiler daha az efor harcayarak ilgili pozisyonlara uygun adayları bulabiliyorlar. <Date> (2019 - CoFounder) </Date>
                </Item>
                <Item>
                    <CustomEmoji label='past' emoji='✔️'></CustomEmoji> Docker Sanallaştırma teknolojisini kullanarak <BoldText>Mysql</BoldText> ve <BoldText>Nginx</BoldText>' i farklı containerlarda
                    koşturup basit bir <CustomLink targetUrl="https://github.com/elevliaykut/Dockerizing-Laravel-App-On-Ubuntu"> Laravel web projesi </CustomLink> geliştirdim.<Date> (2019) </Date>
                </Item>
                <Item>
                    <CustomEmoji label='past' emoji='✔️'></CustomEmoji> Akademik alanda faliyet göstermekte olan öğretim üyelerinin yaptığı araştırmalar üzerine yazdığı makaleleri yayınlayabileceği
                    bir <CustomLink targetUrl="https://github.com/elevliaykut/Dockerizing-Laravel-App-On-Ubuntu"> Akademik Dergi Yönetim Sistemi </CustomLink> geliştirdim. <Date> (2018) </Date>
                </Item>
                <Item>
                    <CustomEmoji label='past' emoji='✔️'></CustomEmoji> Pilotların kolayca rezervasyon yapıp uçuş için simulator kiralayabileceği bir <CustomLink targetUrl="https://github.com/elevliaykut/Simulator-Management-System">Simulator Yönetim Sistemi</CustomLink> geliştirdim.<Date> (2017) </Date>
                </Item>

            </ItemList>
        </>
    )
}
export default ProjectsCard