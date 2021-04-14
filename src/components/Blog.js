import React from 'react'
import { Link } from 'gatsby'

import BlogList from '../components/BlogList'
import getBlogList from '../static_queries/getBlogList'

function Blog(props) {
  const data = getBlogList();
  return (
    <div className={props.header} id="blog" data-sal="zoom-out" data-sal-easing="ease" data-sal-duration="1000">
      <div className={props.topNum}>03</div>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center'>
          <div className={props.topTitle}>My blog</div>
          <div className='font-semibold text-white text-sm md:text-2xl lg:text-3xl pl-2 md:pl-5'>| Latest Posts</div>
        </div>
      </div>
      <div>
        <BlogList listData={data} />
      </div>
      <div className='mt-10'>
        <Link to='/blog'>
          <button className='px-4 py-3 font-semibold text-lg hover:bg-orange-500 bg-trueGray-800 rounded-md text-white'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-center items-center'>
                View blog
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" className='ml-4'>
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Blog;