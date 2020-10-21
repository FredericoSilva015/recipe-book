import React, { useState } from 'react'
import Layout from '../components/layout/component'
import RecipeList from '../components/recipe-list/component'
import SEO from '../components/seo/component'
import Lightbox from '../components/lightbox/component'
import * as data from '../data/data.json'

const IndexPage = () => {

  /**
   * defining data into App state and setting up changeList to modify state
   * list @type {Array} 
   * changeList @type {React.dispatch<any>}
   */
  const  [ list, changeList ] = useState(data.default)

  /**
   * 
   */
  const  [ open, isOpen ] = useState(false);

  /** Edit Recipe handler */

  /** Delete Recipe handler 
   * @param {Object} recipe
   */
  const deleteHandler = (recipe) => {

    // confirm the id is valid
    if (recipe._id) {
      let dataToChange = [...list]

      dataToChange = dataToChange.filter((value) => value._id !== recipe._id ? value : '')

      return changeList(dataToChange)
    }
  }

  /** Creat Recipe Handler */

  return (
    <Layout recipeList={list} lightboxSetState={isOpen}>
      <SEO title="Home" />
      <RecipeList recipeList={list} deleteHandler={deleteHandler}/>
      <Lightbox lightboxState={open} lightboxSetState={isOpen} />
    </Layout>
)}

export default IndexPage
