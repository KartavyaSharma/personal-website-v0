import React from 'react'
import { Link } from 'gatsby'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'

import DropdownPage from '../components/DropdownPage'

function Menu({ toggle, isOpen }) {
    return (
        <div className="pt-8 md:pt-12 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono flex flex-row justify-center items-center">
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
                <div className='px-4'>
                    <Burger onClick={ toggle } isOpen={ isOpen } className='lg:hidden cursor-pointer' />
                </div>
                <nav className='justify-between items-center relative font-semibold text-xl lg:text-2xl py-0 xl:py-4 text-orange-500 hidden lg:block'>
                    <Link to="/" className="hover:underline cursor-pointer">Home</Link>
                    <Link to="/#about-me" className="pl-10 2xl:pl-14 hover:underline cursor-pointer">About</Link>
                    {/* <Link to="/#projects" className="pl-5 md:pl-14 hover:underline cursor-pointer">Projects</Link> */}
                    <DropdownPage />
                    <Link to="/blog" className="pl-10 2xl:pl-14 hover:underline cursor-pointer">Blog</Link>
                    <Link to="/contact" className="pl-10 2xl:pl-14 hover:underline cursor-pointer">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Menu
