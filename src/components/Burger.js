import React from 'react'
import { Link } from 'gatsby'

function Burger({ isOpen, toggle }) {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center bg-yellow-500' : 'hidden'} onClick={toggle}>
            <Link to='/' className='p-4'>
                Home
            </Link>
            <Link to='/' className='p-4'>
                Menu
            </Link>
            <Link to='/' className='p-4'>
                About
            </Link>
            <Link to='/' className='p-4'>
                Contact
            </Link>
        </div>
    )
}

export default Burger
