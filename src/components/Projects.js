import React from 'react'
import { Link } from 'gatsby'

import Myself from "../images/Salkatech.png"
import Roze from "../images/ROZE.png"
import Prime from "../images/Prime_logo.png"

// const cardAnimation = "transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ";
const cardAnimation = "";
const cardElemnentStyle = "max-w-md mr-auto border border-gray-500 hover:border-orange-500 hover:bg-orange-500 hover:bg-opacity-5 rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-4 ";
const cardBodyPaddingLeft = "pl-4 pr-8 pt-8 pb-4 ";
const cardBodyPaddingRight = "xl:pr-4 xl:pl-8 xl:pt-8 xl:pb-4 ";
const cardBodyCategory = "uppercase tracking-wide text-sm text-orange-500 font-semibold ";
const cardBodyTitle = "block mt-1 text-lg leading-tight font-medium text-white hover:underline ";
const cardBodyText = "mt-2 text-gray-400 ";

function Projects(props) {
    return (
        <div className={props.header} id="projects">
            <div className={props.topNum}>02</div>
            <div className={props.topTitle}>Projects</div>
            <div className="h-auto pt-14 pb-10 overflow-hidden flex items-center justify-center" style={{background: '#edf2f7'}}>
                <section className="text-indigo-200 body-font p-5 bg-trueGray-800 pb-10">
                    <Link to="coursedet">
                        <div className="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">

                                <figure className="visible">

                                    <div className="">

                                        <div className="pt-10 px-2 sm:px-6">
                                            <span className="inline-block py-1 px-2 rounded-full bg-orange-500 text-white  text-xs font-bold tracking-widest mb-2">Contract</span>
                                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Before they sold out <br className="hidden lg:inline-block" />readymade gluten</h1>
                                            <p className="text-indigo-200 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                                            <p className="text-indigo-200 text-base pb-8">We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center pb-12">
                                                    <div className="h-12 w-12">
                                                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                                                    </div>
                                                    <p className="text-indigo-200 font-bold ml-3">
                                                        Jane Doe <br />
                                                        <span className="text-indigo-200 text-base font-light">Apple Inc</span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </figure>

                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
                                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                            </div>
                        </div>
                    </Link>
                </section>
            </div>
            <div className="h-full mb-10 overflow-hidden flex items-center justify-center" style={{background: '#edf2f7'}}>
                <section className="text-indigo-200 body-font p-5 bg-trueGray-800 pb-10">
                    <Link to="coursedet">
                        <div className="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">

                                <figure className="visible">

                                    <div className="">

                                        <div className="pt-10 px-2 sm:px-6">
                                            <span className="inline-block py-1 px-2 rounded-full bg-orange-500 text-white  text-xs font-bold tracking-widest mb-2">Contract</span>
                                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Before they sold out <br className="hidden lg:inline-block" />readymade gluten</h1>
                                            <p className="text-indigo-200 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                                            <p className="text-indigo-200 text-base pb-8">We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center pb-12">
                                                    <div className="h-12 w-12">
                                                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                                                    </div>
                                                    <p className="text-indigo-200 font-bold ml-3">
                                                        Jane Doe <br />
                                                        <span className="text-indigo-200 text-base font-light">Apple Inc</span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </figure>

                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
                                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                            </div>
                        </div>
                    </Link>
                </section>
            </div>
            <div className="h-full overflow-hidden flex items-center justify-center" style={{background: '#edf2f7'}}>
                <section className="text-indigo-200 body-font p-5 bg-trueGray-800 pb-10">
                    <Link to="coursedet">
                        <div className="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">

                                <figure className="visible">

                                    <div className="">

                                        <div className="pt-10 px-2 sm:px-6">
                                            <span className="inline-block py-1 px-2 rounded-full bg-orange-500 text-white  text-xs font-bold tracking-widest mb-2">Contract</span>
                                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Before they sold out <br className="hidden lg:inline-block" />readymade gluten</h1>
                                            <p className="text-indigo-200 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                                            <p className="text-indigo-200 text-base pb-8">We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center pb-12">
                                                    <div className="h-12 w-12">
                                                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                                                    </div>
                                                    <p className="text-indigo-200 font-bold ml-3">
                                                        Jane Doe <br />
                                                        <span className="text-indigo-200 text-base font-light">Apple Inc</span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </figure>

                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
                                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                            </div>
                        </div>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Projects
