import React from 'react'
import { graphql, Link } from 'gatsby'
import allBlogdata from "../static_queries/getBlogList"
import Img from 'gatsby-image'

import Header from "../components/Header"
import PageFooter from "../components/PageFooter"
import Author from "../components/Author"

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
            <div className="py-6 md:py-10 lg:pb-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono flex flex-col">
                <div className='px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl text-white font-bold'>{data.markdownRemark.frontmatter.title}</h1>
                    <p className='text-xl text-trueGray-500 italic mt-4'>{data.markdownRemark.frontmatter.description}</p>
                    <p className='text-white font-semibold text-xl mt-6'>{data.markdownRemark.frontmatter.date}</p>
                    <div className='pt-6'>
                        <div className='text-white text-xl' dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
                    </div>
                    <Author />
                </div>
            </div>
            <PageFooter />
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
                title
                date(formatString: "Do MMMM YYYY")
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