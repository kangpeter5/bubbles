import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubbles from "../components/bubbles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bubbles />
  </Layout>
)

export default IndexPage
