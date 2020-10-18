import React from 'react'
import * as data from '../../data/data.json'

const RecipeList = () => { 
    const dataHolder = data.default;

    return (
        <div>
            {dataHolder.map(({ _id, name, picture, ingredients, steps, cooking_time, servings}) => {
                return (
                    <div key={_id}>
                        <p>Name {name}</p>
                        <p>Picture {picture}</p>
                        <p>Ingredients {ingredients}</p>
                        <p>Steps {steps}</p>
                        <p>Time {cooking_time}</p>
                        <p>Serving {servings}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RecipeList