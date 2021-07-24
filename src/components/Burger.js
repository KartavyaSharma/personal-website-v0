import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

function Burger({ isOpen, toggle }) {

    // const noScroll = () => {
    //     if (isOpen) {
    //         window.scrollTo(0, 0);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", noScroll);
    //     return () => {
    //         window.removeEventListener("scroll", noScroll);
    //     }
    // }, [noScroll]);

    return (
        <StyledMenu open={isOpen} onClick={toggle} className={`${isOpen ? 'overflow-hidden fixed' : ''} `}>
            <Link to='/' className='p-4 outline-none'>
                Home
            </Link>
            <Link to='/#about-me' className='p-4 outline-none'>
                About
            </Link>
            <Link to='/#projects' className='p-4 outline-none'>
                Projects
            </Link>
            <Link to='/#work' className='p-4 outline-none'>
                Work
            </Link>
            <Link to='/blog' className='p-4 outline-none'>
                Blog
            </Link>
            <Link to='/contact' className='p-4 outline-none'>
                Contact
            </Link>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    display: flex;
    z-index: 40;
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(20px);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: center;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 576px) {
        width: 100%;
    }

        @media (min-width: 768px) {
            .nav {
                display: none;
            }
        }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #F76C6C;
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 576px) {
            font-size: 1.5rem;
            text-align: center;
        }
    }
`

export default Burger
