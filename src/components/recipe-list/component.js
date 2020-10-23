import React from 'react'
import Style from './style.module.scss'
import RecipeCard from '../recipe-card/component'

const RecipeList = ({recipeList, lightboxState, deleteHandler, openHandler}) => { 

    return (
        <>
            <h2>Meat</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'meat').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value._id} recipe={value} deleteHandler={deleteHandler} openHandler={openHandler}/>
                )}
            </div>
            <h2>Fish</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'fish').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value._id} recipe={value} deleteHandler={deleteHandler}  openHandler={openHandler}/>
                )}
            </div>
            <h2>Vegan</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'vegan').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value._id} recipe={value} deleteHandler={deleteHandler}  openHandler={openHandler}/>
                )}
            </div>
            <h2>Dessert</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'dessert').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value._id} recipe={value} deleteHandler={deleteHandler}  openHandler={openHandler}/>
                )}
            </div>
            <h2>Other</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'other').map( (value) => 
                    <RecipeCard lightboxState={lightboxState} key={value._id} recipe={value} deleteHandler={deleteHandler}  openHandler={openHandler}/>
                )}
            </div>
        </>
    )
}

export default RecipeList