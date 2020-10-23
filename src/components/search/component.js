import React from 'react'
import Style from './style.module.scss'

const Search = ({ recipeList, lightboxState }) => {
    return (
        <div className={Style.wrapper}>
            {console.log('search: ', recipeList)}
            <input disabled={lightboxState} type="text" className={Style.input} placeholder="🔍 Search for recipe"/>
        </div>
    )
}


export default Search;