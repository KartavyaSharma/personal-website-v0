import React from 'react'
import { Link } from 'gatsby'

function intro(props) {
    return (
        <div className={props.header}>
            <div className='text-5xl font-extrabold'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
                    Hello there!
                </span>
            </div>
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold">
                I'm Kartavya Sharma<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">.</span>
            </div>
            <br />
            <nav className='justify-between items-center relative text-white font-semibold text-2xl' role='navigation'>
                <a href='#' target='_blank'>Home</a>
                <a href='#' target='_blank' className="pl-10">Projects</a>
                <a href='#' target='_blank' className="pl-10">Blog</a>
                <a href='#' target='_blank' className="pl-10">Contact</a>
            </nav>
            <div className='text-white text-xl py-8 md:py-12 lg:py-16'>
                I'm a current freshman at UC Berkeley studying Electrical Engineering and Computer Science. I'm interested in Competitive Programming,
                Web Development Technologies, and Machine Learning. I currently dabble with C++ and Python, but am currently exploring Jamstack with React (with Gatsby),
                GraphQL, and headless CMS technologies.
            </div>
        </div>
    )
}

export default intro
