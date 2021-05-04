import React from 'react'
import { Link } from 'react-scroll'

export default function ToC({ headings, mobile }) {

    let items = [];
    let prevOne = new Object();
    headings.forEach((_,i) => {
        if(_.depth === 1) {
            let obj = new Object();
            obj.url = _.id;
            obj.name = _.value;
            items.push(obj);
            prevOne.idx = i;
        } else {
            if(items[prevOne.idx].items === undefined) {
                items[prevOne.idx].items = []
            }
            let obj = new Object();
            obj.url = _.id;
            obj.name = _.value;
            items[prevOne.idx].items.push(obj);
        }
    })

    console.log(items);

    function renderToC() {

        return (
            <div>
                {
                    items.map(_ => {
                        return (
                            <li className='pt-2'>
                                <Link 
                                    activeClass="active" 
                                    to={`${_.url}`} 
                                    spy={true}
                                    smooth={true}
                                    duration={500} 
                                    className='cursor-pointer hover:text-orange-500 hover:text-opacity-100 text-white text-opacity-80 text-base font-blogBody'
                                >
                                    {_.name}
                                </Link>
                                {
                                    _.items !== undefined ? (
                                        <ul className='list-inside' style={{ listStyleType: "circle" }}>
                                            {
                                                _.items.map(sub => {
                                                    return (
                                                        <li className='pt-2 pl-6'>
                                                            <Link
                                                                activeClass="active" 
                                                                to={`${sub.url}`} 
                                                                spy={true}
                                                                smooth={true}
                                                                duration={500} 
                                                                className='cursor-pointer hover:text-orange-500 hover:text-opacity-100 text-white text-opacity-80 text-base font-blogBody'
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    ) : (
                                        null
                                    )
                                }
                            </li>
                        );
                    })
                }
            </div>
        );
    }

    return (
        <div className={`${!mobile ? 'sticky top-20 max-h-screen' : 'p-3 bg-trueGray-800 rounded max-w-full'}`}>
            <div className='p-2 md:pt-0'>
                <div className='text-white font-mono text-lg lg:text-2xl'>Table of contents</div>
                <ul className='pt-4 flex flex-col items-start list-decimal list-inside text-white text-opacity-80'>
                    {renderToC()}
                </ul>
            </div>
        </div>
    );
}