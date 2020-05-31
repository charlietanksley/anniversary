/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "./header"
import SiteNav from "./site-nav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <script>
          var clicky_site_ids = clicky_site_ids || [];
          clicky_site_ids.push(101258426);
        </script>
        <script async src="//static.getclicky.com/js" />

        <meta
          property="og:site_name"
          content="Debra and David Trammel Anniversary"
        />

        <meta
          property="og:title"
          content="Debra and David Trammel's 50 Year Anniversary."
        />
        <meta
          property="og:url"
          content="https://www.debraanddavidtrammel.com/"
        />

        <meta
          property="og:image"
          content="https://www.debraanddavidtrammel.com/static/28b153d35cfe55f04d520a8ca6e78bf1/b8f40/10-portraint-smiles.jpg"
        />
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header />
        <SiteNav />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
