import React from 'react'
import { Link } from 'gatsby'

function Header() {
    return (
        <div className="py-8 md:py-12 lg:py-16 xl:py-24 2xl:py-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono">
            <div className='text-5xl font-extrabold'>
                <span className='text-orange-500'>
                    Hello there! I'm
                </span>
            </div>
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold">
                Kartavya Sharma<span className="bg-clip-text text-orange-500">.</span>
            </div>
            <br />
            <nav className='justify-between items-center relative font-semibold text-xl lg:text-4xl py-0 xl:py-4 bg-clip-text text-orange-500'>
                <Link activeClass="active" to="about-me" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">About</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="pl-5 md:pl-14 hover:underline cursor-pointer">Projects</Link>
                <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500} className="pl-5 md:pl-14 hover:underline cursor-pointer">Blog</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="pl-5 md:pl-14 hover:underline cursor-pointer">Contact</Link>
            </nav>
        </div>
    )
}

export default Header
