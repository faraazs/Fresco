import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const dealsPage = () => (
  <Layout>
    <SEO title="Deals" />
    <h1>Our current Deals</h1>
    <p>Avocados</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default dealsPage