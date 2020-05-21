import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      marginTop: `1.45rem`,
    }}
  >
    <div>
      <h1 className="header">
        David & Debra Trammel
        <br /> Celebrating 50 Years
        <br /> June 20, 1970
      </h1>
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
