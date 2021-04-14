import React, { useState, useEffect } from 'react'

import Menu from '../components/Menu'
import Burger from '../components/Burger'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const hideMenu = () => {
            if(window.innerWidth > 1024 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', hideMenu);

        return () => {
            window.removeEventListener('resize', hideMenu);
        }
    });

    return (
        <div>
            <Menu isOpen={isOpen} toggle={toggle}/>
            <Burger isOpen={isOpen} toggle={toggle}/>
        </div>
    )
}

export default Header
