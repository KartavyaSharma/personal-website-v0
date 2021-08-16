import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import IndexLayout from '../components/layout/IndexLayout'

import getWorkData from '../static_queries/getWorkData'

export default function Work() {

    const data = getWorkData();

    function renderWorkList() {
        return(
            <div className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8`}>
                {
                    data.map(exp => {
                        const img = getImage(exp.node.companyLogo)
                        return(
                            <div className='border h-full border-border w-full rounded md:group-hover:bg-trueGray-400 md:group-hover:bg-opacity-10 md:group-hover:border-border
                            	transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg'>
                                <div className='grid grid-cols-1 h-full p-4 md:p-8 md:pt-5'>
                                    <div className='flex flex-row items-center w-full'>
                                        <div className='text-white text-opacity-80 text-base lg:text-xl h-full w-full font-semibold'>
                                            <div>{exp.node.position}</div>
                                            <div className='text-sm lg:text-base flex items-center mt-1'>
                                                {exp.node.company}
                                                {
                                                    exp.node.companyWebsite != "false" ? (
                                                        <div className='ml-2'>
                                                            <a href={`${exp.node.companyWebsite}`} rel='noreferrer' target='_blank'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                            <div className='text-xs text-white text-opacity-80 mt-1.5'>
                                                {exp.node.dates.start} &#8212; {exp.node.dates.end}
                                            </div>
                                        </div>
                                        {<div className='flex flex-row items-start h-full max-w-full'>
                                            <GatsbyImage image={img} alt={exp.node.company} />
                                        </div>}
                                    </div>
                                    <div className='mt-3'>
                                        <div dangerouslySetInnerHTML={{ __html: exp.node.roleDescription }} className='text-sm lg:text-base text-white text-opacity-80 font-blogBody py-4' />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <IndexLayout ident="work" idx='03' name="Work">
            <ul className='-mt-5' data-sal="zoom-out" data-sal-easing="ease" data-sal-duration="1000">
                {renderWorkList()}
            </ul>
        </IndexLayout>
    );
}