import React from "react"
import { Link } from "gatsby"

import Intro from "../components/intro"
import Aboutme from "../components/aboutme"

const mobileHeaders = "py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono";
const sectionHeaderNum = "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-mono bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500";
const sectionHeaderTitle = "text-xl sm:text-2xl md:text-8xl lg:text-10xl font-bold font-mono text-white pl-4";
const sectionBody = "text-white text-xl lg:text-3xl py-8 md:py-12 lg:py-16";

const IndexPage = () => (
  <div className='bg-black bg-opacity-90'>
    <Intro header={mobileHeaders} body={sectionBody} />
    <Aboutme header={mobileHeaders} topNum={sectionHeaderNum} topTitle={sectionHeaderTitle} body={sectionBody}/>
  </div>
)

export default IndexPage
