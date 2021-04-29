import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProjectPage(props) {
    const queryData = props.data.projectDataJson;
    const img = getImage(queryData.img);
    return (
        <div className='bg-trueGray-900'>
            <Header />
            <div className="lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 mb-16 lg:mb-4 max-w-screen-2xl w-full mx-auto flex" data-sal="fade" data-sal-easing="ease" data-sal-duration="1500">
                <div className='max-w-4xl flex flex-col justify-center'>
                    <div className='grid grid-rows-1 grid-cols-5 w-full items-center'>
                        <div className='text-5xl md:text-6xl lg:text-7xl text-white font-bold font-mono col-span-4'>{queryData.name}</div>
                        <div className='flex justify-end items-center'>
                            <GatsbyImage image={img} alt={queryData.alt} />
                        </div>
                    </div>                    
                    <div className='text-3xl text-white text-opacity-80 font-mono font-semibold mt-10'>Project details</div>
                    <p className='text-white font-blogBody pt-5'>{queryData.about}</p>
                    <div className='text-3xl text-white text-opacity-80 font-mono font-semibold mt-5'>Technology stack and API usage</div>
                    <div className='text-3xl text-white text-opacity-80 font-mono font-semibold mt-5'>My experience</div>
                </div>
            </div>
            <Footer isPage={true} />
        </div>
    );
}

export const projectQuery = graphql`
    query projectData($name: String!) {
        projectDataJson(name: {eq: $name}) {
            index
            name
            projectlink
            tags
            tech
            description
            githublink
            category
            alt
            about
            img {
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        formats: AUTO
                        transformOptions: {fit: COVER}
                        layout: CONSTRAINED
                        width: 256
                        height: 256
                        quality: 100
                    )
                }
            }
        }
    }
`