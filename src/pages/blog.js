import React from 'react'

import Header from '../components/Header'
// import PageFooter from '../components/PageFooter'
import Footer from "../components/Footer"
import pageBlogList from '../static_queries/getBlogPageList'
import BlogHomeList from '../components/BlogHomeList'
import FeaturedPost from '../components/FeaturedPost'

const headerStyle = "pt-14 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono";

export default function BlogPage() {
    const data = pageBlogList();
    return(
        <div className='bg-trueGray-900'>
            <Header />
            <div className={headerStyle}>
                <div className='text-white font-semibold text-4xl pb-2'>Latest Posts</div>
                <hr className='border-orange-500 hidden md:block max-w-4xl'/>
                <BlogHomeList listData={data}/>
            </div>
            <Footer isPage={true} />
        </div>
    );
}