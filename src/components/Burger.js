import React from 'react'
import { Link } from 'gatsby'

function Burger({ isOpen, toggle }) {
    return (
        <div role='button' tabIndex='0' className={isOpen ? 'grid grid-rows-4 text-center bg-trueGray-800 text-white font-mono text-xl mt-5' : 'hidden'} onClick={toggle} onKeyDown={toggle}>
            <Link to='/' className='p-4'>
                Home
            </Link>
            <Link to='/#about-me' className='p-4'>
                About
            </Link>
            <Link to='/#projects' className='p-4'>
                Projects
            </Link>
            <Link to='/#work' className='p-4'>
                 Work
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
