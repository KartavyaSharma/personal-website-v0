import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage} from 'gatsby-plugin-image'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProjectPage(props) {
    const queryData = props.data.projectDataJson;
    const logo = getImage(queryData.img);
    return (
        <div className='bg-trueGray-900'>
            <Header />
            <div className="lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 mb-16 lg:mb-4 max-w-screen-2xl w-full mx-auto flex" data-sal="fade" data-sal-easing="ease" data-sal-duration="1500">
                <div className='max-w-4xl flex flex-col justify-center'>
                    <div className='grid grid-cols-1 md:grid-rows-1 md:grid-cols-5 w-full items-center pt-10 md:pt-0'>
                        <div className='col-span-4'>
                            <div className='text-xl text-orange-500 font-mono'>{queryData.category}</div>    
                            <div className='text-5xl md:text-6xl lg:text-7xl text-white font-bold font-mono'>{queryData.name}</div>
                        </div>
                        <div className='flex justify-center md:justify-end items-center'>
                            <GatsbyImage image={logo} alt={queryData.alt} />
                        </div>
                    </div>                    
                    <div className='text-3xl text-white text-opacity-80 font-mono font-semibold mt-10'>Project details</div>
                    <p className='text-white font-blogBody pt-5'>{queryData.about}</p>
                    <div className='text-3xl text-white text-opacity-80 font-mono font-semibold mt-5'>Tech stack and API usage</div>
                    <div className={`grid grid-cols-2 md:grid-cols-${queryData.tech.length} w-full items-center mt-5`}>
                        {
                            queryData.tech.map(t => {
                                const tech_stack = getImage(t.src);
                                return(
                                    <div className='flex flex-col items-center justify-center'>
                                        <GatsbyImage image={tech_stack} alt={t.name} className='m-4' />
                                        <a href={t.link} className='text-white no-underline hover:underline text-base font-mono m-2'>{t.name}</a>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {
                        queryData.expFlag ? (
                            <div>
                                <div className='text-3xl text-white text-opacity-80 font-mono font-semibold mt-5'>My experience</div>
                                <p className='text-white font-blogBody pt-5'>{queryData.mexp}</p>
                            </div>
                        ) : (
                            null
                        )
                    }
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
            tech {
                name
                link
                src {
                    childImageSharp {
                        gatsbyImageData(
                            formats: AUTO
                            placeholder: BLURRED
                            quality: 100
                            transformOptions: {fit: COVER}
                            height: 64
                            width: 64
                            layout: CONSTRAINED
                        )
                    }
                }
            }
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
            mexp
            expFlag
        }
    }
`