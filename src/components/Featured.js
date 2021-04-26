import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Featured(props) {

    function renderFeaturedPost() {
        return(
            <div>
                {
                    props.postData.map(post => {
                        const img = getImage(post.node.frontmatter.thumbnail);
                        return(
                            <div className='w-full'>
                                <GatsbyImage image={img} alt={post.node.frontmatter.title} className='max-w-screen-xl max-h-featured relative bg-opacity-80 rounded featuredImage' />
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    return(
        <div className='w-full relative'>
            {renderFeaturedPost()}
        </div>
    );
}