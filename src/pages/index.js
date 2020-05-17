import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Sections
import SectionHeader from "../components/sections/header"
import Presentation from "../components/sections/presentation"
import Digit from "../components/sections/digit";
import Contact from "../components/sections/contact"
import Skills from "../components/sections/skills"
import Partners from "../components/sections/partners";
import Services from "../components/sections/services";
import Timeline from "../components/sections/timeline";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionHeader />
    <Presentation />
    <Timeline />
    <Services />
    <Skills />
    <Digit />
    <Partners />
    <Contact />
  </Layout>
)

export default IndexPage
