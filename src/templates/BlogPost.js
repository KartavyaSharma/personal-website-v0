import React from 'react'
import { graphql, Link } from 'gatsby'
import allBlogdata from "../static_queries/getBlogList"
import Img from 'gatsby-image'

import Header from "../components/Header"

function BlogPost({ data }) {
    const allData = allBlogdata();

    function getNextSlug(slug) {
        const allSlugs = allData.map(blog => {
            return blog.node.fields.slug
        })
        const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
        if(nextSlug !== undefined && nextSlug !== '') {
            return nextSlug
        } else {
            return allSlugs[0]
        }
    }

    const nextSlug = getNextSlug(data.markdownRemark.fields.slug)

    return (
        <div className='bg-trueGray-900'>
            <Header />            
        </div>
    )
}

export default BlogPost

export const getPostData = graphql `
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            fields {
                slug
            }
            frontmatter {
                author_info {
                    author_name
                    author_bio
                }
                date
                description
                tags
                thumbnail {
                    childImageSharp {
                        fluid {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
    }
`