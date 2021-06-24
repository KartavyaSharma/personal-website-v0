import React from "react"

import Intro from "../components/Intro"
import Aboutme from "../components/AboutMe"
import Projects from "../components/Projects"
import Work from '../components/Work'
import Blog from "../components/Blog"
import Footer from "../components/Footer"

import SEO from '../components/SEO'

const sectionBody = "text-trueGray-800 text-base sm:text-lg lg:text-xl py-8 md:py-12 lg:py-16";

function IndexPage() {

    return (
        <div className='bg-gray-50'>
            <SEO title='Kartavya Sharma' image="../images/logo.png"/>
            <Intro />
            <Aboutme body={sectionBody} />
            <Projects />
            <Work />
            <Blog />
            <Footer />
        </div>
    );
}

export default IndexPage