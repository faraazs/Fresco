import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutusPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>We are Fresco - a supermarket specializing on bringing top quality meats and produce at a fair price to the southeast Texas Area</h1>
    <p>Avocados</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default aboutusPage