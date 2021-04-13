import React from 'react'
import { Link } from 'gatsby'

function Menu({ toggle }) {
    return (
        <div className="pt-8 md:pt-12 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono flex flex-row">
            <div>
                <Link to="/">
                    <div className='text-xl sm:text-2xl md:text-3xl font-extrabold'>
                        <span className='text-orange-500'>
                            Hello there! I'm
                        </span>
                    </div>
                    <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                        Kartavya Sharma<span className="bg-clip-text text-orange-500">.</span>
                    </div>
                </Link>
            </div>
            <div className='mx-auto mr-1'>
                <div className='px-4 cursor-pointer lg:hidden' onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-list" viewBox="0 0 16 16" className='fill-orange'>
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <nav className='justify-between items-center relative font-semibold text-xl lg:text-2xl py-0 xl:py-4 text-orange-500 hidden lg:block'>
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

export default Menu
