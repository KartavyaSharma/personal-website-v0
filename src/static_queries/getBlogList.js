import { graphql, useStaticQuery } from "gatsby";

export default function GetBlogList() {
    const data = useStaticQuery(
        graphql`
            query getBlogData {
            allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
              edges {
                node {
                  frontmatter {
                    title
                    description
                    date
                    thumbnail {
                      childImageSharp {
                        fluid(maxWidth: 1000) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    author_info {
                        author_name
                    }
                  }
                }
              }
            }
          }          
        `
    );
    return data.allMarkdownRemark.edges;
}