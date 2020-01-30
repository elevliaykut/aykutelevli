import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PersonalCard from './../components/personal-card/personal-card.component'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <PersonalCard/>
  </Layout>
)

export default IndexPage
