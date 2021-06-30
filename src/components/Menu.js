import React from 'react'
import { Link } from 'gatsby'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'

import DropdownPage from '../components/DropdownPage'

function Menu({ toggle, isOpen }) {
    return (
        <div className="pt-8 md:pt-12 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto flex flex-row justify-center items-center">
            <div>
                <Link to="/">
                    <div className='text-xl sm:text-2xl md:text-3xl font-extrabold font-mono'>
                        <span className='text-highlight'>
                            Hello there! I'm
                        </span>
                    </div>
                    <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-Chivo">
                        Kartavya Sharma<span className="text-highlight">.</span>
                    </div>
                </Link>
            </div>
            <div className='mx-auto mr-1'>
                <div className='px-4'>
                    <Burger onClick={ toggle } isOpen={ isOpen } className='lg:hidden cursor-pointer' />
                </div>
                <nav className='justify-between items-center relative font-semibold text-xl lg:text-2xl py-0 xl:py-4 text-highlight hidden lg:block font-mono'>
                    <Link to="/" className="hover:text-red-high cursor-pointer">Home</Link>
                    <Link to="/#about-me" className="ml-10 2xl:ml-14 hover:text-red-high cursor-pointer">About</Link>
                    {/* <Link to="/#projects" className="pl-5 md:pl-14 hover:text-red-high cursor-pointer">Projects</Link> */}
                    <DropdownPage />
                    <Link to="/blog" className="ml-10 2xl:ml-14 hover:text-red-high cursor-pointer">Blog</Link>
                    <Link to="/contact" className="ml-10 2xl:ml-14 hover:text-red-high cursor-pointer">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Menu
