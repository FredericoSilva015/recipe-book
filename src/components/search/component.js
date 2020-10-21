import React from 'react'
import Style from './style.module.scss'

const Search = ({ recipeList }) => {
    return (
        <div className={Style.wrapper}>
            {console.log('search: ', recipeList)}
            <input type="text" className={Style.input} placeholder="🔍 Search for recipe"/>
        </div>
    )
}


export default Search;