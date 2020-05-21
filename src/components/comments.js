import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allContactCsv {
          edges {
            node {
              name
              message
            }
          }
        }
      }
    `}
    render={data =>
      data.allContactCsv.edges.map((row, i) => (
        <div key={i} className="message-display">
          <p className="message-body">{row.node.message}</p>
          <p className="message-sender">{row.node.name}</p>
        </div>
      ))
    }
  />
)
