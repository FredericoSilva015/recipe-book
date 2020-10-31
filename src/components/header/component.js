import PropTypes from 'prop-types'
import React from 'react'
import Search from '../search/component'
import Style from './style.module.scss'

const Header = ({ siteTitle, recipeList, lightboxState, openHandler }) => (
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
      <Search recipeList={recipeList} lightboxState={lightboxState}/>
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
  siteTitle: ``,
}

export default Header
