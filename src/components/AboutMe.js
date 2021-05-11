import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import classNames from 'classnames'

import IndexLayout from '../components/layout/IndexLayout'

function AboutMe(props) {
    const data = useStaticQuery(graphql`
        {
            aboutJson {
                content
                img {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: AUTO
                            transformOptions: {fit: COVER}
                            layout: CONSTRAINED
                            width: 600
                            quality: 100
                        )
                    }
                }
            }
        }
    `)
    const about = data.aboutJson.content.replace(/\n/g, '<br />');
    const img = getImage(data.aboutJson.img);

    const [isMobile, setIsMobile] = useState(undefined);
    
    useEffect(() => {
        setIsMobile(window.innerWidth <= 1024);
        const hideElement = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', hideElement());

        return () => {
            window.removeEventListener('resize', hideElement());
        };
    },[]);

    return (
        <IndexLayout ident="about-me" idx="01" name="About me">
            <div className='flex flex-row' data-sal="zoom-out" data-sal-easing="ease" data-sal-duration="1000">
                <div className={classNames(props.body, 'text-opacity-80')}>
                    <div className='flex flex-col lg:flex-row justify-start'>
                    <GatsbyImage 
                        image={img} 
                        alt="About me" 
                        className={`max-h-96 max-w-sm lg:max-h-full lg:max-w-none rounded-md 
                            ${!isMobile ? 'transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105' : ''}`}
                    />
                        <div id='ab-me' dangerouslySetInnerHTML={{ __html: about }} className='w-full lg:p-8 pr-0 pt-5 lg:pt-0 text-lg text-opacity-80 font-blogBody' />
                    </div>
                </div>
            </div>
        </IndexLayout>
    )
}

export default AboutMe