import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const menuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <h1>Taqueria Menu</h1>
    <p>Avocados</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default menuPage