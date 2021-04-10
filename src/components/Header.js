import React from 'react'
import { Link } from 'gatsby'

function Header() {
    return (
        <div className="py-8 md:py-12 lg:py-16 lg:pb-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono flex flex-row">
            <div>
                <div className='text-xl sm:text-2xl md:text-3xl font-extrabold'>
                    <span className='text-orange-500'>
                        Hello there! I'm
                    </span>
                </div>
                <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                    Kartavya Sharma<span className="bg-clip-text text-orange-500">.</span>
                </div>
            </div>
            <div className='mx-auto mr-1'>
                <nav className='justify-between items-center relative font-semibold text-xl lg:text-2xl py-0 xl:py-4 text-orange-500'>
                    <Link to="/" className="hover:underline cursor-pointer">Home</Link>
                    <Link to="/#about-me" className="pl-5 md:pl-14 hover:underline cursor-pointer">About</Link>
                    <Link to="/#projects" className="pl-5 md:pl-14 hover:underline cursor-pointer">Projects</Link>
                    <Link to="/#blog" className="pl-5 md:pl-14 hover:underline cursor-pointer">Blog</Link>
                    <Link to="#contact" className="pl-5 md:pl-14 hover:underline cursor-pointer">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header
