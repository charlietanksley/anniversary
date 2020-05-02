import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

/*
https://www.canva.com/learn/website-color-schemes/
Pale Gold: #C0B283
Silk: #DCD0C0
Paper #F4F4F4
Charcoal: #373737
*/
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="home"
      style={{
        display: "grid",
        gridGap: "5px",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "minmax(100px, auto)",
      }}
    >
      <div>
        <p>
          David & Debra
          <br /> Trammel
          <br />
          June 11, 1970
        </p>
      </div>
      <div style={{ gridColumn: "1/2", gridRow: "1/1" }}>
        <Image id="june1970" />
      </div>

      <div
        style={{
          gridColumn: "2/2",
          gridRow: "1/2",
          fontFamily: "cursive",
          fontSize: "3em",
          lineHeight: "1em",
          textAlign: "center",
        }}
      >
        <div
          style={{
            gridColumn: "2/2",
            gridRow: "1/2",
          }}
        >
          <Image id="alaska" />
        </div>
        <div
          style={{
            marginBottom: "0",
            gridColumn: "2/2",
            gridRow: "2/2",
          }}
        >
          <Image id="alaska" />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
