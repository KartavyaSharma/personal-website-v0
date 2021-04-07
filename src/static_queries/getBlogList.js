import { graphql, useStaticQuery } from "gatsby";

export default function GetBlogList() {
    const data = useStaticQuery(
        graphql`
          query MyQuery {
            allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
              edges {
                node {
                  frontmatter {
                    author_info {
                      author_name
                    }
                    date(formatString: "Do MMMM YYYY")
                    description
                    title
                    thumbnail {
                      childImageSharp {
                        gatsbyImageData(
                          placeholder: DOMINANT_COLOR
                          formats: AUTO
                          transformOptions: {fit: COVER}
                          layout: CONSTRAINED
                          width: 300
                          height: 200
                        )
                      }
                      relativePath
                    }
                    tags
                  }
                  fields {
                    slug
                  }
                  id
                }
              }
            }
          }                  
        `
    );
    return data.allMarkdownRemark.edges;
}