import React from 'react'
import PropTypes from 'prop-types'
import Style from './style.module.scss'

const Search = ({ newSearch, lightboxState }) => {
    return (
        <div className={Style.wrapper}>
            <input disabled={lightboxState} 
                onChange={(e) =>{ newSearch(e.target.value)}} 
                type="text" className={Style.input} 
                placeholder="🔍 Search for recipe"
            />
        </div>
    )
}


Search.propTypes = {
    lightboxState: PropTypes.bool,
}
  
Search.defaultProps = {
    lightboxState: false,
}


export default Search;