import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Form Submission" />
    <div className="main">
      <h1>Thank you!</h1>
      <p>
        Your message has been recieved and it will appear on the guestbook
        within 24 hours.
      </p>
    </div>
  </Layout>
)

export default Success
