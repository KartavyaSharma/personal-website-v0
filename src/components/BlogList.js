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
                            <Link to={blog.node.fields.slug} key={blog.node.id}>
                                <div className='border-b-2 border-dashed border-green-500 lg:border-none lg:grid lg:grid-cols-3'>
                                    <div className='pt-7 md:pt-10 lg:pt-14 lg:col-span-2'>
                                        <div className='text-2xl md:text-4xl font-semibold pb-4'>{blog.node.frontmatter.title}</div>
                                        <div className='text-base md:text-xl text-gray-400 italic'>{blog.node.frontmatter.description}</div>
                                        <div className='text-lg md:text-base text-white font-bold py-4'>
                                            By {blog.node.frontmatter.author_info.author_name} | {blog.node.frontmatter.date}
                                        </div>
                                    </div>
                                    <div className='hidden lg:block'>
                                        <div className='pt-7 md:pt-10 lg:pt-14'></div>
                                        <div className='flex justify-end items-center'>
                                            <GatsbyImage image={img} alt={blog.node.frontmatter.title} className='border border-white' />
                                            <div className='pr-7'></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
    return (
        <div className='text-white py-8 md:py-12 lg:py-15'>
            <div className='font-semibold text-3xl md:text-5xl border-b-2 border-green-500 pb-3'>Latest Posts</div>
            <ul>{renderBlogData()}</ul>
        </div>
    )
}

export default BlogList
