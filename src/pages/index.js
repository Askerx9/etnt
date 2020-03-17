import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Sections
import SectionHeader from "../components/sections/header"
import Presentation from "../components/sections/presentation"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionHeader />
    <Presentation />
  </Layout>
)

export default IndexPage
