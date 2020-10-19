import React, { useState } from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout/component'
import RecipeList from '../components/recipe-list/component'
// import Image from "../components/image/component"
import SEO from '../components/seo/component'
import * as data from '../data/data.json'

const IndexPage = () => {

  const  [ list, changeList ]  = useState(data.default)

  return (
    <Layout recipeList={list} callback={changeList}>
      <SEO title="Home" />
      <RecipeList recipeList={list} callback={changeList}/>
    </Layout>
)}

export default IndexPage
