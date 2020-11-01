import React from 'react'
import PropTypes from 'prop-types'
import Style from './style.module.scss'

const Search = ({ recipeList, lightboxState }) => {
    return (
        <div className={Style.wrapper}>
            <input disabled={lightboxState} type="text" className={Style.input} placeholder="🔍 Search for recipe"/>
        </div>
    )
}

Search.propTypes = {
    recipeList: PropTypes.array,
  }
  
Search.propTypes = {
    lightboxState: PropTypes.bool,
}
  
Search.defaultProps = {
    lightboxState: false,
}


export default Search;