import React from 'react'
import { graphql } from 'gatsby'

function blog(props) {
    return (
        <div className={props.header} id="blog">
            <div className={props.topNum}>03</div>
            <div className={props.topTitle}>My blog</div>
            <div className={props.body}>
                {props.blogData.markdownRemark.frontmatter.title}
            </div>
        </div>
    )
}

export default blog;