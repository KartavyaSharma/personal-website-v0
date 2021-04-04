import React from 'react'

import BlogList from "../components/BlogList"
import getBlogList from '../static_queries/getBlogList'

function Blog(props) {
  const data = getBlogList();
  return (
    <div className={props.header} id="blog">
      <div className={props.topNum}>03</div>
      <div className={props.topTitle}>My blog</div>
      <div className={props.body}>
        <BlogList listData={data}/>
      </div>
    </div>
  )
}

export default Blog;