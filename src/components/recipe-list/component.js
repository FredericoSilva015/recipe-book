import React from 'react'
import Style from './style.module.scss'
import RecipeCard from '../recipe-card/component'

const RecipeList = ({recipeList, deleteHandler}) => { 

    return (
        <>
            {console.log('Recipe list: ', recipeList)}
            <h2>Meat</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'meat').map( (value) => 
                    <RecipeCard key={value._id} recipe={value} deleteHandler={deleteHandler}/>
                )}
            </div>
            <h2>Fish</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'fish').map( (value) => 
                    <RecipeCard key={value._id} recipe={value} deleteHandler={deleteHandler}/>
                )}
            </div>
            <h2>Vegan</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'vegan').map( (value) => 
                    <RecipeCard key={value._id} recipe={value} deleteHandler={deleteHandler}/>
                )}
            </div>
            <h2>Dessert</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'dessert').map( (value) => 
                    <RecipeCard key={value._id} recipe={value} deleteHandler={deleteHandler}/>
                )}
            </div>
            <h2>Other</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'other').map( (value) => 
                    <RecipeCard key={value._id} recipe={value} deleteHandler={deleteHandler}/>
                )}
            </div>
        </>
    )
}

export default RecipeList