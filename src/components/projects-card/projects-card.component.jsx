import React from 'react'
import { CollectiveTitle } from './../collective-card/collective-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
const ProjectsCard = () => {
    return(
        <>
            <CollectiveTitle><CustomEmoji label='Projects' emoji='👩🏻‍💻'></CustomEmoji> Projeler </CollectiveTitle>
        </>
    )
}
export default ProjectsCard