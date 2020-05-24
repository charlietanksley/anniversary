import PropTypes from "prop-types"
import React from "react"

const Decade = ({ children, headerName }) => (
  <div className="photo-section">
    <h2 className="decade">{headerName}</h2>
    {children}
  </div>
)

Decade.propTypes = {
  children: PropTypes.node.isRequired,
  headerName: PropTypes.string.isRequired,
}

export default Decade
