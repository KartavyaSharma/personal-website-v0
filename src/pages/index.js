import React from "react"
import { graphql } from "gatsby"

import Intro from "../components/intro"
import Aboutme from "../components/aboutme"
import Projects from "../components/projects"
import Blog from "../components/blog"
import Contact from "../components/contact"

const mobileHeaders = "py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono";
const sectionHeaderNum = "text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold font-mono bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500";
const sectionHeaderTitle = "text-3xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-10xl font-bold font-mono text-white";
const sectionBody = "text-white text-xl py-8 md:py-12 lg:py-16";

const IndexPage = ({ data }) => (
  <div className='bg-black bg-opacity-90'>
    <Intro header={mobileHeaders} body={sectionBody} />
    <Aboutme header={mobileHeaders} topNum={sectionHeaderNum} topTitle={sectionHeaderTitle} body={sectionBody} />
    <Projects header={mobileHeaders} topNum={sectionHeaderNum} topTitle={sectionHeaderTitle} body={sectionBody} />
    <Blog header={mobileHeaders} topNum={sectionHeaderNum} topTitle={sectionHeaderTitle} body={sectionBody} blogData={data}/>
    <Contact header={mobileHeaders} topNum={sectionHeaderNum} topTitle={sectionHeaderTitle} body={sectionBody} />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
query {
  markdownRemark {
    id
    frontmatter {
      title
      date
      description
      author_info {
        author_name
        author_bio
      }
    }
  }
}
`;