import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "COVER.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      babyJoy70: file(relativePath: { eq: "1970/70-baby-joy.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      dogAndBaby70: file(relativePath: { eq: "1970/70-dog-and-baby.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      familyByFireplace70: file(
        relativePath: { eq: "1970/70-family-by-fireplace.JPG" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      juneInFullDress70: file(
        relativePath: { eq: "1970/70-june-in-full-dress.JPG" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      pinning70: file(relativePath: { eq: "1970/70-pinning.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      ringWeekendOffice70: file(
        relativePath: { eq: "1970/70-ring-weekend-office.JPG" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ringWeekend70: file(relativePath: { eq: "1970/70-ring-weekend.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      saberArch70: file(relativePath: { eq: "1970/70-saber-arch.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      sightseeing70: file(relativePath: { eq: "1970/70-sightseeing.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      vampires70: file(relativePath: { eq: "1970/70-vampires.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      wedding70: file(relativePath: { eq: "1970/70-wedding.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whiteTie70: file(relativePath: { eq: "1970/70-white-tie.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      withIngrums70: file(relativePath: { eq: "1970/70-with-ingrums.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      withTrammels70: file(relativePath: { eq: "1970/70-with-trammels.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yellowDress70: file(relativePath: { eq: "1970/70-yellow-dress.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      alaska: file(relativePath: { eq: "alaska.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      june1970: file(relativePath: { eq: "june-1970.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reunion70: file(relativePath: { eq: "reunion-class-of-70.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wedding: file(relativePath: { eq: "wedding.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      withJoy90s: file(relativePath: { eq: "with-joy-90s.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data[props.id].childImageSharp.fluid} />
}

export default Image
