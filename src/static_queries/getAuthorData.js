import { useStaticQuery, graphql } from "gatsby"

export default function GetAuthorData () {
  const data = useStaticQuery(graphql`
    {
      authorJson {
        name
        image {
          childImageSharp {
            fluid(maxWidth: 320 maxHeight: 320 quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bio
      }
    }
  `);
  return data.authorJson
}
