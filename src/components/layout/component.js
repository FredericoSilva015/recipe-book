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

const Layout = ({ children, lightboxState, recipeList, openHandler }) => {

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} recipeList={recipeList} lightboxState={lightboxState} openHandler={openHandler} />
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

export default Layout
