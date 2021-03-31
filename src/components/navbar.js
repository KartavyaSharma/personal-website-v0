import React from 'react'
import { Link } from 'gatsby'

function navbar({ toggle }) {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative font-mono' role="navigation">
            <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                <Link to='/' className='p-4'>Home</Link>
                <Link to='/' className='p-4'>Home</Link>
                <Link to='/' className='p-4'>Home</Link>
                <Link to='/' className='p-4'>Home</Link>
            </div>
        </nav>
    )
}

export default navbar
