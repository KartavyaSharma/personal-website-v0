import React, { useState, useEffect } from 'react'

import Menu from '../components/Menu'
import Burger from '../components/Burger'

function Header(props) {

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
        {
            false && (props.paginationAnim || props.paginationAnim === undefined) ? (
                <div data-sal="fade" data-sal-easing="ease" data-sal-duration="1500">
                    <Menu isOpen={isOpen} toggle={toggle}/>
                    <Burger isOpen={isOpen} toggle={toggle}/>
                </div>
            ) : (
                <div>
                    <Menu isOpen={isOpen} toggle={toggle}/>
                    <Burger isOpen={isOpen} toggle={toggle}/>
                </div>
            )
        }
        </div>
    )
}

export default Header
