import React from 'react'

import Header from "../components/Header"

function contact() {
    return (
        <div className='bg-trueGray-900'>
            <Header />
            <div className="p-5 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono">
                <div className="text-center mb-16">
                    <p className="mt-4 text-sm leading-7 text-gray-200 font-regular uppercase">
                        Contact
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-100">
                        Get In <span className="text-orange-500">Touch</span>
                    </h3>
                </div>
                <form className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-trueGray-800" type="text" placeholder="Jane" aria-label="Full name" />
                            <p className="text-red-500 text-xs italic mt-1">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none bg-transparent border-b border-orange-500 w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-trueGray-800" type="text" placeholder="Doe" aria-label="Full name" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-password">
                                Email Address
                            </label>
                            <input className="appearance-none bg-transparent border-b border-orange-500 w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-trueGray-800" type="email" placeholder="janedoe@youremail.com" aria-label="Full name" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-password">
                                Your Message
                            </label>
                            <textarea rows="10" className="appearance-none bg-transparent border-b border-orange-500 w-full text-gray-50 mr-3 p-4 focus:bg-trueGray-800 leading-tight focus:outline-none" type="email" placeholder="Looking forward to hearing from you!" aria-label="Full name">

                            </textarea>
                        </div>
                        <div className="flex justify-between w-full px-3 py-4">
                            <button className="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default contact
