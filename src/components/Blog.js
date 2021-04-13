import React from 'react'

import BlogList from "../components/BlogList"
import getBlogList from '../static_queries/getBlogList'

function Blog(props) {
  const data = getBlogList();
  return (
    <div className={props.header} id="blog" data-sal="zoom-out" data-sal-easing="ease" data-sal-duration="1000">
      <div className={props.topNum}>03</div>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center'>
          <div className={props.topTitle}>My blog</div>
          <div className='font-semibold text-white text-2xl md:text-3xl pl-5'>| Latest Posts</div>
        </div>
      </div>
      <div>
        <BlogList listData={data}/>
      </div>
    </div>
  )
}

export default Blog;