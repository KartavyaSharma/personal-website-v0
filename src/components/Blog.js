import React from 'react'
import { Link } from 'gatsby'

import IndexLayout from '../components/layout/IndexLayout'

import BlogList from '../components/BlogList'
import getBlogList from '../static_queries/getBlogList'

function Blog() {
    const data = getBlogList();
    return (
        <IndexLayout ident='blog' idx="04" name="Blog">
            <div data-sal="zoom-out" data-sal-easing="ease" data-sal-duration="1000">
                <div>
                    <BlogList listData={data} />
                </div>
                <div className='mt-2 mb-10 md:mb-0'>
                    <Link to='/blog'>
                        <button className='px-2 py-1.5 md:px-3 md:py-2 font-semibold text-base hover:bg-orange-500 bg-trueGray-800 rounded-md text-white outline-none'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row justify-center items-center font-mono'>
                                    View all posts
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" className='ml-1 md:ml-2'>
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </IndexLayout>
    )
}

export default Blog;