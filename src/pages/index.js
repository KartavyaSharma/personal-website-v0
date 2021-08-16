import React from "react"

import Intro from "../components/Intro"
import Aboutme from "../components/AboutMe"
import Projects from "../components/Projects"
import Work from '../components/Work'
import Blog from "../components/Blog"
import Footer from "../components/Footer"

import SEO from '../components/SEO'

import { MobileProvider } from '../context/MobileContext'

const sectionBody = "text-white text-base sm:text-lg lg:text-xl";

function IndexPage() {

    return (
        <div className='bg-background'>
            <MobileProvider>
                <SEO title='Kartavya Sharma' page='Home' image="../images/logo.png"/>
                <Intro />
                <Aboutme body={sectionBody} />
                <Projects />
                <Work />
                <Blog />
                <Footer />
            </MobileProvider>
        </div>
    );
}

export default IndexPage