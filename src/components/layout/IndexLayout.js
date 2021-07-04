import React from 'react'
import classNames from 'classnames'

export default function IndexLayout({ children, customClass, ident, idx, name }) {

    customClass = customClass === undefined ? '' : customClass;

    return (
        <div 
            className={classNames('py-12 md:py-16 lg:py-18 2xl:py-48 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto '+ customClass)} 
            id={ident}>
            <div>
                <div 
                    className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold font-mono bg-clip-text text-highlight' 
                    data-sal="slide-right"
                    data-sal-easing="ease" 
                    data-sal-duration="1000"
                >
                    {idx}
                </div>
                <div className='flex flex-row items-center'>
                    <div 
                        className='text-5xl md:text-5xl lg:text-8xl font-bold font-mono text-white mr-5 flex-nowrap min-w-max'
                        data-sal="slide-right"
                        data-sal-easing="ease" 
                        data-sal-duration="1000"
                    >
                        {name}
                    </div>
                    <hr className='border border-border mt-5 w-full' data-sal="slide-left" data-sal-easing="ease" data-sal-duration="800"/>
                </div>
            </div>
            <div className='mt-10 md:mt-16 lg:mt-18'>
                {children}
            </div>

        </div>
    );
}