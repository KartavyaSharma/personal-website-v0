import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

function BlogList(props) {

    function renderBlogData() {
        return(
            <div className='grid grid-rows-3 justify-center items-center gap-y-7'>
                {
                    props.listData.filter(blog => blog.node.title !== "")
                    .map(blog => {
                        const img = getImage(blog.node.frontmatter.thumbnail);
                        return(
                            <div className='grid grid-cols-3 items-center'>
                                <div className='justify-start items-center col-span-2'>
                                    <Link to={blog.node.fields.slug} key={blog.node.id} >
                                        <div className='text-2xl md:text-4xl font-semibold hover:text-orange-500 hover:cursor-pointer hover:no-underline
                                        hover:transition hover:ease-in-out transform hover:translate-x-4 duration-300'>{blog.node.frontmatter.title}</div>
                                    </Link>
                                    {/* <div className='text-base md:text-xl text-gray-400 italic'>{blog.node.frontmatter.description}</div> */}
                                    <div className='flex'>
                                        {
                                            blog.node.frontmatter.tags.filter(tag => blog.node.frontmatter.tags !== null)
                                            .map(tag => {
                                                return (
                                                    <div className='pr-4 py-4 hidden md:block'>
                                                        <div className='text-xs rounded px-2 py-0.5 border border-trueGray-800 cursor-default bg-trueGray-700 text-white'>{tag}</div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    <div className='sm:text-sm md:text-base text-white font-bold'>
                                        By {blog.node.frontmatter.author_info.author_name} | {blog.node.frontmatter.date}
                                    </div>
                                </div>
                                <div className='hidden lg:block justify-center items-center col-span-1'>
                                    <Link to={blog.node.fields.slug} key={blog.node.id}>
                                        <div className='flex justify-end items-center'>
                                            <GatsbyImage image={img} alt={blog.node.frontmatter.title} className='rounded' />
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
        <div className='text-white py-8 md:py-12 lg:py-15 max-w-full flex flex-col'>
            <ul>{renderBlogData()}</ul>
        </div>
    )
}

export default BlogList
