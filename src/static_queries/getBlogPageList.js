import { graphql, useStaticQuery } from 'gatsby'

export default function BlogPageList() {
    const data = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(limit: 10, sort: {order: DESC, fields: frontmatter___date}, skip: 1) {
                distinct(field: id)
                edges {
                    node {
                        frontmatter {
                            date(formatString: "Do MMMM YYYY")
                            description
                            tags
                            thumbnail {
                                childImageSharp {
                                    gatsbyImageData(
                                        placeholder: DOMINANT_COLOR
                                        formats: AUTO
                                        transformOptions: {fit: COVER}
                                        layout: CONSTRAINED
                                        width: 200
                                        height: 133
                                        quality: 100
                                    )
                                }
                                relativePath
                            }
                            title
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