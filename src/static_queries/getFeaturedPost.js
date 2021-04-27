import { graphql, useStaticQuery } from 'gatsby'

export default function GetFeaturedPost() {
    const data = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(limit: 1, sort: {order: DESC, fields: frontmatter___date}) {
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
                                        placeholder: BLURRED
                                        formats: AUTO
                                        transformOptions: {fit: COVER}
                                        layout: CONSTRAINED
                                        width: 4000
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