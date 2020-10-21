import PropTypes from 'prop-types'
import React from 'react'
import Search from '../search/component'
import Style from './style.module.scss'

const Header = ({ siteTitle, recipeList, lightboxSetState }) => (
  <header className={Style.header}>
    <div className={'container ' + Style.headerWrapper}>
      <div className={Style.menuWrapper}>
        <h1 className={Style.title}>{siteTitle} <span role="img" aria-label="cheecky">🧐</span></h1>
        <button className={Style.menuButton}>
          <div className={Style.lineTop}></div>
          <div className={Style.lineMiddle}></div>
          <div className={Style.lineBottom}></div>
        </button>
      </div>
      <Search recipeList={recipeList} lightboxSetState={lightboxSetState}/>
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
