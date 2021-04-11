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
        if (nextSlug !== undefined && nextSlug !== '') {
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
                <div className='pr-6 md:pr-8 lg:pr-12 xl:pr-20 2xl:pr-36 flex flex-col justify-center'>
                    <div className='text-2xl md:text-3xl lg:text-5xl text-white font-bold'>{data.markdownRemark.frontmatter.title}</div>
                    <div className='text-xl text-trueGray-500 italic mt-4'>{data.markdownRemark.frontmatter.description}</div>
                    <div className='text-white font-semibold text-xl mt-6 mb-6'>{data.markdownRemark.frontmatter.date}</div>
                    <Img
                        src={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid.src}
                        fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
                        alt={data.markdownRemark.frontmatter.title}
                        className='max-h-blogImg'
                    />
                    <div className='pt-16'>
                        <div className='text-white' dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
                    </div>
                    <div className='flex pt-20'>
                        <div className='text-xl text-white pr-4 pt-2'>Tags: </div>
                        {
                            data.markdownRemark.frontmatter.tags.filter(tag => data.markdownRemark.frontmatter.tags !== null)
                                .map(tag => {
                                    return (
                                        <div className='pr-4 pt-1'>
                                            <button className='text-lg rounded-full py-1 px-3 border border-trueGray-600 hover:text-orange-500 text-white'>{tag}</button>
                                        </div>
                                    );
                                })
                        }
                    </div>
                    <Author />
                </div>
            </div>
            <PageFooter />
        </div>
    )
}

export default BlogPost

export const getPostData = graphql`
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
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
    }
`