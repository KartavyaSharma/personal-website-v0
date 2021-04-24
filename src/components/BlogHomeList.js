import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import authorData from "../static_queries/getAuthorData"

function BlogHomeList(props) {

    const data = authorData();

    function renderBlogPostList() {
        return (
            <div className='grid grid-rows-3 justify-center items-center gap-y-7'>
                {
                    props.listData.filter(post => post.node.frontmatter.title !== "")
                    .map(post => {
                        const img = getImage(post.node.frontmatter.thumbnail);
                        return (
                            <div className='grid grid-cols-3 items-center'>
                                    <div className='justify-start items-center gap-y-4 col-span-2'>
                                        <Link to={post.node.fields.slug} key={post.node.id}>
                                            <div className='text-base md:text-3xl pr-3 font-blogBody hover:text-orange-500 hover:cursor-pointer hover:no-underline
                                            transition-none md:hover:transition hover:ease-in-out transform hover:translate-x-4 duration-300 max opacity-80'>{post.node.frontmatter.title}</div>
                                        </Link>
                                        <div className='text-sm pt-2 md:p-0 text-white font-bold text-opacity-80 flex'>
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
            <div>{renderBlogPostList()}</div>
        </div>
    )
}

export default BlogHomeList
