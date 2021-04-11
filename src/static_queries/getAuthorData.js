import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function GetAuthorData () {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        name
        image {
          childImageSharp {
            fluid(maxWidth: 320 maxHeight: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bio
      }
    }
  `);
  return data.dataJson
}
