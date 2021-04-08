import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const locationsPage = () => (
  <Layout>
    <SEO title="locations" />
    <h1>Find us!</h1>
    <p>Avocados</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default locationsPage