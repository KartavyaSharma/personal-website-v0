import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import getFromAuthor from '../static_queries/getFromAuthor';

export default function FromAuthor() {
    const data = getFromAuthor();
    const img = getImage(data.image);

    return (
        <div className='max-h-screen ml-5 rounded-lg border border-hover-bg shadow-xl bg-hover-bg'>
            <div className='p-5'>
                {/* <GatsbyImage image={img} alt="From author" className='rounded-full' style={{ maxWidth: "128px" }} /> */}
                <div className='text-white text-opacity-80 font-mono text-3xl'>From the author</div>
                <div className='text-white text-opacity-80 text-base font-blogBody pt-5'>{data.fromAuthor}</div>
            </div>
        </div>
    );
}