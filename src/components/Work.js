import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import IndexLayout from '../components/layout/IndexLayout'

import getWorkData from '../static_queries/getWorkData'

export default function Work() {

    const data = getWorkData();

    function renderWorkList() {
        return(
            <div className={`grid grid-rows-${Math.floor(data.length/2)} lg:grid-cols-2 gap-y-10 lg:gap-y-20 w-full`}>
                {
                    data.map(exp => {
                        const img = getImage(exp.node.companyLogo)
                        return(
                            <div className='grid grid-cols-1'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center w-full'>
                                        <GatsbyImage image={img} alt={exp.node.company} />
                                        <div className='text-white text-base lg:text-xl font-semibold px-4'>
                                            {exp.node.position}
                                            <br/>
                                            { exp.node.companyWebsite === "" ? (
                                                    <span className='text-sm lg:text-base'>{exp.node.company}</span>
                                                ) : (
                                                    <a href={exp.node.companyWebsite} target='_blank' rel='noreferrer'>
                                                        <span className='text-sm lg:text-base'>{exp.node.company}</span>
                                                    </a>
                                                )
                                            }
                                            <br/>
                                            <span className='text-xs text-white text-opacity-80'>
                                                {exp.node.dates.start} - {exp.node.dates.end}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='border-l border-trueGray-800 mt-3 h-full'>
                                        <div dangerouslySetInnerHTML={{ __html: exp.node.roleDescription }} className='text-sm lg:text-base text-white text-opacity-80 font-blogBody p-4' />
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
        <IndexLayout ident="work" idx='03' name="work">
            <ul className='mt-10 md:mt-15' data-sal="zoom-out" data-sal-easing="ease" data-sal-duration="1000">
                {renderWorkList()}
            </ul>
        </IndexLayout>
    );
}