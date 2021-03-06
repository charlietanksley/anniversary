import React from "react"

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

    <div className="main">
      <div>
        <Image id="cover" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
