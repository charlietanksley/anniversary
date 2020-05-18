import React from "react"
import { Link } from "gatsby"

import Comments from "../components/comments"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteNav from "../components/site-nav"

const SecondPage = () => (
  <Layout>
    <SEO title="Guestbook" />
    <div className="main">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <Comments />
    </div>
  </Layout>
)

export default SecondPage
