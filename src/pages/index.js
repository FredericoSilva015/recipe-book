import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout/component'
import RecipeList from '../components/recipe-list/component'
// import Image from "../components/image/component"
import SEO from '../components/seo/component'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RecipeList />
  </Layout>
)

export default IndexPage
