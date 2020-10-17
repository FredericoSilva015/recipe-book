import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/component"
import Image from "../components/image/component"
import SEO from "../components/seo/component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="search page for recipes" author="Frederico Silva" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
