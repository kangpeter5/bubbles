import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubbles from "../components/bubbles"

const SecondPage = () => (
  <Layout>
    <SEO title="Bubble" />
    <Bubbles />
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
