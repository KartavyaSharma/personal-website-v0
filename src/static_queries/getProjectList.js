import { graphql, useStaticQuery } from 'gatsby';

function GetProjectList() {
    const data = useStaticQuery(
        graphql`
            query getProjectData {
                allProjectDataJson {
                    edges {
                        node {
                            tags
                            projectlink
                            name
                            index
                            img {
                                childImageSharp {
                                    fluid {
                                      ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            id
                            githublink
                            description
                            category
                            alt
                        }
                    }
                }
            }
        `
    );
    return (data.allProjectDataJson.edges);
}

export default GetProjectList
