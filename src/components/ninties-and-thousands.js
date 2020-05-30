import Decade from "../components/decade"
import FullWidth from "../components/full-width"
import TwoColumn from "../components/two-column"
import React from "react"

export default () => (
  <Decade headerName="1990s and 2000s">
    <TwoColumn right="cedarHills90" left="withJoy90" />
    <TwoColumn right="tree00" left="graveyard00" />
    <TwoColumn right="youngAngayla00" left="wedding00" />
    <TwoColumn right="philly00" left="marathon00" />
    <TwoColumn right="museum00" left="halloween00" />
    <TwoColumn right="christmas00" left="airport00" />
    <FullWidth img="disney00" />
  </Decade>
)
