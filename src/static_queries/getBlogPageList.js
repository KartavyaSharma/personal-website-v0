import { graphql, useStaticQuery } from 'gatsby'

export default function BlogPageList() {
    const data = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(limit: 10, sort: {order: DESC, fields: frontmatter___date}) {
              distinct(field: id)
              edges {
                node {
                  frontmatter {
                    author_info {
                      author_name
                    }
                    date(formatString: "Do MMMM YYYY")
                    description
                    tags
                    thumbnail {
                      childImageSharp {
                        fluid(quality: 100, maxHeight: 100, maxWidth: 100, pngQuality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                      relativePath
                    }
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