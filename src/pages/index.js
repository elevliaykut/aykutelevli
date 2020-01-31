import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PersonalCard from './../components/personal-card/personal-card.component'
import PersonalityCard from './../components/personality-card/personality-card.component'
import JourneyCard from './../components/journey-card/journey-card.component'
import TechnologyCard from './../components/technologies-card/technology-card.component'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <PersonalCard />
      <PersonalityCard />
      <JourneyCard />
      <TechnologyCard />
    </div>
  </Layout>
)

export default IndexPage
