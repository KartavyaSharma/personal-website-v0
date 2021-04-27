import React from 'react'
import classNames from 'classnames'

import Header from '../components/Header'
import Footer from "../components/Footer"
import BlogHomeList from '../components/BlogHomeList'
import Featured from '../components/Featured'

import pageBlogList from '../static_queries/getBlogPageList'
import featuredPost from '../static_queries/getFeaturedPost'

const headerStyle = "pt-14 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto flex flex-col items-center justify-center";

export default function BlogPage() {
    const postListData = pageBlogList();
    const featuredPostData = featuredPost();
    return(
        <div className='bg-trueGray-900'>
            <Header />
            <div className={classNames(headerStyle, 'mb-12 md:mb-0')}>
                <Featured postData={featuredPostData} />
                <div className='text-white font-semibold text-4xl pb-2 font-mono'>Latest Posts</div>
                <BlogHomeList listData={postListData}/>
            </div>
            <Footer isPage={true} />
        </div>
    );
}