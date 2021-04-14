import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

function BlogList(props) {

    function renderBlogData() {
        return(
            <div>
                {
                    props.listData.filter(blog => blog.node.title !== "")
                    .map(blog => {
                        const img = getImage(blog.node.frontmatter.thumbnail);
                        return(
                            <div className='grid sm:grid-cols-4 lg:grid-cols-3 lg:w-full'>
                                <div className='pt-7 md:pt-10 lg:pt-14 sm:col-span-3 lg:col-span-2'>
                                    <Link to={blog.node.fields.slug} key={blog.node.id} >
                                        <div className='text-2xl md:text-4xl font-semibold pb-3 hover:text-orange-500 hover:cursor-pointer hover:no-underline
                                        hover:transition hover:ease-in-out transform hover:translate-x-4 duration-300'>{blog.node.frontmatter.title}</div>
                                    </Link>
                                    {/* <div className='text-base md:text-xl text-gray-400 italic'>{blog.node.frontmatter.description}</div> */}
                                    <div className='flex'>
                                        {
                                            blog.node.frontmatter.tags.filter(tag => blog.node.frontmatter.tags !== null)
                                            .map(tag => {
                                                return (
                                                    <div className='pr-4 pt-1 hidden md:block'>
                                                        <div className='text-xs rounded-full py-1 px-3 border cursor-default border-trueGray-600 hover:text-orange-500'>{tag}</div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    <div className='sm:text-sm md:text-base text-white font-bold sm:py-px md:py-4'>
                                        By {blog.node.frontmatter.author_info.author_name} | {blog.node.frontmatter.date}
                                    </div>
                                </div>
                                <div className='hidden lg:block'>
                                    <div className='pt-7 md:pt-10 lg:pt-14'></div>
                                    <Link to={blog.node.fields.slug} key={blog.node.id}>
                                        <div className='flex justify-end items-center'>
                                            <GatsbyImage image={img} alt={blog.node.frontmatter.title} className='rounded' />
                                            <div className='pr-7'></div>
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
        <div className='text-white py-8 md:py-12 lg:py-15'>
            <ul>{renderBlogData()}</ul>
        </div>
    )
}

export default BlogList
