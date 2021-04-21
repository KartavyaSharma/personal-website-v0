import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import AuthorData from "../static_queries/getAuthorData"

function Author() {

    const data = AuthorData();

    return (
        <div className='flex flex-col pt-10 font-mono'>
            <div className='flex items-center pb-6'>
                <Img
                    src={data.image.childImageSharp.fluid.src}
                    fluid={data.image.childImageSharp.fluid}
                    alt={data.name} className='rounded-full w-16'/>
                <Link to="/#about-me" className='text-white text-2xl pl-6 hover:underline hover:text-orange-500'>{data.name}</Link>
            </div>
            <div className='text-white text-xl pb-20'>{data.bio}</div>
        </div>
    )
}

export default Author
