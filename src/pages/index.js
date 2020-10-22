import React, { useEffect, useState, useCallback } from 'react'
import Layout from '../components/layout/component'
import RecipeList from '../components/recipe-list/component'
import SEO from '../components/seo/component'
import Lightbox from '../components/lightbox/component'
import * as data from '../data/data.json'

const IndexPage = () => {

  /**
   * defining data into App state and setting up changeList to modify state
   */
  const  [ list, changeList ] = useState(data.default)

  /**
   * Lightbox open state
   */
  const  [ open, isOpen ] = useState(false);

  const openHandler = () => isOpen(true)
  const closeHandler = () => isOpen(false)

  const deleteHandler = (recipe) => {

    // confirm the id is valid
    if (recipe._id) {
      let dataToChange = [...list]

      dataToChange = dataToChange.filter((value) => value._id !== recipe._id ? value : '')

      return changeList(dataToChange)
    }
  }

  const handleEsc = useCallback(event => {
    const { keyCode } = event;

    if (keyCode === 27) {
      isOpen(false)
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]);

  // Lock scrolling in the body
  useEffect(() => { open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible' })

  return (
    <Layout recipeList={list} openHandler={openHandler} >
      <SEO title="Home" />
      <RecipeList recipeList={list} deleteHandler={deleteHandler}/>
      <Lightbox lightboxState={open} closeHandler={closeHandler}/>
    </Layout>
)}

export default IndexPage
