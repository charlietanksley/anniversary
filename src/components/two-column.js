import Image from "../components/image"
import PropTypes from "prop-types"
import React from "react"

const TwoColumn = ({ right, left }) => (
  <div className="two-column image-section">
    <div className="left-2-column">
      <Image id={right} />
    </div>
    <div className="right-2-column">
      <Image id={left} />
    </div>
  </div>
)

TwoColumn.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
}

export default TwoColumn
