import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProjectPage(props) {
    return(
        <div className='bg-trueGray-900'>
            <Header />
            <Footer isPage={true} />
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