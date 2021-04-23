import React from "react"

import Intro from "../components/Intro"
import Aboutme from "../components/AboutMe"
import Projects from "../components/Projects"
import Blog from "../components/Blog"
import Footer from "../components/Footer"

//Test

const mobileHeaders = "py-12 md:py-16 lg:py-24 2xl:py-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono";
const sectionHeaderNum = "text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold font-mono bg-clip-text text-white";
const sectionHeaderTitle = "text-5xl md:text-5xl lg:text-8xl xl:text-10xl font-bold font-mono text-orange-500";
const sectionBody = "text-white text-base sm:text-lg lg:text-xl py-8 md:py-12 lg:py-16";

function IndexPage() {
  return (
    <div className='bg-trueGray-900'>
      <Intro header={mobileHeaders} body={sectionBody} />
      <Aboutme header={mobileHeaders} topNum={sectionHeaderNum} topTitle={sectionHeaderTitle} body={sectionBody} />
      <Projects header={mobileHeaders} topNum={sectionHeaderNum} topTitle={sectionHeaderTitle} body={sectionBody} />
      <Blog header={mobileHeaders} topNum={sectionHeaderNum} topTitle={sectionHeaderTitle} body={sectionBody} />
      <Footer />
    </div>
  );
}

export default IndexPage