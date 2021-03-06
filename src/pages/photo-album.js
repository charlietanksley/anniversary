import React from "react"

import Layout from "../components/layout"
import NintiesAndThousands from "../components/ninties-and-thousands"
import SEO from "../components/seo"
import SeventiesAndEighties from "../components/seventies-and-eighties"
import Teens from "../components/teens"

const PhotoAlbum = () => (
  <Layout>
    <SEO title="Photo Album" />
    <div className="main">
      <SeventiesAndEighties />
      <NintiesAndThousands />
      <Teens />
    </div>
  </Layout>
)

export default PhotoAlbum
