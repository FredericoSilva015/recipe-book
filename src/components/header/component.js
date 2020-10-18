// import { Link } from "gatsby"
import PropTypes from 'prop-types'
import React from 'react'
import Search from '../search/component'
import Style from './style.module.scss'

const Header = ({ siteTitle }) => (
  <header className={Style.header}>
    <div className={'container ' + Style.headerWrapper}>
      <div className={Style.menuWrapper}>
        <h1 className={Style.title}>{siteTitle} <span role="img" aria-label="cheecky">🧐</span></h1>
        <button>Menu</button>
      </div>
      <Search />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
