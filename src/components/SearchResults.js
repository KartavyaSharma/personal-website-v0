import React from 'react'
import { Link } from 'gatsby'

import authorData from "../static_queries/getAuthorData"

export default function SearchResults(props) {

    function renderSearchResults() {

        const name = authorData().name;

        return (
            <div>
                {
                    props.isEmpty !== '' && props.postArray.length === 0 ? (
                        <div className='text-white text-2xl md:text-3xl font-blogBody flex flex-col items-start'>
                            <span>Oops, no results found!</span>
                        </div>
                    ) : (
                        <div>
                            <div className={`grid grid-rows-${props.postArray.length} ${props.postArray.length === 1 ? 'justify-start' : 'justify-center'} items-center gap-y-10`}>
                                {
                                    props.postArray.map(post => {
                                        let title;
                                        let date;
                                        let slug;
                                        if (!props.isEmpty) {
                                            title = post.node.frontmatter.title;
                                            date = post.node.frontmatter.date;
                                            slug = post.node.fields.slug;
                                        } else {
                                            title = post.frontmatter.title;
                                            date = post.frontmatter.date;
                                            slug = post.slug;
                                        }

                                        return (
                                            <div className='grid grid-cols-3 items-center'>
                                                <div className='justify-start items-center gap-y-4 col-span-2'>
                                                    <Link to={slug}>
                                                        <div className={`text-base md:text-2xl font-semibold pr-3 hover:text-orange-500 hover:cursor-pointer hover:no-underline opacity-80 hover:opacity-100
                                                                ${!props.mobile ? 'hover:transition hover:ease-in-out transform hover:translate-x-4 duration-300' : ''}`}>
                                                            {title}
                                                        </div>
                                                    </Link>
                                                    <div className='text-sm pt-2 md:p-0 md:pt-3 text-white text-opacity-60 flex'>
                                                        <span className='hidden md:block pr-1'>By {name} |</span> {date}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

    return (
        <div className='text-white py-8 md:py-12 lg:py-15 max-w-4xl flex flex-col' id='search-results'>
            <div>{renderSearchResults()}</div>
        </div>
    );
}