import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function GetAuthorData () {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        name
        image {
          childImageSharp {
            fluid {
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
