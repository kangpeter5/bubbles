import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubbles from "../components/bubbles"

const SecondPage = () => (
  <Layout>
    <SEO title="Bubble" />
    <Bubbles>
      <div class="layer layer3"></div>
      <div class="layer layer4"></div> 
    </Bubbles>

    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
