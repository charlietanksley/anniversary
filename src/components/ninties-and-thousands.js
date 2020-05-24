import Decade from "../components/decade"
import Image from "../components/image"
import React from "react"

export default () => (
  <Decade headerName="1990s and 2000s">
    <div className="two-column">
      <div className="left-2-column">
        <Image id="reunion70" />
      </div>
      <div className="right-2-column">
        <Image id="withJoy90s" />
      </div>
    </div>
  </Decade>
)
