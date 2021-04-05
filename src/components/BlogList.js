import React from 'react'
import Img from 'gatsby-plugin-image'

function BlogList(props) {

    function renderBlogData() {
        return(
            <div>
                {
                    props.listData.filter(blog => blog.node.title !== "")
                    .map(blog => {
                        return(
                            <div className='flex'>
                                <div className='pt-4 pr-8'>
                                    <div className='text-2xl md:text-4xl font-semibold'>{blog.node.frontmatter.title}</div>
                                    <div className='text-base md:text-xl text-gray-400 italic'>{blog.node.frontmatter.description}</div>
                                    <div className='text-lg md:text-base text-white font-bold py-4'>By {blog.node.frontmatter.author_info.author_name}</div>
                                </div>

                            </div>
                        );
                    })
                }
            </div>
        );
    }
    return (
        <div className='text-white py-10 md:py-14 lg:py-20'>
            <ul>{renderBlogData()}</ul>
        </div>
    )
}

export default BlogList
