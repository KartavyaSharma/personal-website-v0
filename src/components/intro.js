import React from 'react'

function intro() {
    return (
        <div className='py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto'>
            <div className='text-5xl font-extrabold'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
                    Hello there!
                </span>
            </div>
            <div className="text-white text-8xl font-extrabold">
                I'm Kartavya Sharma<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">.</span>
            </div>
        </div>
    )
}

export default intro
