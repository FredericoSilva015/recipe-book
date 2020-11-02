import React, { useEffect, useState, useCallback } from 'react'
import Layout from '../components/layout/component'
import RecipeList from '../components/recipe-list/component'
import SEO from '../components/seo/component'
import Lightbox from '../components/lightbox/component'
import * as data from '../data/data.json'
import { uuidv4 } from '../utils/utils'

const IndexPage = () => {

  /**
   * Main definition data into App
   */
  const  [ recipeList, changeList ] = useState(data.default)

  /**
   * data view defenition
   */
  const  [ viewList, updateView ] = useState(recipeList)

  /**
   * State Value of search
   */
  const  [ inputSearch , updateSearch ] = useState('')

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

  /**
   * Open lightbox handler
   * @param {Object} value 
   * @param {String} partial 
   */
  const openHandler = (e, value, partial) => {
    e.stopPropagation()

    setRecipe(value)
    setPartial(partial)
    isOpen(true)
  }

  /**
   * Close lightbox handler
   */
  const closeHandler = () =>{ 
    isOpen(false)

    // clear the the partial and recipe value in order to update, but respecting the animation time
    setTimeout(() => {    
      setPartial('')
      setRecipe('')
    }, 200)
  }
  
  /**
   * New recipe handler
   */
  const newHandler = (value) => {
    const dataToChange = recipeList

    value._id = uuidv4()
    dataToChange.push(value)
    
    changeList(dataToChange)

    if( inputSearch ) {
      updateView(recipeList.filter(array => array.name.toLowerCase().indexOf(inputSearch.value.toLowerCase()) >= 0))
    } else {
      updateView(dataToChange)
    }
  }

  /**
   * Handle Delete
   * @param {Event} event 
   * @param {Object} recipe 
   */
  const deleteHandler = (event, recipe) => {
    event.stopPropagation();
    changeList(recipeList.filter((value) => value._id !== recipe._id ? value : ''))
    updateView(viewList.filter((value) => value._id !== recipe._id ? value : ''))
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

  /**
   * Handle keydown Esc event on the lightbox
   */
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]);

  const newSearch = (element) => {
    updateSearch(element)
    updateView(recipeList.filter(array => array.name.toLowerCase().indexOf(element.value.toLowerCase()) >= 0))
  }

  // Lock scrolling in the body
  useEffect(() => { open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible' })

  return (
    <Layout lightboxState={open} openHandler={openHandler} newSearch={newSearch}>
      <SEO title="Home" />
      <RecipeList recipeList={viewList} lightboxState={open} deleteHandler={deleteHandler} openHandler={openHandler}/>
      <Lightbox lightboxState={open} closeHandler={closeHandler} newHandler={newHandler} partial={partial} recipe={recipe} />
    </Layout>
)}

export default IndexPage
