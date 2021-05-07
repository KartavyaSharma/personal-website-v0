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
                        <div className='text-white text-2xl md:text-3xl font-blogBody flex flex-row items-center'>
                            <span>Oops, no results found!</span>
                            <div className='flex flex-row h-full items-center pl-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                                </svg>
                            </div>
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
        <div className='text-white py-8 md:py-12 lg:py-15 max-w-4xl flex flex-col'>
            <div>{renderSearchResults()}</div>
        </div>
    );
}