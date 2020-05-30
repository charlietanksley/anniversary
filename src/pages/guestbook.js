import React from "react"

import Comments from "../components/comments"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Guestbook" />
    <div className="main">
      <Comments />

      <div className="add-message">
        <h2 id="add-message">Add your message to the guestbook</h2>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="guestbook-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label>
              <p className="label">Your Name</p>
              <input type="text" className="name-input" name="name" />
            </label>
          </div>
          <div>
            <label>
              <p className="label">Your Message</p>
              <textarea className="message-input" name="message" />
            </label>
          </div>
          <div>
            <button className="submit-button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default SecondPage
