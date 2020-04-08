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
        <p key={i}>
          {row.node.message} - {row.node.name}
        </p>
      ))
    }
  />
)
