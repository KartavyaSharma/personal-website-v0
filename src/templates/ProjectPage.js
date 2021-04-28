import React from 'react'
import { graphql } from 'gatsby'

export default function ProjectPage(props) {
    return(
        <div>
            {props.data.allProjectDataJson.edges[0].node.name}
        </div>
    );
}

export const projectQuery = graphql`
    query projectData($name: String!) {
        allProjectDataJson(filter: { name: { eq: $name } }) {
            edges {
                node {
                    name
                }
            }
        }
    }
`