import { graphql, useStaticQuery } from 'gatsby'

function GetWorkData() {
    const data = useStaticQuery(graphql`
        {
            allWorkDataJson {
                edges {
                    node {
                        company
                        position
                        companyLogo {
                            childImageSharp {
                                gatsbyImageData(
                                    blurredOptions: {toFormat: AUTO}
                                    formats: AUTO
                                    layout: CONSTRAINED
                                    placeholder: DOMINANT_COLOR
                                    quality: 100
                                    transformOptions: {fit: COVER}
                                    height: 64
                                    width: 64
                                )
                            }
                        }
                        alt
                        dates {
                            start
                            end
                        }
                        companyWebsite
                        roleDescription
                    }
                }
            }
        }
    `)

    return data.allWorkDataJson.edges;
}

export default GetWorkData