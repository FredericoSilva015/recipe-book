/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../header/component'
import '../../style/global.scss'

const Layout = ({ children, lightboxState, newSearch, openHandler }) => {

  /**
   * site metadata
   * @type {Object} data
   */
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} newSearch={newSearch} lightboxState={lightboxState} openHandler={openHandler} />
      <main className="container">{children}</main>
      <footer className="container">
        <p>A lot of <span role="img" aria-label="heart">&#128151;</span> from Portugal</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.propTypes = {
  lightboxState: PropTypes.bool,
}

Layout.propTypes = {
  newSearch: PropTypes.string,
}

Layout.propTypes = {
  openHandler: PropTypes.func,
}

Layout.defaultProps = {
  lightboxState: false
}

export default Layout
