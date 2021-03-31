import React from 'react'
import { Link } from 'gatsby'

const navMobile = "";

function intro(props) {
    return (
        <div className={props.header}>
            <div className='text-5xl font-extrabold'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
                    Hello there!
                </span>
            </div>
            <div className="text-white text-8xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold">
                I'm Kartavya Sharma<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">.</span>
            </div>
            <br />
            <nav className='justify-between items-center relative text-white font-semibold text-base md:text-lg lg:text-2xl' role='navigation'>
                <a href='#' target='_blank'>Home</a>
                <a href='#' target='_blank' className="pl-10">Projects</a>
                <a href='#' target='_blank' className="pl-10">Blog</a>
                <a href='#' target='_blank' className="pl-10">Contact</a>
            </nav>
        </div>
    )
}

export default intro
