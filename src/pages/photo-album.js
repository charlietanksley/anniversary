import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import SiteNav from "../components/site-nav"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="two-column">
      <div className="left-2-column">
        <Image id="wedding" />
      </div>
      <div className="right-2-column">
        <Image id="june1970" />
      </div>
    </div>
    <div>
      <Image id="reunion70" />
    </div>
  </Layout>
)

export default SecondPage
