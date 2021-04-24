import React from 'react'
import { Link } from 'gatsby'

import BlogList from '../components/BlogList'
import getBlogList from '../static_queries/getBlogList'

function Blog(props) {
    const data = getBlogList();
    return (
        <div className={props.header} id="blog">
            <div data-sal="slide-right" data-sal-easing="ease" data-sal-duration="1000">
                <div className={props.topNum}>03</div>
                <div className='flex flex-col'>
                    <div className='flex md:flex-row md:items-center flex-col items-start'>
                        <div className={props.topTitle}>My blog</div>
                        <div className='font-semibold text-white text-base md:text-2xl lg:text-3xl pt-3 md:pt-0 md:pl-5 flex'><span className='hidden md:block pr-2'>|</span> Latest Posts</div>
                    </div>
                </div>
            </div>
            <div data-sal="zoom-out" data-sal-easing="ease" data-sal-duration="1000">
                <div>
                    <BlogList listData={data} />
                </div>
                <div className='mt-2 mb-12 md:mt-10 md:mb-0'>
                    <Link to='/blog'>
                        <button className='px-2 py-1.5 md:px-4 md:py-3 font-semibold text-base md:text-lg hover:bg-orange-500 bg-trueGray-800 rounded-md text-white'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row justify-center items-center'>
                                    View blog
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" className='ml-1 md:ml-4'>
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Blog;