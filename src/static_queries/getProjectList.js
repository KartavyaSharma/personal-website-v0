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
                                    gatsbyImageData(
                                        blurredOptions: {toFormat: AUTO}
                                        formats: AUTO
                                        layout: CONSTRAINED
                                        placeholder: BLURRED
                                        quality: 100
                                        width: 64
                                        height: 64
                                        transformOptions: {fit: COVER}
                                    )
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
