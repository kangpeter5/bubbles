import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubbles from "../components/bubbles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bubbles>
      <main>
        <div className="layer layer3"></div>
        <div className="layer layer4"></div>
      </main>
    </Bubbles>
  </Layout>
)

export default IndexPage
