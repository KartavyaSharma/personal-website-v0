import React from 'react'

import Header from '../components/Header'
import PageFooter from '../components/PageFooter'
import pageBlogList from '../static_queries/getBlogPageList'
import BlogHomeList from '../components/BlogHomeList'

export default function BlogPage() {
    const data = pageBlogList();
    return(
        <div className='bg-trueGray-900'>
            <Header />
            <BlogHomeList listData={data} />
            <PageFooter />
        </div>
    );
}