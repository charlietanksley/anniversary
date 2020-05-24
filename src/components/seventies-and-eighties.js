import Decade from "../components/decade"
import Image from "../components/image"
import React from "react"

export default () => (
  <Decade headerName="1970s and 1980s">
    <div className="two-column">
      <div className="left-2-column">
        <Image id="wedding" />
      </div>
      <div className="right-2-column">
        <Image id="june1970" />
      </div>
    </div>
  </Decade>
)
