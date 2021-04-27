import React from 'react'
import classNames from 'classnames'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Header from '../components/Header'
import Footer from "../components/Footer"
import BlogHomeList from '../components/BlogHomeList'
import Featured from '../components/Featured'

import featuredPost from '../static_queries/getFeaturedPost'

const headerStyle = "pt-14 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto flex flex-col items-center justify-center";

export default function BlogPage(props) {
    const featuredPostData = featuredPost();
    const { currentPage, numPages } = props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 <= 1 ? '/blog' : `/blog/${currentPage - 1}`;
    const nextPage = `/blog/${currentPage + 1}`;

    return (
        <div className='bg-trueGray-900'>
            <Header />
            <div className={classNames(headerStyle, 'mb-12 md:mb-0')}>
                {currentPage === 1 ? <Featured postData={featuredPostData} /> : null}
                {currentPage === 1 ? (
                    <div className='text-white font-semibold text-4xl pb-2 font-mono' id='post-anchor'>Latest Posts</div>)
                    : <div className='text-white font-semibold text-4xl pb-2 font-mono' id='post-anchor'>More Posts</div>}
                <BlogHomeList listData={props.data.allMarkdownRemark.edges} />
                <div className='flex justify-center items-center'>
                    {true && (
                        <Link to={isFirst ? '' : `${prevPage}#post-anchor`} rel="prev" className={`${isFirst ? 'pointer-events-none' : ''}`}>
                            <button className={`bg-trueGray-800 px-3 py-1 flex rounded mr-1 ${isFirst ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`} disabled={isFirst}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                                {/* <div className='text-white'>Previous Page</div> */}
                            </button>
                        </Link>
                    )}
                    {true && (
                        <Link disabled={isLast} to={isLast ? '' : `${nextPage}#post-anchor`} rel="next" className={`${isLast ? 'pointer-events-none' : ''}`}>
                            <button className={`bg-trueGray-800 px-3 py-1 flex rounded ml-1 ${isLast ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`} disabled={isLast}>
                                {/* <div className='text-white'>Next Page</div> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
            <Footer isPage={true} paginationAnim={currentPage === 1 ? true : false} />
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
                                    width: 200
                                    height: 133
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