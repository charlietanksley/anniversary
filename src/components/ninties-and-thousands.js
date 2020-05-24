import React from "react"
import Image from "../components/image"

export default () => (
  <div className="photo-section">
    <h2 className="decade">1990s and 2000s</h2>
    <div className="two-column">
      <div className="left-2-column">
        <Image id="reunion70" />
      </div>
      <div className="right-2-column">
        <Image id="withJoy90s" />
      </div>
    </div>
  </div>
)
