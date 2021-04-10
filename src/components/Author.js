import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import AuthorData from "../static_queries/getAuthorData"

function Author() {

    const data = AuthorData();

    return (
        <div className='flex flex-row pt-8'>
            <Img
                src={data.image.childImageSharp.fluid.src}
                fluid={data.image.childImageSharp.fluid}
                alt={data.name} className='rounded' />
            <div className='flex flex-col'>
                <h1 className='text-white text-2xl'>{data.name}</h1>
                <p className='text-white text-xl'>{data.bio}</p>
            </div>
        </div>
    )
}

export default Author
