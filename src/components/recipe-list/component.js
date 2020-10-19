import React from 'react'

const RecipeList = ({recipeList, callback}) => { 
    const test = () => {
        let change = [...recipeList]
        change[0].name = 'fred'
        return callback(change)
    }

    return (
        <div>
            {console.log('list:', recipeList)}
            {recipeList.map( (value) => 
                <div key={value._id}>
                    {value.name}
                </div>
            )}
            <button onClick={test}>Press to change data</button>
        </div>
    )
}

export default RecipeList