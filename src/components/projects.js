import React from 'react'
import Myself from "../images/myself.jpg"

function projects(props) {
    return (
        <div className={props.header} id="projects">
            <div className={props.topNum}>02</div>
            <div className={props.topTitle}>Projects</div>
            <div className='flex flex-col mt-4 mx-auto py-4 md:py-8 lg:py-12'>
                <div className='w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
                    <div className='md:flex'>
                        <div className='md:flex-shrink-0'>
                            <img className='h-64 w-full object-cover md:w-48 lg:w-64' src={Myself} alt=''/>
                        </div>
                        <div className='p-8'>
                            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>Project</div>
                            <a href='#' className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>Project Title</a> 
                            <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects
