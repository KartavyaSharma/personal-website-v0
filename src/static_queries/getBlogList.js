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
                    author_info {
                        author_name
                        author_bio
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