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

      atChurch80: file(relativePath: { eq: "1980/80-at-church.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      davidPhd80: file(relativePath: { eq: "1980/80-david-phd.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      debraHat80: file(relativePath: { eq: "1980/80-debra-hat.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fireplace80: file(relativePath: { eq: "1980/80-fireplace.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frontOfHouse80: file(relativePath: { eq: "1980/80-front-of-house.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smyrna80: file(relativePath: { eq: "1980/80-smyrna.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sofa80: file(relativePath: { eq: "1980/80-sofa.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whiteHat80: file(relativePath: { eq: "1980/80-white-hat.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yellowSweater80: file(
        relativePath: { eq: "1980/80-yellow-sweater.JPG" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cedarHills90: file(relativePath: { eq: "1990/90-cedar-hills.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      withJoy90: file(relativePath: { eq: "1990/90-with-joy.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      airport00: file(relativePath: { eq: "2000/00-airport.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      christmas00: file(relativePath: { eq: "2000/00-christmas.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      disney00: file(relativePath: { eq: "2000/00-disney.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graveyard00: file(relativePath: { eq: "2000/00-graveyard.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      halloween00: file(relativePath: { eq: "2000/00-halloween.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marathon00: file(relativePath: { eq: "2000/00-marathon.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      museum00: file(relativePath: { eq: "2000/00-museum.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      philly00: file(relativePath: { eq: "2000/00-philly.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tree00: file(relativePath: { eq: "2000/00-tree.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wedding00: file(relativePath: { eq: "2000/00-wedding.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youngAngayla00: file(relativePath: { eq: "2000/00-young-angayla.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      alaska10: file(relativePath: { eq: "2010/10-alaska.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bar10: file(relativePath: { eq: "2010/10-bar.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beachCrew10: file(relativePath: { eq: "2010/10-beach-crew.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beachSellfie10: file(relativePath: { eq: "2010/10-beach-sellfie.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beaufort10: file(relativePath: { eq: "2010/10-beaufort.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      christmasDd10: file(relativePath: { eq: "2010/10-christmas-dd.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      christmasSid10: file(relativePath: { eq: "2010/10-christmas-sid.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      classOf7010: file(relativePath: { eq: "2010/10-class-of-70.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      daisy10: file(relativePath: { eq: "2010/10-daisy.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      disney10: file(relativePath: { eq: "2010/10-disney.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      easter10: file(relativePath: { eq: "2010/10-easter.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fourtyfifth10: file(relativePath: { eq: "2010/10-fourtyfifth.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fullLength10: file(relativePath: { eq: "2010/10-full-length.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      funeral10: file(relativePath: { eq: "2010/10-funeral.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatlinbergTyler10: file(
        relativePath: { eq: "2010/10-gatlinberg-tyler.JPG" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grandkids10: file(relativePath: { eq: "2010/10-grandkids.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pacific10: file(relativePath: { eq: "2010/10-pacific.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portraintSmiles10: file(
        relativePath: { eq: "2010/10-portraint-smiles.JPG" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portrait10: file(relativePath: { eq: "2010/10-portrait.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quilt10: file(relativePath: { eq: "2010/10-quilt.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      selfie10: file(relativePath: { eq: "2010/10-selfie.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tanksleyHouse10: file(
        relativePath: { eq: "2010/10-tanksley-house.JPG" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wholeCrew10: file(relativePath: { eq: "2010/10-whole-crew.JPG" }) {
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
