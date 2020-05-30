import Image from "../components/image"
import PropTypes from "prop-types"
import React from "react"

const FullWidth = ({ img }) => (
  <div className="image-section">
    <Image id={img} />
  </div>
)

FullWidth.propTypes = {
  img: PropTypes.string.isRequired,
}

export default FullWidth
