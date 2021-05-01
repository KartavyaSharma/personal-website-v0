import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import AuthorData from "../static_queries/getAuthorData"

function Author() {

    const data = AuthorData();

    return (
        <div className='flex flex-col font-mono pb-8 pt-0 md:pt-4'>
            <div className='flex items-center'>
                <Img
                    src={data.image.childImageSharp.fluid.src}
                    fluid={data.image.childImageSharp.fluid}
                    alt={data.name} className='rounded-full w-9'/>
                <Link to="/#about-me" className='text-white text-xl pl-4 hover:underline hover:text-orange-500'>by {data.name}</Link>
            </div>
        </div>
    )
}

export default Author
