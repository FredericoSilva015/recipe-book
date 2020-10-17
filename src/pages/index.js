import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/component"
import Image from "../components/image/component"
import SEO from "../components/seo/component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
