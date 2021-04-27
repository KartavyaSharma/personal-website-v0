import React from 'react'
import classNames from 'classnames'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from "../components/Footer"
import BlogHomeList from '../components/BlogHomeList'
import Featured from '../components/Featured'

import pageBlogList from '../static_queries/getBlogPageList'
import featuredPost from '../static_queries/getFeaturedPost'

const headerStyle = "pt-14 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto flex flex-col items-center justify-center";

export default function BlogPage(props) {
    const postListData = pageBlogList();
    const featuredPostData = featuredPost();
    const { currentPage, numPages } = props.pageContext;
    const isFirst = currentPage === 0;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage-1}`;
    const nextPage = `/blog/${currentPage+1}`;

    return(
        <div className='bg-trueGray-900'>
            <Header />
            <div className={classNames(headerStyle, 'mb-12 md:mb-0')}>
                {currentPage === 0 ? <Featured postData={featuredPostData} /> : null}
                {currentPage === 0 ? (
                    <div className='text-white font-semibold text-4xl pb-2 font-mono'>Latest Posts</div>) 
                    : <div className='text-white font-semibold text-4xl pb-2 font-mono'>More Posts</div>}
                <BlogHomeList listData={props.data.allMarkdownRemark.edges}/>
                <div className='flex justify-center items-center'>
                    {!isFirst && (
                        <Link to={prevPage} rel="prev">
                            <button className='bg-trueGray-800 px-3 py-1'>
                                Prev page
                            </button>
                        </Link>
                    )}
                    {!isLast && (
                        <Link to={nextPage} rel="next">
                            <button className='bg-trueGray-800 px-3 py-1'>
                                Next page
                            </button>
                        </Link>
                    )}
                </div>
            </div>
            <Footer isPage={true} />
        </div>
    );
}

export const paginationQuery = graphql`
    query blogPagination($skip: Int!, $limit: Int!) {
        allMarkdownRemark(limit: $limit, skip: $skip, sort: {order: DESC, fields: frontmatter___date}) {
            distinct(field: id)
            edges {
                node {
                    frontmatter {
                        date(formatString: "Do MMMM YYYY")
                        description
                        tags
                        thumbnail {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    formats: AUTO
                                    transformOptions: {fit: COVER}
                                    layout: CONSTRAINED
                                    width: 4000
                                    quality: 100
                                )
                            }
                            relativePath
                        }
                        title
                    }
                    fields {
                        slug
                    }
                    id
                }
            }
        }
    }
`