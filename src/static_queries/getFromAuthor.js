import { graphql, useStaticQuery } from 'gatsby'

export default function GetFromAuthor() {
    const data = useStaticQuery(graphql`
        query getFromAuthor {
            authorJson {
                fromAuthor
                image {
                    childImageSharp {
                        gatsbyImageData(
                            formats: AUTO
                            width: 320
                            height: 320
                            transformOptions: {fit: COVER}
                            quality: 100
                            placeholder: BLURRED
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        }      
    `)

    return data.authorJson;
}