import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import getFromAuthor from '../static_queries/getFromAuthor';

export default function FromAuthor() {
    const data = getFromAuthor();
    const img = getImage(data.image);

    return (
        <div className='sticky top-20 max-h-screen ml-5 bg-trueGray-800 rounded'>
            <div className='p-5'>
                <div className='text-white font-mono text-3xl pb-5'>From the author</div>
                <GatsbyImage image={img} alt="From author" className='rounded-full' style={{ maxWidth: "128px" }} />
                <div className='text-white text-base font-blogBody pt-5'>{data.fromAuthor}</div>
            </div>
        </div>
    );
}