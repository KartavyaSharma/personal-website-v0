import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function BlogHomeList(props) {

    function renderBlogPostList() {
        return (
            <div>
                {
                    props.listData.filter(post => post.node.frontmatter.title !== "")
                    .map(post => {
                        const img = getImage(post.node.frontmatter.thumbnail);
                        return (
                            <div className='max-w-4xl flex flex-col justify-center'>
                                <div className='grid sm:grid-cols-4 lg:grid-cols-3'>
                                    <div className='pt-7 md:pt-10 lg:pt-14 sm:col-span-3 lg:col-span-2'>
                                        <Link to={post.node.fields.slug} key={post.node.id} >
                                            <div className='text-2xl md:text-3xl font-semibold hover:text-orange-500 hover:cursor-pointer hover:no-underline
                                            hover:transition hover:ease-in-out transform hover:translate-x-4 duration-300'>{post.node.frontmatter.title}</div>
                                        </Link>
                                        {/* <div className='text-base md:text-xl text-gray-400 italic'>{blog.node.frontmatter.description}</div> */}
                                        {/* <div className='flex'>
                                            {
                                                post.node.frontmatter.tags.filter(tag => post.node.frontmatter.tags !== null)
                                                .map(tag => {
                                                    return (
                                                        <div className='pr-4 pt-1 hidden md:block'>
                                                            <div className='text-xs rounded-full py-1 px-3 border cursor-default border-trueGray-600 hover:text-orange-500'>{tag}</div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div> */}
                                        <div className='sm:text-sm md:text-base text-white font-bold sm:py-px md:py-4'>
                                            By {post.node.frontmatter.author_info.author_name} | {post.node.frontmatter.date}
                                        </div>
                                    </div>
                                    <div className='hidden lg:block'>
                                        <div className='pt-7 md:pt-10 lg:pt-14'></div>
                                        <Link to={post.node.fields.slug} key={post.node.id}>
                                            <div className='flex justify-end items-center'>
                                                <GatsbyImage image={img} alt={post.node.frontmatter.title} className='rounded' />
                                                <div className='pr-7'></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    return (
        <div className='text-white py-8 md:py-12 lg:py-15'>
            <ul>{renderBlogPostList()}</ul>
        </div>
    )
}

export default BlogHomeList
