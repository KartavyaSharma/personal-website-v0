import React, { useEffect, useState } from "react"
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'gatsby'

import ParticleBg from "../components/Particles"
import Dropdown from '../components/Dropdown'


function Intro() {

    const [isMobile, setIsMobile] = useState(undefined);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
        const changeMenu = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', changeMenu);

        return () => {
            window.removeEventListener('resize', changeMenu);
        }
    }, []);

    return (
        <div className='py-12 md:py-16 lg:py-18 2xl:py-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto h-screen flex flex-row items-center' id="home">
            <div className='w-1/2 flex flex-col relative'>
                
            </div>
        </div>
    )
}

export default Intro
