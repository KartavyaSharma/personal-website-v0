import React from 'react'
import { Link } from 'react-scroll'
import { Helmet } from 'react-helmet'

import Logo from "../images/logo.png";

function footer(props) {
    return (
        <div className='font-mono' id="contact">
            <body className="h-1/2 overflow-hidden flex items-center justify-center">
                <div className="w-full flex items-center justify-center">
                    <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
                        <div className="w-full text-7xl font-bold">
                            <h1 className="w-full md:w-2/3">Let's get in touch!</h1>
                        </div>
                        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                            <p className="w-full md:w-2/3 text-gray-400">I am currently involved with freelance web development for small to medium projects and am always interested in a challenge. Let's connect!</p>
                            <div className="w-44 pt-6 md:pt-0">
                                <a className="bg-green-500 hover:bg-green-600 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact Me</a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex mt-24 mb-12 flex-row justify-between items-baseline">
                                <div>
                                    <img src={Logo} className='w-36' />
                                </div>
                                <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className="hidden md:block cursor-pointer text-gray-400 hover:text-green-500 uppercase">Home</Link>
                                <Link activeClass="active" to="about-me" spy={true} smooth={true} duration={500} className="hidden md:block cursor-pointer text-gray-400 hover:text-green-500 uppercase">About</Link>
                                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="hidden md:block cursor-pointer text-gray-400 hover:text-green-500 uppercase">Projects</Link>
                                <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500} className="hidden md:block cursor-pointer text-gray-400 hover:text-green-500 uppercase">Blog</Link>
                                <div className="flex flex-row space-x-8 items-center justify-between">
                                    <a href='https://github.com/KartavyaSharma' target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-github" viewBox="0 0 16 16" className='hover:fill-green'>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    <a href='mailto:kartavya@berkeley.edu'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-envelope-fill" viewBox="0 0 16 16" className='hover:fill-green'>
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                        </svg>
                                    </a>
                                    <a href='https://www.linkedin.com/in/kartavya-sharma/' target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16" className='hover:fill-green'>
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <hr className="border-green-500" />
                            <p className="w-full text-center my-12 text-white">&lt;&gt; with &#10084;&#65039; by Kartavya Sharma |
                            <Link to='https://github.com/KartavyaSharma/personal-website' className='hover:text-green-500 cursor-pointer'> <span className='underline'>Source Code</span></Link> on Github</p>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default footer
