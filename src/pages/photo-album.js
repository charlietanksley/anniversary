import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SeventiesAndEighties from "../components/seventies-and-eighties"
import NintiesAndThousands from "../components/ninties-and-thousands"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="main">
      <SeventiesAndEighties />
      <NintiesAndThousands />
    </div>
  </Layout>
)

export default SecondPage
