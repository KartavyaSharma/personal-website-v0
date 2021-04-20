import React from 'react'

import Header from '../components/Header'
import PageFooter from '../components/PageFooter'
import pageBlogList from '../static_queries/getBlogPageList'
import BlogHomeList from '../components/BlogHomeList'

const headerStyle = "pt-14 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto flex font-mono";

export default function BlogPage() {
    const data = pageBlogList();
    return(
        <div className='bg-trueGray-900'>
            <Header />
            <div className={headerStyle}>
                <BlogHomeList listData={data}/>
            </div>
            <PageFooter />
        </div>
    );
}