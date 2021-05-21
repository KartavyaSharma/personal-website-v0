import React, { useEffect, useState } from 'react'
import { graphql} from 'gatsby'
import Img from 'gatsby-image'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Author from "../components/Author"
import ToC from "../components/ToC"
import SEO from "../components/SEO"

class Content extends React.Component {
    componentDidMount() {
        let script = document.createElement('script');
        let anchor = document.getElementById('inject-comments');
        script.setAttribute("src", "https://utteranc.es/client.js");
        script.setAttribute("repo", "KartavyaSharma/personal-website-utterances-comments");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", "github-dark");
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("async", true);
        anchor.appendChild(script);
    }
    render() {
        return (
            <div>
                <div 
                    id="body_content" 
                    className='font-blogBody md:min-w-keepWmd 2xl:min-w-keepWlg pb-10 lg:max-w-3xl 2xl:max-w-4xl' 
                    dangerouslySetInnerHTML={{ __html: this.props.hData.markdownRemark.html }}>
                </div>
                <div className='text-3xl font-mono text-white font-semibold pb-2'>Comments</div>
                <hr className='border-orange-500 hidden md:block md:min-w-keepWmd 2xl:min-w-keepWlg'/>
                <div id='inject-comments' className='md:pt-8'></div>
            </div>
        );
    }
}

function BlogPost({ data }) {

    const [isMobile, setIsMobile] = useState(undefined);

    useEffect(() => {
        setIsMobile(!(window.innerWidth >= 1024));
        const hideToC = () => {
            setIsMobile(!(window.innerWidth >= 1024));
        };

        window.addEventListener('resize', hideToC);

        return () => {
            window.removeEventListener('resize', hideToC);
        }

    }, []);

    return (
        <div className='bg-trueGray-900'>
            <Header />
            <SEO 
                title={data.markdownRemark.frontmatter.title} 
                description={data.markdownRemark.frontmatter.description} 
                isPost={true} 
                image={data.markdownRemark.frontmatter.thumbnail.publicURL}
                where={`https://www.kartavyas.com${data.markdownRemark.fields.slug}`}
            />
            <div className="pt-10 2xl:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 mb-16 lg:mb-4 max-w-screen-2xl w-full mx-auto flex">
                <div className='max-w-full lg:max-w-3xl 2xl:max-w-4xl flex flex-col justify-center'>
                    <div className='text-4xl lg:text-6xl 2xl:text-7xl text-white font-bold font-mono'>{data.markdownRemark.frontmatter.title}</div>
                    <div className='text-lg lg:text-xl text-trueGray-500 italic mt-4 font-mono'>{data.markdownRemark.frontmatter.description}</div>
                    <div className='flex items-center'>
                        <div className='text-white text-xl mt-6 mb-6 mr-4 font-mono flex flex-row'>
                            {data.markdownRemark.frontmatter.date} {data.markdownRemark.frontmatter.tags.length ? <span className='hidden md:block'>&nbsp;|</span> : null}
                        </div>
                        {
                            data.markdownRemark.frontmatter.tags.filter(tag => data.markdownRemark.frontmatter.tags !== null)
                                .map(tag => {
                                    return (
                                        <div className='pr-4'>
                                            <div className='hidden md:block text-sm rounded px-2 py-0.5 border border-trueGray-800 cursor-default bg-trueGray-700 text-white'>{tag}</div>
                                        </div>
                                    );
                                })
                        }
                    </div>
                    <Author />
                    {
                        isMobile ? (
                            <div className='flex flex-col items-start w-full pb-10'>
                                <ToC mobile={isMobile} headings={data.markdownRemark.headings} />
                            </div>
                        ) : null
                    }
                    <Img
                        src={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid.src}
                        fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
                        alt={data.markdownRemark.frontmatter.title}
                        className='max-h-blogImg'
                    />
                    <div className='pt-16'>
                        <Content hData={data} />
                    </div>
                </div>
                <div className='hidden lg:flex flex-col items-start mx-6 xl:mx-12 2xl:mx-10 w-full'>
                    <ToC headings={data.markdownRemark.headings} currPath={`https://www.kartavyas.com${data.markdownRemark.fields.slug}`} />
                </div>
            </div>
            <Footer isPage={true} />
        </div>
    )
}

export default BlogPost

export const getPostData = graphql`
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            fields {
                slug
            }
            frontmatter {
                title
                date(formatString: "Do MMMM YYYY")
                description
                tags
                thumbnail {
                    childImageSharp {
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    relativePath
                    publicURL
                }
            }
            html
            headings {
                depth
                value
                id
            }
            tableOfContents
        }
    }
`
