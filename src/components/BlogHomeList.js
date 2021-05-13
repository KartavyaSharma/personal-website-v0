import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import authorData from "../static_queries/getAuthorData"
import featuredPost from '../static_queries/getFeaturedPost'

function BlogHomeList(props) {

    const featuredPostData = featuredPost();
    const data = authorData();

    const [isMobile, setIsMobile] = useState(undefined);
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    function renderBlogPostList() {
        return (
            <div className={`grid grid-rows-${props.listData.length - 1 < 4 ? props.listData.length - 1 : 4} items-center gap-y-7`}>
                {
                    props.listData.filter(post => (post.node.frontmatter.title !== "" && featuredPostData[0].node.frontmatter.title !== post.node.frontmatter.title))
                    .map(post => {
                        const img = getImage(post.node.frontmatter.thumbnail);
                        return (
                            <div className='grid grid-cols-3 items-center'>
                                    <div className='justify-start items-center gap-y-4 col-span-2'>
                                        <Link to={post.node.fields.slug} key={post.node.id}>
                                            <div className={`text-base md:text-2xl font-semibold pr-3 hover:text-orange-500 hover:cursor-pointer hover:no-underline opacity-80 hover:opacity-100
                                                ${ !isMobile ? 'hover:transition hover:ease-in-out transform hover:translate-x-4 duration-300' : '' }`}>
                                                {post.node.frontmatter.title}
                                            </div>
                                        </Link>
                                        <div className='text-sm pt-2 md:p-0 md:pt-3 text-white text-opacity-60 flex'>
                                            <span className='hidden md:block pr-1'>By {data.name} |</span> {post.node.frontmatter.date}
                                        </div>
                                    </div>
                                    <div className='justify-center items-center col-span-1'>
                                        <Link to={post.node.fields.slug} key={post.node.id}>
                                            <div className='flex justify-end items-center'>
                                                <GatsbyImage image={img} alt={post.node.frontmatter.title} className='rounded' />
                                            </div>
                                        </Link>
                                    </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    return (
        <div className='text-white py-8 md:py-12 lg:py-15 max-w-4xl flex flex-col'>
            <div className='w-full'>{renderBlogPostList()}</div>
        </div>
    )
}

export default BlogHomeList
