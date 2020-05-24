import React from "react"
import Image from "../components/image"

export default () => (
  <div className="photo-section">
    <h2 className="decade">1970s and 1980s</h2>
    <div className="two-column">
      <div className="left-2-column">
        <Image id="wedding" />
      </div>
      <div className="right-2-column">
        <Image id="june1970" />
      </div>
    </div>
  </div>
)
