import React from 'react'
import PropTypes from 'prop-types'
import Search from '../search/component'
import Style from './style.module.scss'

const Header = ({ siteTitle, newSearch, lightboxState, openHandler }) => (
  <header className={Style.header}>
    <div className={'container ' + Style.headerWrapper}>
      <div className={Style.menuWrapper}>
        <h1 className={Style.title}>{siteTitle} <span role="img" aria-label="cheecky">🧐</span></h1>
        <button className={Style.newButton} disabled={lightboxState} onClick={(e) => openHandler(e, '', 'new')}>
          New Recipe
          <div className={Style.iconWrapper}>
            <div className={Style.lineTop}></div>
            <div className={Style.lineBottom}></div>
          </div>
        </button>
      </div>
      <Search newSearch={newSearch} lightboxState={lightboxState}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.propTypes = {
  recipeList: PropTypes.array,
}

Header.defaultProps = {
  openHandler: PropTypes.func
}

Header.lightboxState = {
  lightboxState: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
}

Header.defaultProps = {
  lightboxState: false,
}

export default Header
