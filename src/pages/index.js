import React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar"
import Intro from "../components/intro"

const mobileHeaders = "py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono";
const links = '';
const mobileBody = "";

const IndexPage = () => (
  <div className='bg-gray-900 h-screen'>
    <Intro header={mobileHeaders} body={mobileBody}/>
  </div>
)

export default IndexPage
