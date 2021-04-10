import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function ProjectList(props) {

    function renderProjectData() {
        return (
            <div>
                {
                    props.listData.map(project => {
                        return (
                            <div className="h-full mt-14 mb-10 overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
                                <section className="text-indigo-200 body-font p-5 bg-trueGray-800 pb-10">
                                    <div>
                                        <div className="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
                                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                                                <figure className="visible">
                                                    <div className="">
                                                        <div className="pt-10 px-2 sm:px-6">
                                                            <span className="inline-block py-1 px-2 rounded-full bg-orange-500 text-white  text-xs font-bold tracking-widest mb-2">{project.node.category}</span>
                                                            <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">{project.node.name}</div>
                                                            <div className="text-indigo-200 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</div>
                                                            <div className="text-indigo-200 text-base pb-8">We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.</div>
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center pb-12">
                                                                    {
                                                                        project.node.projectlink !== "" ? <Link to={project.node.projectlink}>
                                                                            <button className='py-2 px-4 mr-4 text-white rounded-lg border border-white hover:border-orange-500 hover:bg-orange-500 flex'>
                                                                                Visit
                                                                                <svg className='ml-2 mt-0.5' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                                                                </svg>
                                                                            </button>
                                                                        </Link> : null 
                                                                    }
                                                                    <button className='py-2 px-4 text-white rounded-lg border border-white hover:border-orange-500 hover:bg-orange-500 flex'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
                                                <Img 
                                                src={project.node.img.childImageSharp.fluid.src} 
                                                fluid={project.node.img.childImageSharp.fluid} 
                                                alt={project.node.alt} 
                                                className='object-cover object-center rounded'/>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    return (
        <div>
            <ul>{renderProjectData()}</ul>
        </div>
    )
}

export default ProjectList
