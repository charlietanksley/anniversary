import Decade from "../components/decade"
import FullWidth from "../components/full-width"
import TwoColumn from "../components/two-column"
import Image from "../components/image"
import React from "react"

export default () => (
  <Decade headerName="1970s and 1980s">
    <TwoColumn right="pinning70" left="ringWeekendOffice70" />
    <TwoColumn right="ringWeekend70" left="juneInFullDress70" />
    <TwoColumn right="yellowDress70" left="whiteTie70" />
    <TwoColumn right="wedding70" left="saberArch70" />
    <TwoColumn right="withIngrums70" left="withTrammels70" />
    <FullWidth img="sightseeing70" />
    <FullWidth img="dogAndBaby70" />
    <FullWidth img="babyJoy70" />
    <FullWidth img="familyByFireplace70" />
    <TwoColumn right="vampires70" left="vampires70" />
  </Decade>
)
