import React, { useState, useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import hidden from '../data/config/config'

export default function Featured(props) {

    const [isMobile, setIsMobile] = useState(undefined);
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        const toggleMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', toggleMobile);

        return () => {
            window.removeEventListener('resize', toggleMobile);
        }
    }, [])

    function renderFeaturedPost() {
        return(
            <div>
                {
                    props.postData.filter(post => (!hidden.names.includes(post.node.frontmatter.title))).map(post => {
                        const img = getImage(post.node.frontmatter.thumbnail);
                        const compare = isMobile ? 100 : 150;
                        if(post.node.frontmatter.description.length > compare) {
                            post.node.frontmatter.description = post.node.frontmatter.description.substr(0, compare - 1) + '...'
                        }
                        return(
                            <div className=''>
                                <div className='absolute z-30 border border-hover-bg text-white font-semibold text-xl md:text-2xl bg-hover-bg px-4 py-2 shadow-xl rounded-t-lg rounded-r-lg' style={{ marginTop: '-24px'}}>
                                    Featured Post
                                </div>
                                <div className='flex flex-col relative z-10 rounded-lg bg-hover-bg shadow-xl'>
                                    <Link to={post.node.fields.slug} key={post.node.id}>
                                        <GatsbyImage image={img} alt={post.node.frontmatter.title} className='max-h-featured rounded-t-lg' />
                                    </Link>
                                    <div className='flex flex-col p-4 md:p-8'>
                                        <div className='text-xs md:text-sm text-white text-opacity-80 font-blogBody pl-4'>{post.node.frontmatter.date}</div>
                                        <Link to={post.node.fields.slug} key={post.node.id} className='text-white group'>
                                            <div className='text-xl md:text-2xl font-bold text-white text-opacity-80 font-blogBody p-4 group-hover:text-highlight'>{post.node.frontmatter.title}</div>
                                            <div className='text-sm md:text-base italic pl-4 pb-4 pr-4 group-hover:text-highlight'>{post.node.frontmatter.description}</div>
                                        </Link>
                                        <div className='flex pl-4'>
                                            {
                                                post.node.frontmatter.tags.map(tag => {
                                                    return(
                                                    <div className='pr-2 hidden md:block'>
                                                        <div className='text-xs rounded px-2 py-0.5 border border-highlight cursor-default text-white opacity-80'>{tag}</div>
                                                    </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    return(
        <div className='max-w-4xl mb-10 md:mb-15'>
            {renderFeaturedPost()}
        </div>
    );
}