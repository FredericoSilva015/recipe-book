import React from 'react'
import Style from './style.module.scss'
import RecipeCard from '../recipe-card/component'

const RecipeList = ({recipeList, callback}) => { 
    // const test = () => {
    //     let change = [...recipeList]
    //     change[0].name = 'fred'
    //     return callback(change)
    // }

    return (
        <>
            <h2>Meat</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'meat').map( (value) => 
                    <RecipeCard key={value._id} recipe={value}/>
                )}
            </div>
            <h2>Fish</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'fish').map( (value) => 
                    <RecipeCard key={value._id} recipe={value}/>
                )}
            </div>
            <h2>Vegan</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'vegan').map( (value) => 
                    <RecipeCard key={value._id} recipe={value}/>
                )}
            </div>
            <h2>Dessert</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'dessert').map( (value) => 
                    <RecipeCard key={value._id} recipe={value}/>
                )}
            </div>
            <h2>Other</h2>
            <div className={Style.recipeList}>
                {recipeList.filter(value => value.category === 'other').map( (value) => 
                    <RecipeCard key={value._id} recipe={value}/>
                )}
            </div>
        </>
    )
}

export default RecipeList