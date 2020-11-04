import React from 'react'
import PropTypes from 'prop-types'
import Style from './style.module.scss'
import RecipeCard from '../recipe-card/component'

const RecipeList = ({recipeList, lightboxState, deleteHandler, openHandler}) => { 

    return (
        <>
            <h2>Meat</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'meat').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value.id} recipe={value} deleteHandler={deleteHandler} openHandler={openHandler}/>
                )}
            </div>
            <h2>Fish</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'fish').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value.id} recipe={value} deleteHandler={deleteHandler}  openHandler={openHandler}/>
                )}
            </div>
            <h2>Vegan</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'vegan').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value.id} recipe={value} deleteHandler={deleteHandler}  openHandler={openHandler}/>
                )}
            </div>
            <h2>Dessert</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'dessert').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value.id} recipe={value} deleteHandler={deleteHandler}  openHandler={openHandler}/>
                )}
            </div>
            <h2>Other</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'other').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value.id} recipe={value} deleteHandler={deleteHandler}  openHandler={openHandler}/>
                )}
            </div>
        </>
    )
}

RecipeList.propTypes = {
    recipeList: PropTypes.array,
}
  
RecipeList.propTypes = {
    lightboxState: PropTypes.bool,
}

RecipeList.propTypes = {
    deleteHandler: PropTypes.func,
}

RecipeList.propTypes = {
    openHandler: PropTypes.func,
}

RecipeList.defaultProps = {
    lightboxState: false
}

export default RecipeList