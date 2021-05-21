import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { graphql, Link } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'

import Header from '../components/Header'
import Footer from "../components/Footer"
import FromAuthor from '../components/FromAuthor'
import BlogHomeList from '../components/BlogHomeList'
import Featured from '../components/Featured'
import SearchResults from '../components/SearchResults'
import SEO from '../components/SEO'
import ShareIcons from '../components/ShareIcons'

import featuredPost from '../static_queries/getFeaturedPost'
import getBlogPageList from '../static_queries/getBlogPageList'

const headerStyle = "pt-14 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto flex flex-col";

export default function BlogPage(props) {

    const { index, store } = props.data.localSearchSearchPosts;
    const allPostData = getBlogPageList();

    const [searchQuery, setSearchQuery] = useState('');
    const results = useFlexSearch(searchQuery, index, store);

    function unFlattenResults(results) {
        return (results.map(post => {
            const { title, slug, date } = post;
            return { slug, frontmatter: { title, date } };
        }))
    }

    const postData = searchQuery ? unFlattenResults(results) : allPostData;

    const [hasFocus, setFocus] = useState(false);
    const [isMobile, setIsMobile] = useState(undefined);

    const featuredPostData = featuredPost();
    const { currentPage, numPages } = props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 <= 1 ? '/blog' : `/blog/${currentPage - 1}`;
    const nextPage = `/blog/${currentPage + 1}`;


    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', updateIsMobile);

        document.onkeydown = function (event) {
            if (event.key === "Escape") {
                setFocus(false);
                document.getElementById('header-search').blur();
            }
        }

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        }
    }, [])

    return (
        <div className='bg-trueGray-900'>
            <Header paginationAnim={currentPage === 1 ? true : false} />
            <SEO title="Kartavya's Blog" description="Kartavya Sharma's blog. A collection of writing focused on the current state of tech and web development tutorials."/>
            <div className={classNames(headerStyle, 'mb-12 md:mb-0')}>
                {
                    isMobile ? (null) : (
                    <form
                        action='/'
                        method='get'
                        autoComplete='off'
                        className={`lg:-mt-16 flex flex-row items-center ${currentPage !== 1 ? 'hidden' : ''}`}
                    >
                        <label htmlFor='header-search' className='-mr-2 ml-2 absolute'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16" className={`${hasFocus ? 'text-orange-500' : ''}`}>
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </label>
                        <input
                            value={searchQuery}
                            onInput={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setFocus(true)}
                            type='text'
                            id='header-search'
                            placeholder='Search blog posts'
                            name='res'
                            className={`appearance-none bg-transparent rounded border-b border-trueGray-800 w-full text-white text-xl text-opacity-80 font-semibold p-4 pl-9 leading-tight focus:outline-none focus:bg-trueGray-800 
                                ${hasFocus ? 'border-orange-500' : ''}`}
                        />
                    </form>)
                }
                <div className={`flex ${currentPage === 1 ? 'lg:pt-16' : ''}`}>
                    {
                        !hasFocus ? (
                            <div className='max-w-3xl 2xl:max-w-4xl flex flex-col justify-center'>
                                {currentPage === 1 ? <Featured postData={featuredPostData} /> : null}
                                {currentPage === 1 ? (
                                    <div className='text-white text-opacity-80 font-semibold text-4xl pb-2 pt-3 font-mono md:min-w-keepWmd 2xl:min-w-keepWlg' id='post-anchor'>Latest Posts</div>)
                                    : <div className='text-white text-opacity-80 font-semibold text-4xl pb-2 font-mono md:min-w-keepWmd 2xl:min-w-keepWlg' id='post-anchor'>More Posts</div>}
                                <BlogHomeList listData={props.data.allMarkdownRemark.edges} />
                                <div className='flex justify-start items-center'>
                                    {true && (
                                        <Link to={isFirst ? '' : `${prevPage}`} rel="prev" className={`${isFirst ? 'pointer-events-none' : ''}`}>
                                            <button className={`bg-trueGray-800 px-3 py-1 flex rounded outline-none mr-1 ${isFirst ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`} disabled={isFirst}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                                </svg>
                                                {/* <div className='text-white'>Previous Page</div> */}
                                            </button>
                                        </Link>
                                    )}
                                    {true && (
                                        <Link disabled={isLast} to={isLast ? '' : `${nextPage}`} rel="next" className={`${isLast ? 'pointer-events-none' : ''}`}>
                                            <button className={`bg-trueGray-800 px-3 py-1 flex rounded outline-none ml-1 ${isLast ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`} disabled={isLast}>
                                                {/* <div className='text-white'>Next Page</div> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className='flex flex-col'>
                                    <div className='text-white font-semibold text-4xl font-mono md:min-w-keepWmd 2xl:min-w-keepWlg' id='post-anchor'>Search Results </div>
                                    <span className='text-xs text-opacity-80 text-orange-500'>(press the 'esc' key to return)</span>
                                </div>
                                <SearchResults postArray={postData} isEmpty={searchQuery} mobile={isMobile} />
                            </div>
                        )
                    }
                    <div className={`hidden lg:flex flex-col w-full items-center`}>
                        {currentPage !== 1 ? null : (
                                <>
                                    <FromAuthor />
                                    <ShareIcons isPost={false} className='mt-5' />
                                </>
                            )
                        }
                    </div>
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
        localSearchSearchPosts {
            index
            store
        }
    }
`