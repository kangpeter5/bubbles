import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubbles from "../components/bubbles"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Bubbles />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
