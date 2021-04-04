import React from 'react'
import { graphql } from 'gatsby'

import BlogList from "../components/BlogList"

function Blog(props) {
    return (
        <div className={props.header} id="blog">
            <div className={props.topNum}>03</div>
            <div className={props.topTitle}>My blog</div>
            <div className={props.body}>
                <BlogList />
            </div>
        </div>
    )
}

export default Blog;