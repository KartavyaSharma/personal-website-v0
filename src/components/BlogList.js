import React, { useEffect, useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import authorData from "../static_queries/getAuthorData"
import hidden from '../data/config/config'

function BlogList(props) {

    const [isMobile, setIsMobile] = useState(undefined);
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    const data = authorData();
    const hiddenData = hidden.names;
    let finalList = props.listData.filter(post => (!hiddenData.includes(post.node.frontmatter.title))).map(post => {
        return post;
    });
    finalList = finalList.slice(0, 3);

    function renderBlogData() {
        return(
            <div className={`grid grid-rows-${props.listData.length - hiddenData.length < 3 ? props.listData.length - hiddenData.length : '3'} items-center gap-y-5 md:gap-y-7 min-w-full`}>
                {
                    finalList.map(blog => {
                        const img = getImage(blog.node.frontmatter.thumbnail);
                        return(
                            <div className='grid grid-cols-3 items-center'>
                                <div className='justify-start items-center col-span-2'>
                                    <Link to={blog.node.fields.slug} key={blog.node.id} >
                                        <div 
                                        className={`text-base md:text-2xl pr-3 font-semibold hover:text-highlight hover:cursor-pointer hover:no-underline opacity-80 hover:opacity-100 
                                            ${ !isMobile ? 'hover:transition hover:ease-in-out transform hover:translate-x-4 duration-300' : ''}`}>
                                            {blog.node.frontmatter.title}
                                        </div>
                                    </Link>
                                    {/* <div className='text-base md:text-xl text-gray-400 italic'>{blog.node.frontmatter.description}</div> */}
                                    <div className='flex'>
                                        {
                                            blog.node.frontmatter.tags.filter(tag => blog.node.frontmatter.tags !== null)
                                            .map(tag => {
                                                return (
                                                    <div className='pr-4 py-4 hidden md:block'>
                                                        <div className='text-xs rounded px-2 py-0.5 border border-border cursor-default text-white opacity-80'>{tag}</div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    <div className='text-sm pt-2 md:p-0 text-white text-opacity-60 flex'>
                                        <span className='hidden md:block pr-1'>By {data.name} |</span> {blog.node.frontmatter.date}
                                    </div>
                                </div>
                                <div className='justify-end items-center col-span-1'>
                                    <Link to={blog.node.fields.slug} key={blog.node.id}>
                                        <div className='flex justify-end items-start md:items-center'>
                                            <GatsbyImage image={img} alt={blog.node.frontmatter.title} className='rounded h-full' />
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
        <div className='text-white -mt-5 mb-5 md:mb-8 lg:mb-10 max-w-full'>
            <ul>{renderBlogData()}</ul>
        </div>
    )
}

export default BlogList
