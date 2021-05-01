import React from 'react'
import { Link } from 'gatsby'

function Burger({ isOpen, toggle }) {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center bg-trueGray-800 text-white font-mono text-xl mt-5' : 'hidden'} onClick={toggle}>
            <Link to='/' className='p-4'>
                Home
            </Link>
            <Link to='/#about-me' className='p-4'>
                About
            </Link>
            <Link to='/#projects' className='p-4'>
                Projects
            </Link>
            <Link to='/#skills' className='p-4 pointer-events-none'>
                <span className='text-trueGray-400 text-xs'>(coming soon) </span>Skills
            </Link>
            <Link to='/#work' className='p-4 pointer-events-none'>
                <span className='text-trueGray-400 text-xs'>(coming soon) </span>Work
            </Link>
            <Link to='/blog' className='p-4'>
                Blog
            </Link>
            <Link to='/contact' className='p-4'>
                Contact
            </Link>
        </div>
    )
}

export default Burger
