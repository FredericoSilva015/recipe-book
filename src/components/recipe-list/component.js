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
            <div className={Style.recipeList}>
                {recipeList.map( (value) => 
                    <RecipeCard key={value._id} recipe={value}/>
                )}
            </div>
        </>
    )
}

export default RecipeList