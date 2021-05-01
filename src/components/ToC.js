import React from 'react'
import { Link } from 'react-scroll'

export default function ToC({ headings, mobile }) {

    function renderToC() {
        return (
            <div>
                {
                    headings.map(heading => {
                        return(
                            <li>
                                <Link 
                                    activeClass="active" 
                                    to={`${heading.id}`} 
                                    spy={true}
                                    smooth={true}
                                    duration={500} 
                                    className='cursor-pointer text-white text-opacity-80 text-base lg:text-xl font-blogBody lg:p-3 lg:pr-0'
                                >
                                    {heading.value}
                                </Link>
                            </li>
                        );
                    })
                }
            </div>
        );
    }

    return (
        <div className={`${!mobile ? 'sticky top-20 max-h-screen' : 'p-5 bg-trueGray-800 rounded'}`}>
            <div className='text-white font-bold font-mono text-lg lg:text-3xl'>Table of contents</div>
            <ul className={`pt-4 flex flex-col ${mobile ? 'items-start' : 'items-end'}`}>
                {renderToC()}
            </ul>
        </div>
    );
}