import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hello</h1>
    <p>Welcome to Mapes Gatsby Blog Page</p>
    <p>
    <Link to="/blog/index/">Index-Site test</Link>
      <br />
      <Link to="/blog/nuesse-kerne/">Go to nuts</Link>
      <br />
      <Link to="/blog/oele/">Go to oils</Link>
    </p>
  </Layout>
)

export default IndexPage