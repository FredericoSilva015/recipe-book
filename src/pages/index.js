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
  const  [ recipeList, changeList ] = useState(data.default)

  /**
   * Lightbox open state
   */
  const  [ open, isOpen ] = useState(false);

  /**
   * Set type of the lightbox
   */
  const [ partial, setPartial ] = useState('');

  /**
   * Single recipe value to store
   */
  const [ recipe, setRecipe] = useState('');

  const openHandler = (value, partial) => {

    setRecipe(value)
    setPartial(partial)
    isOpen(true)
  }

  const closeHandler = () =>{ 
    isOpen(false)

    // clear the the partial and recipe value in order to update, but respecting the animation time
    setTimeout(() => {    
      setPartial('')
      setRecipe('')
    }, 200)
  }
  

  /**
   * Handle Delete
   * @param {Object} recipe 
   */
  const deleteHandler = (event, recipe) => {
    event.stopPropagation();

    if (recipe._id) {
      let dataToChange = [...recipeList]

      dataToChange = dataToChange.filter((value) => value._id !== recipe._id ? value : '')

      return changeList(dataToChange)
    }
  }

  /**
   * Handle Esc press
   */
  const handleEsc = useCallback(event => {
    const { keyCode } = event;

    if (keyCode === 27) {
      closeHandler()
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
    <Layout recipeList={recipeList} lightboxState={open} openHandler={openHandler} >
      <SEO title="Home" />
      <RecipeList recipeList={recipeList} lightboxState={open} deleteHandler={deleteHandler} openHandler={openHandler}/>
      <Lightbox lightboxState={open} closeHandler={closeHandler} partial={partial} recipe={recipe}/>
    </Layout>
)}

export default IndexPage
